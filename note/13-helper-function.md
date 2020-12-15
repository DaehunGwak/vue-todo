# 13. Vuex - 헬퍼 함수

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
