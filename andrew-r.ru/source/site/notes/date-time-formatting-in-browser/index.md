---
layout: layouts/article
tags: notes
title: Форматирование дат и времени в браузере
description:
cover:
  url: assets/cover.png
  alt:
date: 2019-03-11 21:48:00 +6
---
Не используйте сторонние библиотеки для ручного форматирования дат и времени — в разных локалях разные правила их отображения: русские привыкли видеть 11.03.2019, а англичане 3/11/2019. Используйте встроенный в браузер [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat), который сам определяет локаль пользователя и форматирует дату нужным образом.

Кстати, недавно пал последний рубеж обороны сторонних библиотек — в Intl API появился [RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat), позволяющий формировать из дат фразы вида «5 минут назад».
