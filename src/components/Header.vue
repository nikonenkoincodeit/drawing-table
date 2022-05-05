<template>
  <header class="header">
    <div class="container">
      <h1 class="title">Студент</h1>
      <button type="button" class="btn-auth" @click="showForm">Login</button>
    </div>
  </header>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Header",
  setup() {
    const store = useStore();

    const showForm = () => store.dispatch("TOGGLE_SHOW_FORM", false);

    return { showForm };
  },
};
</script>

<style>
.header {
  padding: 20px 0;
  border-bottom: 1px solid #ececec;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-auth {
  cursor: pointer;
  padding: 10px 32px;
  border: none;
  background: pink;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
}
</style>
