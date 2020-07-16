<template>
  <div id="app">
  <Header class="header_box"></Header>
  <!-- <Index></Index>
  <About></About> -->
  <router-view></router-view>
  <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Index from "./components/Index"
// import About from "./components/About"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // Index,
    // About
  },
}
</script>

<style>
@import "./assets/css/mycss.css";
@import "./assets/css/common.css"
</style>
