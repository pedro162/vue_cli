<template>
    <div>
        <p>Course</p>
        <p>Course user : {{ $store.state.user}}</p>
        <CalassComp></CalassComp>
    </div>
</template>

<script>
import CalassComp from './CalassComp.vue';
export default {
    name:'CourseComp',
    components:{
        CalassComp
    }
}
</script>

<style>
</style>