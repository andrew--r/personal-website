---
layout: layouts/article
tags: notes
title: Почему в проектах 2017 года не нужна jQuery?
date: 2017-06-05 12:22:00 +3
---
Потому что:

* для работы с DOM есть, как ни странно, [спецификация DOM4](https://dom.spec.whatwg.org) с `.closest()`, `.append()`, `.prepend()` и другими удобными методами ([полифил](http://webreflection.github.io/dom4));
* для анимаций есть CSS и [Web Animations API](https://w3c.github.io/web-animations) ([полифил](https://github.com/web-animations/web-animations-js));
* для общения с сервером есть [fetch](https://fetch.spec.whatwg.org) ([полифил](https://github.com/github/fetch));
* готовых библиотек на чистом JS предостаточно ([plainjs.com](https://plainjs.com), [microjs.com](http://microjs.com)), и чаще всего они легковеснее и качественнее jQuery-плагинов.
