---
title: adblock detector
date: 2022-10-10T16:15:00+0700
updated: 2022-10-10T16:15:00+0700
---

# AdBlock Detector
created by: Dimas Lanjaka <dimaslanjaka@gmail.com>

license: MIT

todo in the future:
- [ ] Build for react
- [x] Build for any website

demo:
- [Development](https://raw.githack.com/dimaslanjaka/public-source/master/assets/adblock-notify/index.html)
- [Production](https://www.webmanajemen.com/The%20Legend%20Of%20Neverland/Quiz.html)

nunjucks example: [https://github.com/dimaslanjaka/public-source/blob/master/_data/body-end.njk](https://github.com/dimaslanjaka/public-source/blob/master/_data/body-end.njk)

made for [https://webmanajemen.com](https://webmanajemen.com), but freely used for all websites.

This adblock detector script will continue to be updated as the browser api develops. Be sure to source from here via [raw.githack.com](https://raw.githack.com).

```html
<!-- this html from content.html -->
<div id="ykth" class="ykth-hide">
  <div class="ykth-inner">
    <div class="ykth-head">
      <svg style="width: 30px; height: 30px" viewBox="0 0 26 26">
        <path
          fill="#FFFFFF"
          d="M13,13H11V7H13M12,17.3A1.3,1.3 0 0,1 10.7,16A1.3,1.3 0 0,1 12,14.7A1.3,1.3 0 0,1 13.3,16A1.3,1.3 0 0,1 12,17.3M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3Z" />
      </svg>
      <b>Adblock Detect</b>
      <p>We have detected that you are using adblock in your browser</p>
      <i class="close" id="close-notif">&#215;</i>
    </div>
    <div class="ykth-body">
      <p>
        Our website is made possible by displaying online advertisements to our
        visitors.
      </p>
      <p>Please consider supporting us by disabling your ad blocker.</p>
    </div>
    <!-- Start Condition When JS Disable -->
    <noscript>
      <div class="ykth-body">
        <p>Javascript is disabled in your web browser.</p>
        <p>
          For full functionality of this site it is necessary to enable
          JavaScript. Here are the
          <a
            href="https://www.enable-javascript.com/"
            target="_blank"
            rel="nofollow noopener noreferer">
            instructions how to enable JavaScript in your web browser</a
          >.
        </p>
      </div>
      <style>
        #ykth {
          display: block !important;
        }

        .ykth-inner > .ykth-body {
          display: none;
        }

        .ykth-head > b,
        .ykth-head > p {
          font-size: 0;
        }

        .ykth-head > b:before {
          content: 'Javascript Detected';
          font-size: 16px;
        }

        .ykth-head > p:before {
          content: 'We have detected that you are disable javascript in your browser';
          font-size: 14px;
        }
      </style>
    </noscript>
    <!-- End Condition When JS Disable -->
  </div>
</div>
<!-- this css from style.css -->
<link rel="stylesheet" href="https://raw.githack.com/dimaslanjaka/public-source/master/assets/adblock-notify/style.css" />
<!-- this script from script.js -->
<script src="https://raw.githack.com/dimaslanjaka/public-source/master/assets/adblock-notify/script.js"></script>
```

## Our libraries
| Package name | Repository |
| :--- | :--- |
| AdBlock Detector Notify | https://github.com/dimaslanjaka/public-source/blob/master/assets/adblock-notify |
| Safelinkify | https://github.com/dimaslanjaka/safelink |
| Form Saver | https://github.com/dimaslanjaka/smartform |
| Google News Sitemap Generator | https://github.com/dimaslanjaka/google-news-sitemap |
| Sitemap Crawler (forked -> upgrade -> modified) | https://github.com/dimaslanjaka/static-blog-generator-hexo/tree/master/packages/sitemap-crawler |
| GitHub Command Helper | https://github.com/dimaslanjaka/git-command-helper |
| Optimized NodeJS Package Types | https://github.com/dimaslanjaka/nodejs-package-types |
| Public Proxies Grabber | https://github.com/dimaslanjaka/proxies-grabber |
| NodeJS Persistent Cache (forked -> upgrade -> modified) | https://github.com/dimaslanjaka/persistent-cache/tree/improve2 |
| Javascript Prototype Extender Full Typestrong Integrated | https://github.com/dimaslanjaka/js-prototypes |
| PHP RSS Parser | https://github.com/dimaslanjaka/rss-parser |
| PHP Currency Converter | https://github.com/dimaslanjaka/currency-converter.git |

### Gulp Plugins
| Package name | Repository |
| :--- | :--- |
| gulp-dom (forked -> upgrade -> modified) | https://github.com/dimaslanjaka/static-blog-generator-hexo/tree/master/packages/gulp-dom |

### Hexo Plugins
| Package name | Repository |
| :--- | :--- |
| hexo-post-parser | https://github.com/dimaslanjaka/hexo-post-parser |
| hexo-generator-redirect (forked -> upgrade -> modified) | https://github.com/dimaslanjaka/hexo-generator-redirect |
| hexo-seo | https://github.com/dimaslanjaka/hexo-seo |
| hexo-adsense | https://github.com/dimaslanjaka/hexo-adsense |
| hexo-blogger-xml | https://github.com/dimaslanjaka/hexo-blogger-xml |


<!-- css readme.css -->
<!-- include content.html -->
<!-- css style.css -->
<!-- script script.js -->