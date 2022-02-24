<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <task />
    <hello-world />
    <my-page />
  </div>
</template>

<script>
import Task from "./components/Task.vue";
import HelloWorld from "./components/HelloWorld.vue"
import MyPage from './stories/Page.vue'

export default {
  name: "App",
  components: {
    Task,
    HelloWorld,
    MyPage,
  }
};
</script>

<style>
@import "./index.css";
</style>
