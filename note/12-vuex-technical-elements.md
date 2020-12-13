# 12. Vuex 기술 요소

> [vuejs kr: vuex 레퍼런스](https://vuex.vuejs.org/kr/) 참고

- [12. Vuex 기술 요소](#12-vuex-기술-요소)
  - [vuex 기술 요소](#vuex-기술-요소)
    - [state란](#state란)
    - [getters](#getters)
    - [mutations](#mutations)
      - [commit() 형식](#commit-형식)
      - [왜 mutations로 state 변경을 할까](#왜-mutations로-state-변경을-할까)
    - [actions](#actions)
      - [actions 비동기 코드 예제1](#actions-비동기-코드-예제1)
      - [actions 비동기 코드 예제](#actions-비동기-코드-예제)
      - [왜 actions에 비동기 로직을 선언해야하는가](#왜-actions에-비동기-로직을-선언해야하는가)
  - [읽을거리](#읽을거리)

## vuex 기술 요소

- state: `data`
- getters: state `computed` method
- mutations: state 변경 로직, 동기 `methods`
- actions: 비동기 처리 로직 `async methods`

### state란

- 여러 컴포넌트간 공유할 데이터 - **상태**

```js
// vue
data: {
  message: 'hello',
}

// vuex
state: {
  message: 'hello',
}
```

```html
<!-- Vue -->
<p>{{ message }}</p>

<!-- Vuex -->
<p>{{ this.$store.state.message }}</p>
```

### getters

- state 값을 접근하는 속성, `computed()` 처럼 미리 연산된 값을 접근하는 속성

```js
// store.js
state: {
  num: 10
},
getters: {
  getNumber(state) {
    return state.num;
  },
  doubleNumber(state) {
    return state.num * 2;
  }
}
```

```html
<p>{{ this.$store.getters.getNumber }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
```

### mutations

- state 값을 변경할 수 있는 유일한 방법
- 뮤테이션은 commit() 으로 동작시킴
- 첫 인자는 무조건 state

```js
// store.js
state: { num: 10 },
mutations: {
  printNumbers(state) {
    console.log(state.num);
  },
  sumNumbers(state, anotherNum) {
    return state.num + anotherNum;
  },
}

// App.vue
this.$store.commit('printNumbers');
this.$store.commit('sumNumbers', 2);
```

#### commit() 형식

- state를 변경하기 위해 mutations 를 동작시킬 때 인자(payload)를 전달할 수 있음

```js
// store.js
state: { num: 10 },
mutations: {
  sumNumbers(state, payload) {
    return state.num += payload.num;
  },
}

// App.vue
this.$store.commit('sumNumbers', { num: 20 });
```

#### 왜 mutations로 state 변경을 할까

- state는 여러 컴포넌트에서 수정 가능
- 직접 state를 변경한다면 추적이 어려움
- mutation을 통해 추적에 용이하기 위함
- 뷰의 반응성을 거리즈 않게 명시적으로 상태변화를 수행
- **반응성, 디버깅, 테스팅** 의 혜택

### actions

- 비동기 로직을 선언하는 메서드
- 데이터 요청, Promise, ES6 async 와 같은 비동기 처리는 모두 actions에 선언

```js
// store.js
state: { num: 10 },
mutations: {
  doubleNumber(state) {
    state.num *= 2;
  },
  actions: {
    delayDouebleNumber(context) {
      context.commit('doubleNumber');
    }
  }
}
// App.vue
this.$store.dispatch('delayDoubleNumber');
```

#### actions 비동기 코드 예제1

```js
// store.js
mutations: {
  addCounter(state) {
    state.counter++;
  },
},
actions: {
  delayAddCounter(context) {
    setTimeout(() => context.commit('addCounter'), 2000);
  },
},

// App.vue
methods: {
  incrementCounter() {
    this.$store.dispatch('delayAddCounter');
  }
}
```

#### actions 비동기 코드 예제

```js
// store.js
mutations: {
  setData(state, fetchedData) {
    state.product = fetchedData;
  },
},
actions: {
  fetchProductData(context) {
    return axios.get('https://domain.com/products/1')
                .then(response => context.commit('setData', response));
  },
},

// App.vue
methods: {
  getProduct() {
    this.$store.dispatch('fetchProductData');
  }
}
```

#### 왜 actions에 비동기 로직을 선언해야하는가

- mutation과 비슷한 맥락
- 언제 어느 컴포넌트가 해당 state를 호출하고, 변경했는지 확인하기 어려움

## 읽을거리

- [blog: 자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [blog: 자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
