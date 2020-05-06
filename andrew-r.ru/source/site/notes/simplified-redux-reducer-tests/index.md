---
layout: article
tags: notes
title: Как упростить тестирование Редакс-редьюсеров
description:
date: 2018-02-20 00:24:00 +3
---
Если вы работаете с Редаксом, вы знаете, что редьюсеры меняют состояние приложения в соответствии с произведёнными действиями. Если после какого-то действия состояние изменится неправильным образом, приложение может сломаться. Чтобы этого не допустить, нужно проверять, правильное ли состояние редьюсер генерирует в ответ на обрабатываемые им действия.

В документации Редакса есть [пример тестирования редьюсеров](https://redux.js.org/docs/recipes/WritingTests.html#reducers). Суть очень проста: берём редьюсер, вызываем его с каким-либо исходным состоянием и нужным экшеном и сравниваем полученный результат с ожидаемым. Если ожидаемое и полученное состояния совпали, всё супер, если нет — вы поймали баг.

Официальный пример тестирования очень многословен, такое тестирование отнимает силы, время и любовь к жизни. Расскажу, как его упростить благодаря магии [снепшотов jest](https://facebook.github.io/jest/docs/en/snapshot-testing.html).

Упрощать будем на примере простого редьюсера:

```javascript
export const initialState = {
  counter: 0,
  disabled: false,
};

export default function counterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'INCREMENT': {
      if (state.disabled) {
        return state;
      }

      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case 'DISABLE': {
      return {
        ...state,
        disabled: true,
      };
    }

    case 'ENABLE': {
      return {
        ...state,
        disabled: false,
      };
    }

    default: {
      return state;
    }
  }
}
```

Если следовать официальной документации, тесты будут выглядеть так:

```javascript
import reducer, { initialState } from './';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState)).toEqual(initialState);
  });

  it('should increment if not disabled', () => {
    const modifiedState = {
      ...initialState,
      counter: 0,
      disabled: false,
    };
    const action = {
      type: 'INCREMENT'
    };
    const expectedState = {
      ...modifiedState,
      counter: 1,
    };

    expect(reducer(modifiedState, action)).toEqual(expectedState);
  });

  it('should not increment if disabled', () => {
    const modifiedState = {
      ...initialState,
      disabled: true,
    };
    const action = {
      type: 'INCREMENT'
    };

    expect(reducer(modifiedState, action)).toEqual(modifiedState);
  });

  it('should disable if enabled', () => {
    const modifiedState = {
      ...initialState,
      disabled: false,
    };
    const action = {
      type: 'DISABLE'
    };
    const expectedState = {
      ...modifiedState,
      disabled: true,
    };

    expect(reducer(modifiedState, action)).toEqual(expectedState);
  });

  it('should enable if disabled', () => {
    const modifiedState = {
      ...initialState,
      disabled: true,
    };
    const action = {
      type: 'ENABLE'
    };
    const expectedState = {
      ...modifiedState,
      disabled: false,
    };

    expect(reducer(modifiedState, action)).toEqual(expectedState);
  });
});
```

Получилось многословно и императивно. В каждом тесткейсе для нас имеют значение только его название, исходное состояние, действие и ожидаемое состояние. Всё остальное — шум. Чтобы избавиться от него, напишем небольшую функцию-обёртку, скрывающую в себе весь бойлерплейт:

```javascript
function createStateTransitionTester({ reducer, initialState }) { // сразу запоминаем редьюсер и его исходное состояние, чтобы не повторять их в каждом тесткейсе
  return (testCaseName, params) => {
    const {
      modifiedState = initialState, // по умолчанию считаем, что переход совершается из начального состояния
      action,
    } = params;
    /**
     * Ожидаемое состояние может зависеть от исходного состояния,
     * поэтому даём возможность генерации ожидаемого состояния на основе исходного
    */
    const expectedState = typeof params.expectedState === 'function' ? params.expectedState(modifiedState) : params.expectedState;

    test(testCaseName, () => {
      expect(reducer(modifiedState, action)).toEqual(expectedState);
    });
  };
}
```

С ней тесты становятся более декларативными и лаконичными:

```javascript
import { createStateTransitionTester } from '~/utils';
import reducer, { initialState } from './';

describe('counter reducer', () => {
  const testStateTransition = createStateTransitionTester({ reducer, initialState });

  testStateTransition('should return the initial state', {
    expectedState: initialState,
  });

  testStateTransition('should increment if not disabled', {
    action: {
      type: 'INCREMENT',
    },
    modifiedState: {
      ...initialState,
      counter: 0,
      disabled: false,
    },
    expectedState: (modifiedState) => ({
      ...modifiedState,
      counter: 1,
    }),
  });

  testStateTransition('should not increment if disabled', {
    action: {
      type: 'INCREMENT',
    },
    modifiedState: {
      ...initialState,
      disabled: true,
    },
    expectedState: (modifiedState) => modifiedState,
  });

  testStateTransition('should disable if enabled', {
    action: {
      type: 'DISABLE',
    },
    modifiedState: {
      ...initialState,
      disabled: false,
    },
    expectedState: (modifiedState) => ({
      ...modifiedState,
      disabled: true,
    }),
  });

  testStateTransition('should enable if disabled', {
    action: {
      type: 'ENABLE',
    },
    modifiedState: {
      ...initialState,
      disabled: true,
    },
    expectedState: (modifiedState) => ({
      ...modifiedState,
      disabled: false,
    }),
  });
});
```

Стало лучше, но описывать каждый раз ожидаемое состояние довольно утомительно, особенно если в нём много полей. Я долгое время смиренно жил с этим решением, пока мой коллега [Денис](https://twitter.com/pofigizm) не предложил использовать jest-снепшоты для автоматической генерации снимка ожидаемого состояния. При таком подходе вручную нужно описывать только экшен и исходное состояние. При первом запуске ожидаемое состояние для всех тесткейсов запишется в снепшоты, и результаты дальнейших запусков тестов будут сравниваться с сохранёнными снепшотами. Здесь сделано допущение, что при первом запуске редьюсер работает правильно и без багов, иначе первые снимки ожидаемого состояния получатся некорректными.

Для использования такого подхода нужно самую малость доработать функцию `createStateTransitionTester`:

```javascript
function createStateTransitionTester({ reducer, initialState }) {
  return (testCaseName, { modifiedState = initialState, action }) => { // expectedState больше не нужен
    test(testCaseName, () => {
      expect(reducer(modifiedState, action)).toMatchSnapshot(); // .toEqual(expectedState) → .toMatchSnapshot()
    })
  };
}
```

Благодаря этому тесты стали ещё лаконичнее, а писать их теперь не так больно:

```javascript
import { createStateTransitionTester } from '~/utils';
import reducer, { initialState } from './';

describe('counter reducer', () => {
  const testStateTransition = createStateTransitionTester({ reducer, initialState });

  testStateTransition('should return the initial state');

  testStateTransition('should increment if not disabled', {
    action: {
      type: 'INCREMENT',
    },
    modifiedState: {
      ...initialState,
      counter: 0,
      disabled: false,
    },
  });

  testStateTransition('should not increment if disabled', {
    action: {
      type: 'INCREMENT',
    },
    modifiedState: {
      ...initialState,
      disabled: true,
    },
  });

  testStateTransition('should disable if enabled', {
    action: {
      type: 'DISABLE',
    },
    modifiedState: {
      ...initialState,
      disabled: false,
    },
  });

  testStateTransition('should enable if disabled', {
    action: {
      type: 'ENABLE',
    },
    modifiedState: {
      ...initialState,
      disabled: true,
    },
  });
});
```
