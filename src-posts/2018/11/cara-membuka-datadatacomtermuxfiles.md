---
title: Cara membuka data/data/com.termux/files
webtitle: WMI Gitlab
subtitle: Untuk sampai ke folder file Termux, Anda harus CD ke seluruh      nama
  jalan seperti ini.
lang: en
date: 2018-11-12T10:41:00.003+07:00
type: post
tags: []
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
modified: 2018-11-12T10:45:16.204+07:00
category:
  - Android
  - Tips & Tricks
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
location: ""

---

<h4>How can I open data/data/com.termux/files</h4><blockquote>Frequently Asked : </blockquote>Saya tidak dapat mengakses folder com.termux / file. Saya ingin mengaksesnya karena saya ingin melakukan perubahan dalam file writer.js.<br>Saya mencoba cd .. dan cd - kode untuk kembali ke folder file dari folder home. <hr><blockquote>My Answers: </blockquote><p>    Untuk sampai ke folder file Termux, Anda harus CD ke seluruh &nbsp;&nbsp;&nbsp;&nbsp; nama jalan seperti ini. </p><pre><code>cd /data/data/com.termux/files<br></code></pre><p>    Dari sana dapat melakukan cd ke folder usr dan ke mana pun Anda ingin pergi. Sekali &nbsp;&nbsp;&nbsp;&nbsp; Anda menemukan writer.js Anda dapat mengeditnya menggunakan nano yang disertakan dengan Termux. &nbsp;&nbsp;&nbsp;&nbsp; Masukkan nano writer.js, lakukan pengeditan Anda dan gunakan CTRL O untuk menyimpannya dan &nbsp;&nbsp;&nbsp;&nbsp; CTRL X untuk keluar dari nano. </p><p>    Kemudian Anda dapat kembali ke direktori home Anda dengan: </p><pre><code>cd ~</code></pre>