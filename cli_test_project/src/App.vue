<template>
  <div>
    {{ $store.state.user}}
    <UserComp />
    <CourseComp @origamid="showMessage" />
  </div>
</template>

<script>
import UserComp from './components/UserComp.vue';
import CourseComp from './components/CurseComp.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    UserComp,
    CourseComp
  },
  methods:{
    showMessage(message){
      console.log('message: ', message)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
