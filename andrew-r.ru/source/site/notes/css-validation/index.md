---
layout: article
tags: notes
title: Индикаторы правильности заполнения полей формы на CSS
description:
date: 2015-10-03 14:35:00 +6
---
Недавно наткнулся на интересную технику, позволяющую проверять правильность заполнения полей прямо в CSS.

С приходом HTML5 валидация данных на стороне клиента превратилась в довольно простую задачу, которую приятно решать. Всё благодаря атрибутам `required`, `pattern`, `maxlength` (`maxlength` доступен и в HTML4), а также благодаря новым типам полей ввода (например, `email`, `url`).

Новые возможности появились не только в HTML. С помощью CSS можно стилизовать разные состояния поля ввода: поле с неправильно введёнными данными и поле с правильно введёнными данными. Происходит это с помощью псевдоклассов `:valid` и `:invalid`.

Сразу рабочий пример:

<iframe style='max-width: 760px; width: 100%;' height='365' scrolling='no' src='//codepen.io/andrew-r/embed/rOyGjw/?height=365&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true'>See the Pen <a href='http://codepen.io/andrew-r/pen/rOyGjw/'>input validation</a> by Andrew Romanov (<a href='http://codepen.io/andrew-r'>@andrew-r</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

В этом примере также демонстрируется возможность скрытия кнопки регистрации, пока все поля не будут заполнены правильно.

[Поддержка браузерами](http://caniuse.com/#feat=form-validation) — IE10+.
