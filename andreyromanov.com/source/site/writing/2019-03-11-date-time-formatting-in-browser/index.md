---
layout: layouts/article
tags: writing
title: Date and time formatting in browser
description: Use Intl.DateTimeFormat instead of third-party libraries for date formatting.
cover:
  url: assets/cover.png
publicationDate: 2019-03-11
---

Don’t use third-party libraries to manually format dates and time in browser. Correct format depends on user’s locale: russians use to see 11.03.2019, whereas englishmen use to see 3/11/2019.

[DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) from native Intl API automatically formats date and time according to user’s locale. And, by the way, recently Intl API was extended with [RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat), which allows formatting time like “X minutes ago”.
