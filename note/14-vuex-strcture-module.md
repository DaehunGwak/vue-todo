# 14. Vuex - 프로젝트 구조화 및 모듈화

## 1. 속성 별로 모듈화

```js
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from 'store/getters.js'
import * as mutations from 'store/mutations.js'
import * as actions from 'store/actions.js'

export const store = new Vuex.Store({
  state: {},
  getters,
  mutations,
  actions
})
```

## 2. `modules` 속성 사용

[example code](../src/store/modules/todoApp.js)
