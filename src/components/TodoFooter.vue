<template>
  <div>
    <div class="clearAllContainer shadow" @click="clearAll">
      <span class="clearAllBtn">Clear All</span>
    </div>
    <h5>by <a href="https://github.com/daehungwak">daehun</a></h5>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    clearAll() {
      this.$store.commit("clearItems");
    }
  }
};
</script>

<style scoped>
h5,
a {
  margin-top: 40px;
  color: whitesmoke;
}

.clearAllContainer {
  width: 7rem;
  height: 45px;
  line-height: 47px;
  background: linear-gradient(
    332deg,
    rgba(49, 89, 218, 1) 5%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  border-radius: 10px;
  margin: 0 auto;
  cursor: pointer;
}

.clearAllBtn {
  color: white;
  font-weight: 500;
  display: block;
}
</style>
