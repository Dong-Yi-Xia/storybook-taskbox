<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Task />
  </div>
</template>

<script>
import Task from "./components/Task.vue";

export default {
  name: "App",
  components: {
    Task
  }
};
</script>

<style>
@import "./index.css";
</style>
