<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" anotherMsg="Superstring!"/>
    <hr>
    <Calculator/>
    <hr>
    
    {{ message }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Calculator from './components/Calculator.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calculator
  },
  data(){
    return {
      clickCount: 0,
      currentDate: "Current date",
      message: "Hello GeekBrains!",
    }
  },
  methods: {
    onClick(){
      this.clickCount += 1;
    }
  },
  computed:{
    computedDate(){
      return this.currentDate || new Date();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
