# 12. Vuex 기술 요소

> [vuejs kr: vuex 레퍼런스](https://vuex.vuejs.org/kr/) 참고

## state와 getters 소개

### vuex 기술 요소

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
    return state.num;
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

