---
title: Linux Clear Cache
webtitle: WMI Gitlab
subtitle: <pre>#!/bin/bash<br />#clean page cache<br />#sync<br />#echo 1
  &gt;/proc/sys/vm/drop_caches<br />#clean dentries and inodes<br />#sync<br
lang: en
date: 2020-05-30T00:03:00.002+07:00
type: post
tags: []
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
modified: 2020-05-30T00:03:46.972+07:00
category:
  - Script
  - Tips & Tricks
  - Linux/Unix
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
location: ""

---

<pre>#!/bin/bash<br>#clean page cache<br>#sync<br>#echo 1 &gt;/proc/sys/vm/drop_caches<br>#clean dentries and inodes<br>#sync<br>#echo 2 &gt;/proc/sys/vm/drop_caches<br>#clean page cache and dentries inodes, but it is not recommended in production instead use "echo 1"<br>#sync<br>#echo 3 &gt;/proc/sys/vm/drop_caches<br><br>##################<br># begin refresh script<br>##################<br><br>sync<br>if [ $(dpkg-query -W -f='${Status}' polipo 2&gt;/dev/null | grep -c "ok installed") -eq 0 ]; then<br>  apt-get install polipo -y<br>fi<br>polipo -x<br>echo 3 &gt;/proc/sys/vm/drop_caches<br>swapoff -a &amp;&amp; swapon -a<br>printf '\n%s\n\n' 'Ram-cache and Swap Cleared'<br>/opt/lampp/xampp restart<br>free -h<br></pre><br>this script used for better performance your vps (LINUX). <br><br><ul><li>fix apache slow response</li><li>fix xampp web server slow</li><li>fix overload ram vps</li><li>fix mysqld overheat</li><li>fix java machine overheat ram</li></ul>