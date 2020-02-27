---
layout: layouts/article
tags: notes
title: Минутка рефакторинга № 1
description:
date: 2017-03-17 21:34:00 +3
---
Я тут подумал, что неплохо было бы раз в неделю-две делать публичное ревью кода, дабы делиться знаниями и практиковаться в улучшении кода. Я закинул удочку в [Форвеб](https://vk.com/forwebdev?w=wall-66170841_50998) и первым прислать код на ревью не побоялся [Сергей Мелодин](https://vk.com/melodyn). Спасибо, Сергей! Перейдём к ревью.

Задача:

*Раз в t секунд последовательно выводить в консоль порции по n значений из массива, пока не будут выведены все элементы.*

Исходное решение:

```javascript
var myArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat"];
var i = myArr.length;
var x = 0;

var step = 10; // шаг смещения

function offset(x){
var y = x;
  while(x<y+step && x<i){
    console.log(myArr[x]);
    x++;
  };
};

function start(){
	offset(x);
  console.log('pause');
  x = x+step;
  if(x>i){ clearInterval(timer) };
};

var timer = setInterval(start, 1000);
```

Начнём с того, что тестовые данные можно сгенерировать динамически, благо значения элементов массива нам не важны:

```javascript
// было
var myArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat"];

// стало
var myArr = Array.from({ length: 36 }, (value, index) => index);
```

Причёсываем код для лучшей читаемости (исправляем отступы и добавляем недостающие пробелы). Выносим интервал в отдельную переменную для гибкости. Интервал и количество выводимых значений за одну итерацию обозначаем прописными буквами, как константы. Количество выводимых за одну итерацию значений при этом переименовываем из `step` в `ITEMS_PER_ITERATION`. Заменяем `var` на `const` или `let` в зависимости от того, переприсваивается ли переменная в дальнейшем. Убираем точки с запятой после объявления функций, циклов и условий, они там не нужны. Переименовываем `timer` в `intervalId`, что точнее отражает суть значения. Избавляемся от микрооптимизации в виде сохранения длины `myArr` в переменную `i` — во-первых, название переменной никак не отражает её суть, во-вторых, преждевременная оптимизация лишь портит читаемость и усложняет код:

```javascript
const ITEMS_PER_ITERATION = 10;
const INTERVAL = 1000;

const intervalId = setInterval(start, INTERVAL);
const myArr = Array.from({ length: 36 }, (value, index) => index);
let x = 0;

function offset(x) {
  const y = x;

  while(x < y + ITEMS_PER_ITERATION && x < myArr.length){
    console.log(myArr[x]);
    x++;
  }
}

function start() {
  offset(x);
  console.log('pause');

  x = x + ITEMS_PER_ITERATION;

  if (x > myArr.length) {
    clearInterval(intervalId);
  }
}
```

Сейчас есть две функции `start()` и `offset()`, с первого взгляда непонятно, что они делают. Самое ужасное — они обе изменяют переменную `x`. Но не всё так просто! На первый взгляд может показаться, что они изменяют одну и ту же переменную. Однако в функции `offset()` `x` — это аргумент, и он создаёт локальную переменную `x`. Такие переменные называются *связанными* — они непосредственно связаны с функцией, в которой они используются. Если бы у `offset()` не было аргументов, мы бы работали с внешней переменной `x`. Если переменная не связана, она называется *свободной*.

Итак, избавимся от излишней сложности со свободными и связанными переменными. Функция `offset()` по сути должна выводить в консоль `ITEMS_PER_ITERATION` элементов массива. Изменим её *сигнатуру* — аргумент `x` заменим на `array`, а саму функцию переименуем в `logArrayItems`. Ну и исправим функцию `start()`, чтобы она правильно работала с `logArrayItems`:

```javascript
const ITEMS_PER_ITERATION = 10;
const INTERVAL = 1000;

const intervalId = setInterval(start, INTERVAL);
const myArr = Array.from({ length: 36 }, (value, index) => index);
let x = 0;

function logArrayItems(array) {
  array.forEach((item) => console.log(item));
}

function start() {
  logArrayItems(myArr.slice(x, x + ITEMS_PER_ITERATION));
  console.log('pause');

  x = x + ITEMS_PER_ITERATION;

  if (x > myArr.length) {
    clearInterval(intervalId);
  }
}
```

Теперь выглядит попроще, но всё далеко от идеала. Наше решение не выглядит целостным. Чтобы это исправить, обернём его в функцию `logArrayItemsSequentially`, которая будет принимать массив, элементы которого надо вывести в консоль, и настройки — количество выводимых за итерацию элементов и интервал в миллисекундах. Хорошей практикой считается обязательные параметры передавать в функцию как есть, а все опциональные параметры передавать в виде объекта (при этом опциональным параметрам нужно задать значения по умолчанию). Это позволяет сократить код при обычном использовании функции, но не потерять гибкость и оставить возможность переопределения настроек:

```javascript
function logArrayItemsSequentially(array, options = {}) {
  const {
    itemsPerIteration = 10,
    interval = 1000,
  } = options;
  const intervalId = setInterval(start, interval);
  let x = 0;

  function logArrayItems(array) {
    array.forEach((item) => console.log(item));
  }

  function start() {
    logArrayItems(array.slice(x, x + itemsPerIteration));
    console.log('pause');

    x = x + itemsPerIteration;

    if (x > array.length) {
      clearInterval(intervalId);
    }
  }
}

const sampleArray = Array.from({ length: 36 }, (value, index) => index);

logArrayItemsSequentially(sampleArray/*, здесь могли быть переопределённые настройки */);
```

Отлично, теперь у нас есть целостное решение — функция, которую можно даже опубликовать на NPM (но лучше не надо). Снаружи её использование выглядит просто и понятно. Наведём порядок изнутри.

Для начала избавимся от функции `logArrayItems` — она используется лишь в одном месте:

```javascript
// было
function logArrayItems(array) {
  array.forEach((item) => console.log(item));
}

function start() {
  logArrayItems(array.slice(x, x + itemsPerIteration));
  // ...
}

// стало
function start() {
  array.slice(x, x + itemsPerIteration).forEach((item) => console.log(item));
  // ...
}
```

У нас всё ещё остаётся изменяемая переменная-счётчик, что не очень хорошо. Изменение значений переменных всегда усложняет чтение и понимание кода, а в некоторых случаях усложняет тестирование.

Давайте рассмотрим суть нашего алгоритма. Наш алгоритм работает *итеративно* — каждый раз он выводит в консоль порцию массива и переходит к остальным элементам, повторяя те же действия, пока все элементы массива не будут выведены на экран. Сейчас такое поведение реализовано с помощью `setInterval` и счётчика `x`, указывающего на индекс первого не выведенного в консоль элемента массива.

Такое же поведение мы можем реализовать намного проще. Нам не нужны вложенные функции, счётчики и `setInterval` — нам нужны рекурсия и `setTimeout`! Тело функции `logArrayItemsSequentially` будет обрабатывать только одну итерацию, а переход к следующей итерации будет делаться рекурсивным вызовом `logArrayItemsSequentially`. Разберём решение:

```javascript
function logArrayItemsSequentially(array, options = {}) {
  const {
    itemsPerIteration = 10,
    interval = 1000,
  } = options;
  // элементы, которые нужно вывести в консоль на текущей итерации
  const currentPortion = array.slice(0, itemsPerIteration);
  // оставшиеся элементы
  const tail = array.slice(itemsPerIteration);

  // сразу делаем вывод в консоль
  currentPortion.forEach((item) => console.log(item));
  console.log('pause');

  // если остаток не пустой, передаём его в следующую итерацию,
  // выполнение которой откладываем с помощью setTimeout
  if (tail.length) {
    setTimeout(() => logArrayItemsSequentially(tail, options), interval);
  }
}

const sampleArray = Array.from({ length: 36 }, (value, index) => index);

logArrayItemsSequentially(sampleArray/*, здесь могли быть переопределённые настройки */);
```

На мой взгляд, на этом можно остановиться. Мы получили универсальное и простое решение. Для наглядности приведу исходное и отрефакторенное решения:

```javascript
/**
 * Исходное решение
 */

var myArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat"];
var i = myArr.length;
var x = 0;

var step = 10; // шаг смещения

function offset(x){
var y = x;
 while(x<y+step && x<i){
   console.log(myArr[x]);
   x++;
 };
};

function start(){
	offset(x);
 console.log('pause');
 x = x+step;
 if(x>i){ clearInterval(timer) };
};

var timer = setInterval(start, 1000);

/**
 * Отрефакторенное решение
 */

function logArrayItemsSequentially(array, options = {}) {
 const {
   itemsPerIteration = 10,
   interval = 1000,
 } = options;
 const currentPortion = array.slice(0, itemsPerIteration);
 const tail = array.slice(itemsPerIteration);

 currentPortion.forEach((item) => console.log(item));
 console.log('pause');

 if (tail.length) {
   setTimeout(() => logArrayItemsSequentially(tail, options), interval);
 }
}

const sampleArray = Array.from({ length: 36 }, (value, index) => index);

logArrayItemsSequentially(sampleArray/*, здесь могли быть переопределённые настройки */);
```
