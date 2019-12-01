---
layout: layouts/article
tags: writing
title: DNS-level advertisement blocking
description: Blocking advertisement and trackers at the network level instead of browser is an insanely elegant idea.
coverUrl: assets/cover.png
publicationDate: 2019-12-01
---

Blocking advertisement and trackers at the network level instead of browser is an insanely elegant idea. Such way trackers can’t know which sites you visit, and advertising scripts are not downloaded, which decreases overall network load and increases sites loading speed.

I know two products that implement this approach: [Pi-hole](https://pi-hole.net) and [NextDNS](https://nextdns.io). Pi-hole is an open-source solution which requires non-trivial manual setup, but it gives you total privacy and control. NextDNS is basically Pi-hole as a Service, it’s setup is much easier, but you can’t know if it doesn’t sell logs of your DNS queries.

Both solutions provide beautiful dashboards with statistics, from which you can discover interesting insights. For example, you can finally learn what services does your phone talk to in background.
