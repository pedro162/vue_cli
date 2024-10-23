<template>
    <div>
        <p>Course</p>
        <p>Course user : {{ $store.state.user}}</p>
        <CalassComp></CalassComp>
        <p>
            <button @click.prevent="eventEmmit">Emitir evento</button>
        </p>
    </div>
</template>

<script>
import CalassComp from './CalassComp.vue';
export default {
    name:'CourseComp',
    data(){
      return({
        totalHours:300
      })  
    },
    components:{
        CalassComp
    },
    methods:{
        eventEmmit(){
            this.$emit('origamid', 'This is the message')
        }
    }
}
</script>

<style>
</style>