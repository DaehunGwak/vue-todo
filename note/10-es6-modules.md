# 10. ES6 for Vue.js - Modules

> 자바스크립트 모듈화 방법

- 자바스크립트 모듈 로더 라이브러리 (AMD, Common JS) 기능을 js 언어 자체에서 지원
- `import`, `export`
- 왜씀?
  - 재사용성 측면에서 공통된 기능을하는 코드들의 묶음 기능이 필요 => 모듈
- 파일별로 스코프 지원

```js
// libs/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;

// main.js
import { sum } from 'libs/math.js';
sum(4, 6); // 10
```

## Vue.js 에서 마주칠 `default` export

- 하나의 파일에서 하나만 부여 가능

```js
// utils.js
export default function(x) {
  return console.log(x);
}

// using
import log from 'utils.js';
log('hello world');
```
