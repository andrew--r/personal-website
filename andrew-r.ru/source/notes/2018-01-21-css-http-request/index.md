---
layout: article
tags: notes
title: Отправка запросов к серверу через CSS
description: На собеседованиях иногда просят назвать способы отправки запроса на сервер. Помимо очевидных `fetch`, `XMLHttpRequest` и прочих джаваскриптовых штук, есть более экзотические способы.
date: 2018-01-21 13:25:00 +3
---
На собеседованиях иногда просят назвать способы отправки запроса на сервер. Помимо очевидных `fetch`, `XMLHttpRequest` и прочих джаваскриптовых штук, есть более экзотические способы вроде `<img src="...">`.

Вчера узнал о ещё более экзотическом и извращённом способе отправки запроса на сервер с помощью CSS:

```css
body::after {
  content: url('...');
}
```

Этот способ может использоваться для аналитики и трекинга пользователей, у которых отключен JS. Можно отследить клики по ссылкам, ввод текста в инпуты, клики по чекбоксам, длительность ховера на каком-либо элементе; также можно приблизительно определить браузер и операционную систему пользователя ([подробнее](https://github.com/jbtronics/CrookedStyleSheets)).

Защититься от этого можно только отключив CSS. Параноикам пора переходить на текстовые браузеры :–)