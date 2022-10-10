/* eslint-disable @typescript-eslint/triple-slash-reference */
/* global adblock */
/// <reference path="./adblock.js" />

fetch(
  '//raw.githubusercontent.com/dimaslanjaka/public-source/master/assets/adblock-notify/content.html'
)
  .then((res) => res.text())
  .then((content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    document.body.appendChild(div);
    setTimeout(() => {
      new adblock().ajaxMethod().then(hideNotifAdblock).catch(showNotifAdblock);
    }, 500);
  });

var ykrd1 =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
var ykrd2 = Math.random().toString(36).substring(2, 7);
var adblockWrapper = document.getElementById('ykth');
if (adblockWrapper) {
  adblockWrapper.setAttribute('id', ykrd1);
  adblockWrapper.classList.add('ykwrp_' + ykrd2);
}

function hideNotifAdblock() {
  document.getElementById(ykrd1).classList.add('ykth-hide');
}
function showNotifAdblock() {
  document.getElementById(ykrd1).classList.remove('ykth-hide');
}
