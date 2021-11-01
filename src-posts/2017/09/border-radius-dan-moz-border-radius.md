---
title: border-radius dan -moz-border-radius
webtitle: WMI Gitlab
subtitle: Salah satu sifat CSS3 yang paling ditunggu
  adalah border-radius . Perancang web tidak lagi harus menggunakan struktur
  tabel yang rumit
lang: en
date: 2017-09-30T02:24:00.000+07:00
type: post
tags: []
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
modified: 2017-09-30T02:24:05.184+07:00
category:
  - CSS
comments: true
cover: http://cdn.the-art-of-web.com/images/moz-border-radius.gif
location: ""

---

<div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Salah satu sifat CSS3 yang paling ditunggu adalah&nbsp;<tt style="background-color: #aaffff; white-space: pre;">border-radius</tt>&nbsp;.</span>&nbsp;<span class="notranslate">Perancang web tidak lagi harus menggunakan struktur tabel yang rumit menggunakan grafik sudut khusus atau termasuk file JavaScript misterius untuk menghasilkan desain dengan sudut yang membulat.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Sementara Internet Explorer sebelum IE9 tidak mendukung banyak (atau ada) sifat CSS lanjutan, Mozilla (Firefox dan peramban terkait) dan WebKit (&nbsp;<a href="http://translate.googleusercontent.com/translate_c?depth=2&amp;nv=1&amp;rurl=translate.google.com&amp;sl=en&amp;sp=nmt4&amp;tl=id&amp;u=http://webkit.org/&amp;usg=ALkJrhg8OjzZK3784vVm2LBZMLOgPuyHOw" rel="noopener noreferer nofollow" style="color: green;" target="_blank">mesin peramban web</a>&nbsp;Apple yang digunakan di&nbsp;<a href="http://translate.googleusercontent.com/translate_c?depth=2&amp;nv=1&amp;rurl=translate.google.com&amp;sl=en&amp;sp=nmt4&amp;tl=id&amp;u=http://www.apple.com/safari/&amp;usg=ALkJrhh6t9I6gY5IeWmOfLkwtQhirf1cyg" rel="noopener noreferer nofollow" style="color: green;" target="_blank">Safari</a>&nbsp;dan&nbsp;<a href="http://translate.googleusercontent.com/translate_c?depth=2&amp;nv=1&amp;rurl=translate.google.com&amp;sl=en&amp;sp=nmt4&amp;tl=id&amp;u=http://www.google.com/chrome&amp;usg=ALkJrhhFc-prLIUde8NtoZSmag_eOjuFsQ" rel="noopener noreferer nofollow" style="color: green;" target="_blank">Chrome</a>&nbsp;) dan Opera telah mendukungnya selama bertahun-tahun.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate"><b>Awalan vendor (&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-moz</tt>&nbsp;,&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-webkit</tt>&nbsp;) sekarang tidak lagi diperlukan untuk rilis peramban terbaru karena mereka semua mengadopsi sintaks CSS3 resmi.</b></span></div><h2 id="section_0" style="background: rgb(224, 216, 183); border-radius: 6px 12px; box-shadow: rgb(255, 255, 255) 0px 0px 5px inset; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 1.25em; letter-spacing: 1px; margin: 40px -10px 20px; padding: 4px 8px; position: relative;">1.&nbsp;<span class="notranslate">Definisi dan sintaks untuk border-radius</span></h2><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Seperti banyak properti CSS yang berkaitan dengan margin, padding dan border, ada empat properti individual - satu untuk setiap sudut elemen kotak - dan satu properti singkat.</span>&nbsp;<span class="notranslate">Masing-masing atribut sudut akan menerima satu atau dua nilai.</span><span class="notranslate">Properti&nbsp;<tt style="background-color: #aaffff; white-space: pre;">border-radius</tt>&nbsp;akan menerima hingga dua nilai di browser WebKit dan sampai delapan sekarang di Firefox 3.5.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Berikut adalah atribut khusus CSS dan browser yang dimaksud:</span></div><table class="collapse" style="background-color: white; border-collapse: collapse; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; margin: 1em auto; width: 100%px;"><thead><tr style="border: 1px solid rgb(224, 216, 183);"><th style="background: rgb(224, 216, 183); border: 1px dotted rgb(153, 153, 153); padding: 2px 2em 2px 4px; text-align: left;"><span class="notranslate">CSS3</span></th><th style="background: rgb(224, 216, 183); border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; text-align: left;"><span class="notranslate">Setara Mozilla</span></th><th style="background: rgb(224, 216, 183); border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; text-align: left;"><span class="notranslate">Setara dengan WebKit</span></th></tr></thead><tbody><tr style="border: 1px solid rgb(224, 216, 183);"><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">border-top-right-radius</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-moz-border-radius-topright</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-webkit-border-top-right-radius</span></td></tr><tr style="background: rgb(252, 250, 240); border: 1px solid rgb(224, 216, 183);"><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">border-bottom-right-radius</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-moz-border-radius-bottomright</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-webkit-border-bottom-right-radius</span></td></tr><tr style="border: 1px solid rgb(224, 216, 183);"><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">border-bottom-left-radius</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-moz-border-radius-bottomleft</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-webkit-border-left-left-radius</span></td></tr><tr style="background: rgb(252, 250, 240); border: 1px solid rgb(224, 216, 183);"><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">radius batas kiri atas</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-moz-border-radius-topleft</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-webkit-border-top-left-radius</span></td></tr><tr style="border: 1px solid rgb(224, 216, 183);"><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">border-radius</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-moz-border-radius</span></td><td style="border: 1px dotted rgb(153, 153, 153); padding: 2px 4px; vertical-align: top;"><span class="notranslate">-webkit-border-radius</span></td></tr></tbody></table><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Sebelum IE9, properti CSS3 ini&nbsp;<b>tidak berfungsi di Internet Explorer</b>&nbsp;.</span>&nbsp;<span class="notranslate">Versi 'Mozilla' bagaimanapun bekerja dengan sangat baik di Firefox dan browser berbasis Mozilla lainnya dan 'WebKit' di Safari dan Chrome serta iPhone / iPad.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Masing-masing sudut CSS3 properti mengambil satu atau dua nilai&nbsp;<i>panjang</i>&nbsp;(umumnya nilai 'px' atau 'em').</span>&nbsp;<span class="notranslate">Jika satu nilai diberikan maka itu menjadi radius sudut yang membulat.</span>&nbsp;<span class="notranslate">Jika dua nilai diberikan maka mereka menjadi radius horizontal dan vertikal untuk sudut elips.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Sintaks Mozilla sebelum Firefox 3.5 hanya mendukung sudut bulat (berlawanan dengan elips) dan menambahkan nilai kedua akan menghasilkan sudut persegi standar.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Properti&nbsp;<tt style="background-color: #aaffff; white-space: pre;">border-radius</tt>&nbsp;di WebKit menerima satu atau dua nilai dan menggunakannya untuk membuat gaya keempat penjuru membuat bentuk simetris yang bagus.</span>&nbsp;<span class="notranslate"><a href="http://translate.googleusercontent.com/translate_c?depth=2&amp;nv=1&amp;rurl=translate.google.com&amp;sl=en&amp;sp=nmt4&amp;tl=id&amp;u=http://www.the-art-of-web.com/css/border-radius/&amp;usg=ALkJrhgPcL3jYr_vlupRO8lUXDIt6H_zqw#firefox_35" rel="noopener noreferer nofollow" style="color: #5e5223;" target="_blank">Sintaks Firefox yang baru</a>&nbsp;memungkinkan Anda mendefinisikan empat sudut bulat atau elips yang berbeda.</span>&nbsp;<span class="notranslate">Garis miring telah diperkenalkan untuk memisahkan pengaturan&nbsp;<i>panjang</i>&nbsp;horizontal dan vertikal.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Tidak ada solusi CSS murni untuk sudut membulat di IE8 atau browser primitif lainnya.</span>&nbsp;<span class="notranslate">Hanya berbagai tambalan JavaScript yang bisa ditemukan dengan mencari secara online.</span></div><h2 id="section_1" style="background: rgb(224, 216, 183); border-radius: 6px 12px; box-shadow: rgb(255, 255, 255) 0px 0px 5px inset; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 1.25em; letter-spacing: 1px; margin: 40px -10px 20px; padding: 4px 8px; position: relative;">2.&nbsp;<span class="notranslate">Menggunakan -moz-border-radius di Mozilla (Firefox)</span></h2><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Contoh berikut hanya akan bekerja jika Anda menggunakan Firefox atau browser Mozilla lainnya yang mendukung&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-moz-border-radius</tt>&nbsp;properties.</span></div><div class="box border1" style="background: rgb(255, 255, 51); border-radius: 1em; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 1</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-moz-border-radius: 1em;</code><br><div class="box border2" style="background: rgb(255, 255, 51); border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 2</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-moz-border-radius-topright: 2em; -moz-border-radius-topleft: 2em;</code><br><div class="box border3" style="background: rgb(255, 255, 51); border-radius: 2em 0px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 3</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-moz-border-radius: 2em 0;</code><br><div class="box border4" style="background: rgb(255, 255, 51); border-radius: 3em 1em; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 4</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-moz-border-radius: 3em 1em;</code><br><div style="background-color: white; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; padding-top: 0.5em;"><span class="notranslate">Properti Mozilla yang digunakan di sini&nbsp;<b>tidak</b>&nbsp;sesuai dengan standar (dengan demikian&nbsp;<i>-moz-</i>&nbsp;awalan) dan sampai Firefox 3.5 hanya mendukung sudut bulat.</span>&nbsp;<span class="notranslate">Di versi yang lebih baru dari sudut elips Firefox juga dimungkinkan.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Seperti beberapa orang telah menunjukkan sifat-sifat ini dapat digunakan tidak hanya untuk 'kotak' tapi juga untuk banyak objek HTML lainnya termasuk elemen bentuk.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Bagi anda yang masih melihat pojok persegi, berikut adalah cuplikan dari&nbsp;<a href="http://translate.googleusercontent.com/translate_c?depth=2&amp;nv=1&amp;rurl=translate.google.com&amp;sl=en&amp;sp=nmt4&amp;tl=id&amp;u=http://www.mozilla.com/firefox/&amp;usg=ALkJrhgcpswFVtoIrGc_dWfB3_QLtB3A9g" rel="noopener noreferer nofollow" style="color: green;" target="_blank">Firefox yang</a>&nbsp;menunjukkan efek sudut membulat:</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; text-align: center;"><img alt="" src="http://cdn.the-art-of-web.com/images/moz-border-radius.gif" height="284" style="border: 3px solid rgb(102, 102, 102); max-width: calc(100% - 2em); padding: 1em;" width="504"></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Ada sejumlah solusi JavaScript yang rumit yang memungkinkan border-radius dan properti CSS3 lainnya dapat dilihat di Internet Explorer dan browser lainnya - namun biaya overhead tidak benar-benar membenarkan hasilnya.</span></div><h2 id="section_2" style="background: rgb(224, 216, 183); border-radius: 6px 12px; box-shadow: rgb(255, 255, 255) 0px 0px 5px inset; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 1.25em; letter-spacing: 1px; margin: 40px -10px 20px; padding: 4px 8px; position: relative;">3.&nbsp;<span class="notranslate">Menggunakan -webkit-border-radius di Safari (Webkit)</span></h2><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Versi terbaru Safari sekarang mendukung&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-webkit-border-radius</tt>&nbsp;.</span>&nbsp;<span class="notranslate">Sebelumnya hanya 'nightly builds' yang berisi fungsi ini Di Opera, sintaks untuk sudut-sudutnya sama seperti di Safari, namun perilaku&nbsp;<span style="background-color: #aaffff; font-family: monospace; font-size: 13px; white-space: pre;">border-radius</span> dengan dua nilai sama dengan Firefox, seperti yang terlihat pada Contoh # 7 di bawah ini:</span></div><div class="box border5" style="background: rgb(255, 255, 51); border-radius: 1em; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 5</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-webkit-border-radius: 1em;</code><br><div class="box border6" style="background: rgb(255, 255, 51); border-top-left-radius: 24px; border-top-right-radius: 24px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 6</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-webkit-border-top-right-radius: 24px; -webkit-border-top-left-radius: 24px;</code><br><div class="box border7" style="background: rgb(255, 255, 51); border-radius: 24px 0px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 7</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-webkit-border-radius: 24px 0;</code><br><div class="box border8" style="background: rgb(255, 255, 51); border-radius: 36px 12px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 8</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-webkit-border-radius: 36px 12px;</code><br><div class="box border9" style="background: rgb(255, 255, 51); border-bottom-right-radius: 50px 30px; border-top-right-radius: 50px 30px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 9</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">-webkit-border-top-right-radius: 50px 30px; -webkit-border-bottom-right-radius: 50px 30px;</code><br><div style="background-color: white; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; padding-top: 0.5em;"><span class="notranslate">Bagi Anda yang masih melihat sudut persegi, di bawah ini Anda dapat menemukan cuplikan dari WebKit yang menunjukkan efek sudut membulat.</span>&nbsp;<span class="notranslate">Perhatikan terutama perubahan sintaks dan efek melewatkan dua nilai ke -webkit-border-radius dibandingkan&nbsp;dengan contoh&nbsp;<tt style="background-color: #aaffff; white-space: pre;"><span style="font-size: 13px;">-moz-border-radius</span>&nbsp;di</tt>&nbsp;atas.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; text-align: center;"><img alt="" src="http://cdn.the-art-of-web.com/images/border-radius.gif" height="354" style="border: 3px solid rgb(102, 102, 102); max-width: calc(100% - 2em); padding: 1em;" width="588"></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">WebKit juga memiliki dukungan terbatas untuk properti border CSS3 lainnya seperti: multiple background;</span>&nbsp;<span class="notranslate">gambar latar belakang;</span>&nbsp;<span class="notranslate">dan berbagai penyeleksi lanjutan (&nbsp;<tt style="background-color: #aaffff; white-space: pre;"><span style="font-size: 13px;">::select misalnya</span></tt>) menjadikannya platform uji coba yang bagus untuk pengembang berwawasan ke depan.</span>&nbsp;<span class="notranslate">Nantikan blog Surfin 'Safari yang terhubung di bawah ini untuk perkembangan terbaru yang menarik.</span></div><h2 id="section_3" style="background: rgb(224, 216, 183); border-radius: 6px 12px; box-shadow: rgb(255, 255, 255) 0px 0px 5px inset; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 1.25em; letter-spacing: 1px; margin: 40px -10px 20px; padding: 4px 8px; position: relative;">4.&nbsp;<span class="notranslate">Efek khusus lainnya</span></h2><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">WebKit, Firefox dan Opera sekarang mendukung sejumlah fitur CSS3 lainnya, termasuk efek dan transformasi sederhana berikut ini.</span>&nbsp;<span class="notranslate">Syukurlah, tidak seperti sudut membulat, untuk bayang-bayang dan transformasi, nampaknya ada kesepakatan mengenai sintaks yang sama.</span></div><h4 style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">-webkit-kotak-bayangan</span></h4><div class="box border8" style="background: rgb(255, 255, 51); border-radius: 36px 12px; border: 2px solid red; box-shadow: rgba(0, 0, 0, 0.6) 2px 2px 6px; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh bayangan</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;"><span style="background-color: yellow;">-webkit-</span> border-radius: 36px 12px; <span style="background-color: yellow;">-moz-</span> border-radius: 36px / 12px; border-radius: 36px / 12px; box-shadow: 2px 2px 6px rgba(0,0,0,0.6);</code><br><div style="background-color: white; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; padding-top: 0.5em;"><span class="notranslate">Jelas masih ada beberapa masalah anti-aliasing, tapi untuk sudut dan lekuk lembut itu bisa terlihat keren banget.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Lalu ada berbagai opsi&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-webkit-transform</tt>&nbsp;yang bisa digunakan untuk menciptakan segala macam bentuk aneh dan indah:</span></div><h4 style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">-webkit-transform: memutar ()</span></h4><div class="box border8" style="background: rgb(255, 255, 51); border-radius: 36px 12px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; transform: rotate(-5deg); width: 200px;"><span class="notranslate">Putar contoh</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;"><span style="background-color: yellow;">-webkit-</span> border-radius: 36px 12px; <span style="background-color: yellow;">-moz-</span> border-radius: 36px / 12px; border-radius: 36px / 12px; <span style="background-color: yellow;">-webkit-</span> transform: rotate(-5deg);</code><br><h4 style="background-color: white; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; padding-top: 0.5em;"><span class="notranslate">-webkit-transform: condong ()</span></h4><div class="box border8" style="background: rgb(255, 255, 51); border-radius: 36px 12px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; transform: skew(5deg, 5deg); width: 200px;"><span class="notranslate">Contoh miring</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;"><span style="background-color: yellow;">-webkit-</span> border-radius: 36px 12px; <span style="background-color: yellow;">-moz-</span> border-radius: 36px / 12px; border-radius: 36px / 12px; <span style="background-color: yellow;">-webkit-</span> transform: skew(5deg,5deg);</code><br><div style="background-color: white; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; padding-top: 0.5em;"><span class="notranslate">Untuk browser-impaired disini adalah screenshot dari Safari yang menunjukkan efek dari aturan CSS ini.</span>&nbsp;<span class="notranslate">Efek yang sama sekarang mungkin dilakukan di Firefox, Opera dan browser terkait.</span>&nbsp;<span class="notranslate">Ganti saja&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-webkit</tt>&nbsp;dengan&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-moz</tt>&nbsp;atau&nbsp;<tt style="background-color: #aaffff; white-space: pre;">-o</tt>&nbsp;, kecuali&nbsp;<tt style="background-color: #aaffff; white-space: pre;">border-radius</tt>&nbsp;dan&nbsp;<tt style="background-color: #aaffff; white-space: pre;">box-shadow</tt>&nbsp;dimana Opera tidak menggunakan awalan.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; text-align: center;"><img alt="" src="http://cdn.the-art-of-web.com/images/webkit-effects.gif" height="307" style="border: 3px solid rgb(102, 102, 102); max-width: calc(100% - 2em); padding: 1em;" width="595"></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Juga di Safari ini dan transformasi lainnya dapat diimplementasikan sebagai&nbsp;<a href="http://translate.googleusercontent.com/translate_c?depth=2&amp;nv=1&amp;rurl=translate.google.com&amp;sl=en&amp;sp=nmt4&amp;tl=id&amp;u=http://www.the-art-of-web.com/css/css-animation/&amp;usg=ALkJrhhM_gdfYq7qFaYRCQAl_SkudOfgYw" style="color: #5e5223;" rel="noopener noreferer nofollow">animasi</a>&nbsp;dengan hanya menggunakan efek CSS yang dipicu oleh melayang di atas elemen - tidak diperlukan JavaScript.</span></div><h2 id="firefox_35" style="background: rgb(224, 216, 183); border-radius: 6px 12px; box-shadow: rgb(255, 255, 255) 0px 0px 5px inset; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 1.25em; letter-spacing: 1px; margin: 40px -10px 20px; padding: 4px 8px; position: relative;">5.&nbsp;<span class="notranslate">Properti pendek baru</span></h2><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Sintaks berikut sekarang bekerja di Firefox dan Opera yang memungkinkan Anda untuk menentukan tidak hanya mencocokkan sudut elips, tapi juga sudut elips yang berbeda dalam satu properti singkat.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Di sini kita telah menciptakan dua contoh WebKit di atas dengan menggunakan sintaks baru.</span>&nbsp;<span class="notranslate">Anda dapat melihat bahwa pengaturan sudut individu bekerja sama persis sekarang di Firefox seperti di WebKit, namun untuk properti singkat yang Anda butuhkan untuk menyertakan garis miring:</span></div><div class="box border10" style="background: rgb(255, 255, 51); border-radius: 36px 12px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 8</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">border-radius: 36px / 12px;</code><br><div class="box border11" style="background: rgb(255, 255, 51); border-bottom-right-radius: 50px 30px; border-top-right-radius: 50px 30px; border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 9</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 360px;">border-radius-topright: 50px 30px; border-radius-bottomright: 50px 30px;</code><br><div style="background-color: white; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; padding-top: 0.5em;"><span class="notranslate">Dan sekarang ke bagian yang menakutkan.</span>&nbsp;<span class="notranslate">Dengan menggunakan properti tangan pendek, semua nilai sebelum garis miring berlaku untuk jari-jari horizontal dan semua nilai kemudian ke vertikal.</span>&nbsp;<span class="notranslate">Dalam contoh ini kita telah membuat hibrida dari dua contoh sebelumnya.</span></div><div class="box border12" style="background: rgb(255, 255, 51); border: 2px solid red; clear: left; color: #333333; float: left; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; height: 60px; line-height: 60px; margin: 0px 2em 0.5em 0px; padding: 0px; text-align: center; width: 200px;"><span class="notranslate">Contoh 10</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; float: left; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: 440px;">border-radius: 36px 50px 50px 36px / 12px 30px 30px 12px</code><br><div style="background-color: white; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; padding-top: 0.5em;"><span class="notranslate">Di sini Anda bisa melihat seperti apa kotak-kotak ini di Firefox 3.5:</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; text-align: center;"><img alt="" src="http://cdn.the-art-of-web.com/images/firefox-wonky.gif" height="206" style="border: 3px solid rgb(102, 102, 102); max-width: calc(100% - 2em); padding: 1em;" width="698"></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Dengan semua browser utama yang sekarang menggunakan sintaks yang sama, prefiks vendor telah dilepas dan standarnya sepertinya ada di batu.</span></div><h2 id="section_5" style="background: rgb(224, 216, 183); border-radius: 6px 12px; box-shadow: rgb(255, 255, 255) 0px 0px 5px inset; clear: both; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 1.25em; letter-spacing: 1px; margin: 40px -10px 20px; padding: 4px 8px; position: relative;">6.&nbsp;<span class="notranslate">Daftar dengan sudut membulat</span></h2><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Berikut adalah contoh bagus daftar unordered (UL) yang ditandai menggunakan CSS untuk menerapkan radius perbatasan hanya pada sudut luar elemen pertama dan terakhir:</span></div><ul class="rounded" style="background: rgb(171, 171, 171); border-radius: 1em; box-shadow: rgb(102, 102, 102) 2px 2px 4px; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px; margin: 0px auto; padding: 0px; width: 200px;"><li style="background: rgb(222, 222, 222); border-radius: 1em 1em 0px 0px; display: block; font-size: 1.1em; margin: 1.1em 0px; padding: 4px 12px; transition: 0.2s;"><span class="notranslate">bulat</span></li><li style="background: rgb(222, 222, 222); display: block; font-size: 1.1em; margin: 1.1em 0px; padding: 4px 12px; transition: 0.2s;"><span class="notranslate">sudut</span></li><li style="background: rgb(222, 222, 222); display: block; font-size: 1.1em; margin: 1.1em 0px; padding: 4px 12px; transition: 0.2s;"><span class="notranslate">pertama &amp; terakhir</span></li><li style="background: rgb(222, 222, 222); border-radius: 0px 0px 1em 1em; display: block; font-size: 1.1em; margin: 1.1em 0px; padding: 4px 12px; transition: 0.2s;"><span class="notranslate">elemen</span></li></ul><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Markup CSS adalah sebagai berikut:</span></div><code style="background: repeating-linear-gradient(-90deg, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.4em, rgba(66, 208, 255, 0.05) 1.6em) rgb(252, 250, 240); border: 2px solid rgb(252, 250, 240); color: #333333; display: block; font-size: 12px; line-height: 1.3; margin: 1.5em 0px; overflow: auto; padding: 1em; white-space: pre; width: auto;">&lt;style type="text/css"&gt; ul.rounded { margin: 0; padding: 0; width: 200px; background: #ababab; border-radius: 1em; box-shadow: 2px 2px 4px #666; } ul.rounded li { display: block; margin: 0 0 1px; padding: 4px 12px; background: #dedede; transition: 0.2s; } <span style="background-color: yellow;">ul.rounded li:first-child { border-radius: 1em 1em 0 0; } ul.rounded li:last-child { border-radius: 0 0 1em 1em; }</span> ul.rounded li:hover { padding-left: 20px; background: #efefef; } &lt;/style&gt;</code><br><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Markup HTML adalah untuk elemen daftar UL standar dengan&nbsp;<span style="background-color: #aaffff; font-family: monospace; font-size: 13px; white-space: pre;">class="rounded"</span>.</span></div><div style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"><span class="notranslate">Dengan memanfaatkan&nbsp;<tt style="background-color: #aaffff; white-space: pre;">first-child</tt><span style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;">&nbsp;and&nbsp;</span><tt style="background-color: #aaffff; white-space: pre;">last-child</tt>&nbsp;kita harus mengidentifikasi unsur-unsur mana yang harus menerapkan radius perbatasan di dalam HTML kita.</span></div><ul style="background-color: white; color: #333333; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 16px;"></ul>