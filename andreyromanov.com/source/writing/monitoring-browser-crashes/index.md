---
layout: article
tags: writing
title: How to detect browser crashes
description: Using Reporting API to monitor browser crashes, policy violations and other problems
date: 2024-10-27
---
One of my colleagues recently asked if anyone knew a way to monitor browser crashes. I didn’t know and was curious to find out.

Detecting browser crashes is a tricky problem, because all the code running on your site stops abruptly when it crashes, so you can’t detect the crash itself. Even if you could, another problem is sending a report to your error tracking endpoint.

Long story short, there is an experimental [Reporting API](https://w3c.github.io/reporting) which enables tracking browser crashes, various policy violations (such as Content Security Policy, Document Policy, Permissions Policy), deprecated feature usage, and user-agent interventions.

The Reporting API provides two main ways of tracking reports:
1. Using `ReportingObserver`, which captures client-side warnings and allows you to respond to them in real-time; since it’s a client-side API, it doesn’t track browser crashes and other issues such as CSP violations.
2. Using the `Reporting-Endpoints` HTTP header, which specifies the endpoints to which the browser will automatically send collected reports; it supports all report types, including browser crashes.

There is [a good introduction to the Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api) on the Chrome for Developers portal.

Note that the API is not yet stable, the spec is an editor’s draft, and it’s not fully implemented in all baseline browsers. Despite these limitations, it remains an invaluable tool, with companies like Figma [already integrating it into their workflows](https://neugierig.org/software/blog/2023/01/browser-crashes.html).
