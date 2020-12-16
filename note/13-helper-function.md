# 13. Vuex - 헬퍼 함수

- [13. Vuex - 헬퍼 함수](#13-vuex---헬퍼-함수)
  - [헬퍼 함수 및 ES6 Spread 연산자 소개](#헬퍼-함수-및-es6-spread-연산자-소개)
    - [헬퍼 함수란](#헬퍼-함수란)
    - [헬퍼 사용방법](#헬퍼-사용방법)
      - [Object Spread Opertor example](#object-spread-opertor-example)
  - [mapState, mapGetters 소개 및 ES6 Spread 연산자 쓰는 이유](#mapstate-mapgetters-소개-및-es6-spread-연산자-쓰는-이유)
    - [mapState](#mapstate)
    - [mapGetters](#mapgetters)
    - [Spread 연산자를 쓰는 이유](#spread-연산자를-쓰는-이유)
  - [mapMutations, mapActions 소개 및 헬퍼의 유연한 문법](#mapmutations-mapactions-소개-및-헬퍼의-유연한-문법)
    - [mapMutations](#mapmutations)
    - [mapActions](#mapactions)
    - [헬퍼의 유연한 문법](#헬퍼의-유연한-문법)
  - [뷰엑스로 리팩토링한 앱 구조 분석 및 정리](#뷰엑스로-리팩토링한-앱-구조-분석-및-정리)

## 헬퍼 함수 및 ES6 Spread 연산자 소개

### 헬퍼 함수란

Store 에 있는 4가지 속성들을 편하게 코딩하는 방법

### 헬퍼 사용방법

```js
// App.vue
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed() {
    ...mapState(['num']),  // this.num === this.$store.state.num
    ...mapGetters(['countedNum']),  // this.countedNum === this.$store.getters.countedNum
  },
  methods: {
    ...mapMutations(['clickBtn']),
    ...mapActions(['asyncClickBtn']),
  },
}
```

`...` 연산자? ES6의 **Object Spread Operator**

#### Object Spread Opertor example

```js
let obj1 = {
    first: 1,
    second: 'second'
}

let obj2 = {
    first: 2,
    third: true,
}

{...obj1, ...obj2}
// {first: 2, second: "second", third: true}

{...obj2, ...obj1}
// {first: 1, third: true, second: "second"}
```

## mapState, mapGetters 소개 및 ES6 Spread 연산자 쓰는 이유

### mapState

- vuex 에 선언된 state를 컴포넌트에 더 쉽게 연결해주는 헬퍼

```js
// component.vue
import { mapState } from 'vuex'

computed() {
  ...mapState(['num'])
  // num() { return this.$store.state.num; }
}

// store.js
state: {
  num: 10
}

// template
<p>{{ this.num }}</p>
```

### mapGetters

- vuex 에 선언된 getters를 컴포넌트에 더 쉽게 연결해주는 헬퍼

```js
// component.vue
import { mapGetters } from 'vuex'

computed() {
  ...mapGetters(['reverseMessage'])
}

// store.js
getters: {
  reverseMessage(state) {
    return state.msg.split('').reverse().join('');
  }
}

// template
<p>{{ this.reverseMessage }}</p>
```

### Spread 연산자를 쓰는 이유

- 기존에 computed에 선언된 것과 같이 쓰기 위해

## mapMutations, mapActions 소개 및 헬퍼의 유연한 문법

### mapMutations

```js
// App.vue
import { mapMutations } from "vuex";

methods: {
  ...mapMutations(['clickBtn']),
  authLogin() {},
  displayTable() {}
}

// store.js
mutations: {
  clickBtn(state) {
    alert(state.msg);
  }
}

// template
<button @click="clickBtn"> popup message </button>
```

### mapActions

```js
// App.vue
import { mapActions } from "vuex";

methods: {
  ...mapActions(['delayClickBtn'])
}

// store.js
actions: {
  delayClickBtn(context) {
    setTimeout(() => context.commit('clickBtn'), 2000);
  }
}

// template
<button @click="delayClickBtn"> delay popup message </button>
```

### 헬퍼의 유연한 문법

```js
// array literal
...mapMutations([
  'clickBtn', // 'clickBtn': clickBtn
  'addNumber'
]);

// object literal
...mapMutations({
  popupMsg: 'addNumber' // 컴포넌트 메소드 명: store mutation 명
});
```

## 뷰엑스로 리팩토링한 앱 구조 분석 및 정리

- 뷰엑스 이전엔 container -> presenter 구조
- 지금은 contianer역할이였던 App.vue가 store로 옮겨짐
