<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/jayzImg.png">
    <HelloWorld msg="Welcome to My Demo Game App"/>
    <MyGameDescription/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyGameDescription from "./components/MyGameDescription.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    MyGameDescription
  }
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
