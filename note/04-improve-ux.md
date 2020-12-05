# 04. Todo App - 사용자 경험 개선

## 들어가며

- vue에선 modal component를 기본으로 제공하는 것이 있음
  - https://kr.vuejs.org/v2/examples/modal.html
- `text/x-template`?
  - 템플릿을 모듈화할려면 저걸 설정해줘야함

## `slot`

- 컴포넌트 내 일부 ui를 재사용할 수 있는 기능

## `transition`

> - https://vuejs.org/v2/guide/transitions.html

- vue에 트랜지션 기능을 지원하고 있음
- 해당 다큐의 동작원리를 참고: https://vuejs.org/v2/guide/transitions.html#Transition-Classes
- `v-*` 의 v는 css class prefix: tansition 엘리먼트의 name 속성에 v에 해당하는 값을 넣어줌
