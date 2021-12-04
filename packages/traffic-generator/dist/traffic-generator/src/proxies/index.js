"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.random = void 0;
var tslib_1 = require("tslib");
/* eslint-disable import/extensions */
var axios_1 = (0, tslib_1.__importDefault)(require("axios"));
var spys_txt_1 = require("../../packages/proxy-grabber/src/parser/spys.txt");
var db_1 = (0, tslib_1.__importDefault)(require("../../packages/proxy-grabber/src/db"));
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var moment_1 = (0, tslib_1.__importDefault)(require("moment"));
//import "../../../hexo-seo/packages/js-prototypes/src/Array";
require("../../../hexo-seo/packages/js-prototypes/src/globals");
var db = new db_1.default(path_1.default.join(process.cwd(), "databases/proxies"));
var instance = axios_1.default.create({
    baseURL: "https://google.com/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
    // `maxRedirects` defines the maximum number of redirects to follow in node.js.
    // If set to 0, no redirects will be followed.
    maxRedirects: 5
});
var lastUpdated = db.exists("/sslProxiesOrg/lastUpdated")
    ? db.get("/sslProxiesOrg/lastUpdated")
    : 100;
if ((0, moment_1.default)().diff(lastUpdated, "days") > 3) {
    instance.get("http://spys.me/proxy.txt").then(function (response) {
        var parsed = (0, spys_txt_1.parser)(response.data);
        db.push("/spys/proxies", parsed);
        db.push("/spys/lastUpdated", new Date());
    });
}
var get = db.get("/spys/proxies");
/**
 * TYPE://IP:PORT
 */
var result = db.get("/spys/electron-proxies", null)
    ? db.get("/spys/electron-proxies")
    : get.map(function (ret) {
        return ret.type + "://" + ret.proxy;
    });
exports.default = result;
var random = function () {
    return result.shuffle().random();
};
exports.random = random;
function remove(proxy) {
    if (typeof result[proxy] == "string") {
        if (typeof proxy == "number")
            result.deleteAt(proxy);
        else
            result.unset(proxy);
        db.push("/spys/electron-proxies", result);
    }
    return result;
}
exports.remove = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJveGllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsc0NBQXNDO0FBQ3RDLDZEQUEwQjtBQUMxQiw2RUFHMEQ7QUFDMUQsd0ZBQXNEO0FBQ3RELDJEQUF3QjtBQUN4QiwrREFBNEI7QUFDNUIsOERBQThEO0FBQzlELGdFQUE4RDtBQUU5RCxJQUFNLEVBQUUsR0FBRyxJQUFJLFlBQUcsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFDbEUsSUFBTSxRQUFRLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQztJQUM1QixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFO0lBQ3hDLCtFQUErRTtJQUMvRSw4Q0FBOEM7SUFDOUMsWUFBWSxFQUFFLENBQUM7Q0FDaEIsQ0FBQyxDQUFDO0FBRUgsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztJQUN6RCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztJQUN0QyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ1IsSUFBSSxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUMxQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtRQUNyRCxJQUFNLE1BQU0sR0FBRyxJQUFBLGlCQUFJLEVBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0NBQ0o7QUFFRCxJQUFNLEdBQUcsR0FBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNqRDs7R0FFRztBQUNILElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDO0lBQ25ELENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDO0lBQ2xDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztRQUNWLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztBQUVQLGtCQUFlLE1BQU0sQ0FBQztBQUNmLElBQU0sTUFBTSxHQUFHO0lBQ3BCLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUZXLFFBQUEsTUFBTSxVQUVqQjtBQUNGLFNBQWdCLE1BQU0sQ0FBQyxLQUFzQjtJQUMzQyxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUNwQyxJQUFJLE9BQU8sS0FBSyxJQUFJLFFBQVE7WUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBUEQsd0JBT0MifQ==