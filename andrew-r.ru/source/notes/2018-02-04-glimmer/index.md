---
layout: article
tags: notes
title: Glimmer
description: Краткое введение в Glimmer, бывший UI-движок Ember, выросший в отдельный проект.
date: 2018-02-04 16:07:00 +3
---
Постоянно выходят какие-то реакт-подобные библиотеки, которые супербыстрые, работают в IE8 и весят совсем мало. Ничего кардинально нового они не несут, так что вместо них расскажу о действительно интересной библиотеке.

Glimmer — бывший UI-движок Ember, выросший в отдельный проект. Он отличается от реакта и подобных библиотек тем, что его шаблоны компилируются не в JavaScript, а в JSON. Этот JSON на стороне клиента компилируется в байткод, исполняемый в виртуальной машине Glimmer (в терминах Glimmer это называется last mile compilation). Выглядит этот JSON примерно так:

```json
[
['startProgram', [0, []]],
['text', [0, 3]],
['mustache', [1, 3]],
['openElement', [2, 3, 0, []]],
['closeElement', [2, 3]],
['endProgram', [0]]
]
```

Чем компиляция шаблонов в JSON лучше компиляции в JavaScript? Временем их парсинга, которое критично на мобильных устройствах. Грамматика JSON сильно проще JS, поэтому и парсится JSON гораздо быстрее.

Несмотря на скорость парсинга JSON, с ростом количества шаблонов растут и затраты на их парсинг. Ребята из LinkedIn знатно упоролись и решили свести эти затраты к нулю: вместо компиляции в JSON они сразу компилируют шаблоны в байткод и доставляют их в браузер в бинарном формате, так что на стороне клиента last mile compilation не требуется и виртуальная машина Glimmer может сразу исполнять полученный байткод.

Байткод в бинарном формате сокращает не только время парсинга, но и размер шаблонов. А в ближайшем будущем можно будет добиться ещё большей скорости, портировав части виртуальной машины Glimmer на WebAssembly.