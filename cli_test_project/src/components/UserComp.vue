<template>
    <p>User: {{ getCompleteClass }}</p>

    <p>User completed courses</p>
    <p v-if="getCompletedCoursesAll().length > 0" >
        <ul>
            <li v-for="item in getCompletedCoursesAll()" :key="item.name" >{{item.name}}</li>
        </ul>
    </p>
</template>

<script>
export default {
    name:'UserComp',
    methods:{
        getCompletedCoursesAll(){
            return this.$store.getters.getCompletedCourses;
        }
    },
    computed:{
        getCompleteClass(){
            return this.$store.getters.getCompletedClass
        },
        getCompletedCourses(){
            return this.$store.getters.getCompletedCourses;
        }
    }
}
</script>

<style>
</style>