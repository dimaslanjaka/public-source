---
title: Import composite build plugin as subtitue module dependency [Gradle]
webtitle: WMI Gitlab
subtitle: <pre><br />// change folder path inside bracket<br
  />includeBuild("plugin") {<br />    dependencySubstitution {<br />    	//
  change your
lang: en
date: 2021-04-20T16:40:00.001+07:00
type: post
tags: []
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
modified: 2021-04-20T16:40:48.445+07:00
category:
  - Script
  - Gradle
  - Tips & Tricks
comments: true
cover: https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png
location: ""

---

<pre><br>// change folder path inside bracket<br>includeBuild("plugin") {<br>    dependencySubstitution {<br>    	// change your artifact group and id<br>        // iam using <a href="https://github.com/dimaslanjaka/gradle-plugin/" target="_blank" rel="noopener noreferer nofollow">https://github.com/dimaslanjaka/gradle-plugin/</a> for example<br>        substitute(module("com.dimaslanjaka:gradle-plugin")).with(project(":"))<br>    }<br>}<br></pre> <img src="https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png">