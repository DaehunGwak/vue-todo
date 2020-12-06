# 09. ES6 for Vue.js - Enhanced Object Literals

## 함수 축약

```js
var dictionary = {
  words: 100,
  // ES5
  lookup: function() {
    console.log("find words");
  },
  // ES6
  lookup() {
    console.log("find words");
  }
}
```

## 속성 축약

```js
var figures = 60;
var dictionary = {
  // es5
  figures: figures,
  // es6
  fugres,
}
```
