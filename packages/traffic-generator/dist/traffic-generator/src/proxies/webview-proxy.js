"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAds = void 0;
const electron_1 = require("electron");
const hosts_json_1 = __importDefault(require("../__test__/data/hosts.json"));
function webviewProxy(proxy, partition = "persist:webviewsession", callback) {
    let ses = electron_1.session.defaultSession;
    if (typeof partition === "string") {
        ses = electron_1.session.fromPartition(partition);
    }
    //console.log(ses.getUserAgent());
    ses.setProxy({ proxyRules: proxy }).then(() => {
        console.log(`injected [${partition}] with proxy: ${proxy}`);
    });
    ses.webRequest.onErrorOccurred((details) => {
        if (details.resourceType == "mainFrame" &&
            !isAds(new URL(details.url).hostname)) {
            const errors = ["ERR_TIMED_OUT", "ERR_PROXY_CONNECTION_FAILED"];
            // check if the string has some of the terms
            const hasProxyError = errors.some((term) => details.error.toUpperCase().includes(term));
            if (hasProxyError) {
                if (typeof callback === "function") {
                    console.log("Proxy error", details.resourceType, details.url);
                    callback(details, proxy, partition);
                }
            }
            else {
                console.log("request error", details.error, details.url);
            }
        }
    });
}
/**
 * extract host from url
 * @param url
 * @returns
 */
function extracthost(url) {
    // if url is valid, parsing and return host
    if (/^https?:\/\//gs.test(url)) {
        return new URL(url).hostname;
    }
    return url;
}
/**
 * detect url is ads?
 * @param url
 * @param debug
 * @returns
 */
function isAds(url, debug = false) {
    url = extracthost(url);
    if (debug)
        console.log("ads", url, typeof hosts_json_1.default[url] === "string");
    return typeof hosts_json_1.default[url] === "string";
}
exports.isAds = isAds;
exports.default = webviewProxy;
//# sourceMappingURL=webview-proxy.js.map