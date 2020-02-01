Было бы удобно иметь псевдоклассы вроде `:stuck` для элементов с `position: sticky` или `:overflowing` для элементов, переполненных содержимым. К сожалению, таких псевдоклассов не будет, потому что они могут привести к цикличности — для них можно было бы задать правила, которые отменят действие этих псевдоклассов:

```css
aside { position: sticky; top: 0; }
aside:stuck { position: static; }
```

Подробнее в вики CSSWG: [Selectors that Depend on Layout](https://wiki.csswg.org/faq#selectors-that-depend-on-layout).
