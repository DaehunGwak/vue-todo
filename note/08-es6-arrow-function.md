# 08. ES6 for Vue.js - 화살표 함수

## Arrow Function

- 쓰는 이유?
  - 콜백 함수 문법을 간결화
  - 콜백의 `this` scope가 다른데 arrow function으로 context를 유지하며 this 바인딩이 가능

```js
// ES5 함수 정의 방식
var sum = function(a, b) {
  return a + b;
};

// ES6 Arrow Function
var sum = (a, b) => {
  return a + b;
};
```

### 화살표 함수 사용 예시

```js
var arr = ['a', 'b', 'c'];
arr.forEach(value => console.log(value));
```

> [Babel: Try it out](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.9&externalPlugins=) 사이트에서 실습

