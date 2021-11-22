---
title: GitHub Workflow Conditions
webtitle: WMI GitHub
subtitle: "Macam-macam kondisional pada GitHub Workflows"
lang: id
date: 2021-11-23T2:00:00
type: post
tags:
  - GitHub
keywords:
  - GitHub
  - workflows
  - yml
author:
  nick: "Dimas Lanjaka"
  link: "https://github.com/dimaslanjaka"

category:
  - Programming

cover: "/GitHub/workflows/cover.png"
location: Indonesia
comments: true
---

# Kondisional pada GitHub Workflow
Kondisional-kondisional yang ada di Github Workflow. Kondisional ini berguna untuk memicu job step dengan kasus-kasus tertentu. [source](https://docs.github.com/en/actions/learn-github-actions/expressions) Misalnya:
## Menjalankan command apabila repository di push dengan commit yang memiliki substring tertentu (match substring from github commit messages)
```yaml
jobs:
  build:
    name: Nama Workflow
    runs-on: ubuntu-latest
    steps:
      - run: echo "git commit contains hello" # run this command if commit contains hello
        if: contains(github.event.head_commit.message, 'hello')
      - run: echo "git commit any"
```
selain `contains` untuk mencari sebuah substring pada string. Adapun fungsi'' lain seperti:
- `startsWith` untuk memeriksa apakah string memiliki **awalan** tertentu (penggunaannya sama seperti contoh kode diatas)
- `endsWith` untuk memeriksa apakah string memiliki **akhiran** tertentu (penggunaannya sama seperti contoh kode diatas)
## Melanjutkan steps meskipun command gagal (continue on error)
```yaml
jobs:
  build:
    name: Nama Workflow
    runs-on: ubuntu-latest
    steps:
      - run: this_command_is_not_found xxxxx # ini akan membuat workflow berhenti
        continue-on-error: true # namun dengan ini tidak akan membuat workflow berhenti
        id: custom-id # membuat id khusus (opsional)
      - run: echo "git commit any"
```

Artikel ini untuk mempermudah visitor untuk memahami github workflow.