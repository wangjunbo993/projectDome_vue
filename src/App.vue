<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="main">
      <router-link to="/index"></router-link>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import BottomBar from '@/components/BottomBar'
  export default {
    name: 'App',
    components: {
      Navbar,
      BottomBar,
    },
  }
</script>

<style>
  @import "./assets/scss/common.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 65px;
  }
</style>
