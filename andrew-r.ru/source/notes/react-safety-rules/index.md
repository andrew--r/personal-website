---
layout: article
tags: notes
title: Правила безопасности при разработке на Реакте
description:
date: 2018-02-09 22:47:00 +3
---
Реакт очень популярен. Из-за этого многие новички используют его неправильно, не понимая, какую задачу он решает.

Основные задачи, которые нужно решить при разработке веб-приложения:

- управление состоянием приложения;
- общение с сервером;
- роутинг (изменение урла при переходах между страницами);
- разработка интерфейса. _← за это отвечает Реакт_

Как видите, Реакт отвечает только за построение интерфейса. Реакт не отвечает за программирование бизнес-логики. Реакт не отвечает за роутинг. Реакт не отвечает за общение с сервером. Из всего этого вытекает несколько простых правил.

<div class="sidenote">
  <p class="sidenote__paragraph"><b>Не пишите бизнес-логику в Реакт-компонентах.</b> Логика приложения должна быть скрыта в отдельном модуле, который предоставляет наружу простой и декларативный API, которым можно пользоваться даже через консоль, без UI. Это позволит вам разрабатывать логику и UI независимо друг от друга, а также сильно упростить тестирование логики.</p>

  <aside class="sidenote__note">
    Как разделять логику и представление приложения? <a href="https://youtu.be/3J9EJrvqOiM">Доклад</a> и <a href="https://hackernoon.com/cc90b787aa37">статья</a> создателя MobX Мишеля Вестрате
  </aside>
</div>

<div class="sidenote">
  <p class="sidenote__paragraph"><b>Не используйте Реакт для роутинга.</b> React Router это очень популярная библиотека с нескольким десятком тысяч звёзд на Гитхабе, но серьёзно, она провоцирует разработчиков творить ужасные вещи. Она заставит вас нарушить предыдущий пункт и писать бизнес-логику в компонентах. Она заставит вас относиться к URL как к ещё одному источнику состояния приложения. Она заставит вас смешать вёрстку и настройки роутера (а в четвёртой версии появляется возможность раскидать настройки роутера вообще по всему приложению). Роутинг относится к логике приложения. URL должен зависеть от состояния приложения, а не наоборот. Это значит, что URL должен меняться автоматически при изменении состояния приложения. Обращаться к URL для чтения каких-то данных нельзя вообще никогда, кроме момента инициализации приложения (в момент инициализации можно использовать данные из URL для задания исходного состояния приложения).</p>

  <aside class="sidenote__note">
    Примеры нормальных роутеров, автоматически синхронизирующих в обе стороны состояние и URL приложения: <a href="https://github.com/faceyspacey/redux-first-router">redux-first-router</a> и <a href="https://github.com/kitze/mobx-router">mobx-router</a>
  </aside>
</div>

**Не используйте Реакт для общения с сервером.** Серьёзно, я видел компоненты вроде `<Fetch url='...' />` &mdash; пожалуйста, не делайте так. За общение с сервером должен отвечать отдельный модуль, скрывающий детали реализации и предоставляющий абстрактный API вроде `articles.get({ id: 1 }).then((article) => {})`.