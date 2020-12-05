# 07. ES6 for Vue.js - const & let

## const & let - 새로운 변수 선언 방식

- 블록단위 범위 제한
- `const` 선언한 값에 대해 변경할 수 없음
- `let` 선언한 변수에 대해 다시 선언할 수 없음

## ES5 리뷰

### 변수 스코프

- 변수 유효범위
- es5는 블럭(`{}`) 상관없이 스코프가 설정

```js
var sum = 0;
console.log(i); // undefined (not defined 에러가 안뜸)
for (var i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum); // 15
console.log(i); // 6:  i 가 해제되지 않고 어느 스코프든 인식됨
```

### 호이스팅

- Hoisting: 끌어 올려진다
- 선언한 함수와 변수를 해석기가 가장 상단에 끌어올려진 것처럼 인식
- js 해석기는 코드의 라인 순서와 관계없이 `함수선언식` (표현식이 아님), `변수`를 위한 메모리 공간을 먼저 확보
- var, function이 가장 산단에 끌어 올려진 것(hoisted) 처럼 보임

```js
function willBeOveridden() {
  return 'before';
}

console.log(willBeOverriden()); // after

function willBeOverriden() {
  return 'after';
}
```

- Q: 어떻게 순서가 재조정될까요?

예제

```js
var sum = 5;
sum = sum + i;

function sumAllNumbers() {
  // ...
}

var i = 10;
```

재조정 후

```js
var sum;
function sumAllNumbers() {
  // ...
}
var i;

sum = 5;
sum = sum + i;
i = 10;
```

### 함수 선언식 vs 함수 표현식

> https://gmlwjd9405.github.io/2019/04/20/function-declaration-vs-function-expression.html

- 함수 선언식

```js
function sum() {
  ...
}
```

- 함수 표현식

```js
var sum = function() {
  ...
};
```

## const와 let 추가 설명 및 정리

### 처음 예제 let으로 수정

```js
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum); // 15
console.log(i); // not defined error
```

### const는 처음 할당을 바꿀 수 없도록 fix할 뿐 내부는 바꿀 수 있음

- 따라서 object, array는 컨텐츠를 바꿀수 있음
- 다만 레퍼런스 해제가 불가

### scope

```js
function f() {
  {
    let x; // (1)
    {
      const x = "sneaky"; // (2)
      x = "foo"; // (2) 는 const므로 에러
    }

    x = "bar" // (1)
    let x = "inner"; // (1) 은 이미 선언 되었으므로 에러
    }
}
```
