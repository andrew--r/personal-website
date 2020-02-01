ГитХаб ещё [с 2014 года использует веб-компоненты в продакшене](https://www.webcomponents.org/community/articles/interview-with-joshua-peek). Часть компонентов инженеры ГитХаба выложили в опенсорс:

* [custom-element boilerplate](https://github.com/github/custom-element-boilerplate), стартовый шаблон для веб-компонента;
* [time-elements](https://github.com/github/time-elements) расширяет возможности стандартного `<time>`;
* [clipboard-copy](https://github.com/github/clipboard-copy-element) при клике копирует заданный текст в буфер обмена;
* [auto-check](https://github.com/github/auto-check-element) автоматически валидирует значение поля через указанную ручку серверного API;
* [markdown-toolbar](https://github.com/github/markdown-toolbar-element) реализует кнопки для форматирования текста в markdown в `<textarea>`;
* [image-crop](https://github.com/github/image-crop-element) реализует интерфейс обрезания фоточек;
* [include-fragment](https://github.com/github/include-fragment-element) подгружает фрагмент HTML и заменяет себя им;
* [task-lists](https://github.com/github/task-lists-element) реализует список задач с поддержкой drag’n’drop;
* [auto-complete](https://github.com/github/auto-complete-element) реализует поле ввода с автодополнением и подгрузкой вариантов с сервера;
* [details-menu](https://github.com/github/details-menu-element) реализует выпадающее меню на основе элемента `<dialog>`;
* [details-dialog](https://github.com/github/details-dialog-element) реализует модальное окно на основе элемента `<dialog>`.

Кажется, это и есть будущее разработки интерфейсов. jQuery-плагины морально устарели, React/Vue/Angular-компоненты сильно всё усложняют и плохо влияют на производительность, а кастомные элементы максимально просты (подключаешь скрипт и используешь их в любом месте разметки) и работают на основе нативных возможностей браузера.
