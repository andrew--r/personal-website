---
layout: layouts/article
tags: notes
title: Скачивание изображений в IE10+
description:
date: 2016-03-23 09:30:00 +6
---
Возникла необходимость реализовать скачивание изображений при клике по ссылке.

К счастью, в спецификации HTML5 появился новый атрибут `download`, указывающий браузеру на то, что ресурс по ссылке следует скачать. К несчастью, этот атрибут не поддерживается в Сафари и IE.

Для IE удалось найти относительно простое альтернативное решение, основанное на [блобах](https://developer.mozilla.org/ru/docs/Web/API/Blob):

```javascript
document.querySelector('a[download]').addEventListener('click', (event) => {
  // следующий код сработает только в IE10+
  if (navigator && navigator.msSaveOrOpenBlob) {
    event.preventDefault();
    const href = event.target.href;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', href, true);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      const filename = href.replace(/^.*\//g, '');
      return navigator.msSaveOrOpenBlob(xhr.response, filename);
    };

    xhr.send();
  }
});
```
