<template>
    <!--
        <p>Total Class: {{totClass}}</p>
    <p>Completed class: {{getCompleteClass}}</p>
    <p>completedClass: {{ completedClass }}</p>
    <p><input v-model="newUser"  type="text" /></p>
    <p><button @click.prevent="()=>{increaseClass();showConsole();changeUserName()}" >Action default</button></p>
    <p><button @click.prevent="()=>{increaseClass();showConsole();changeUserNameMapMutation()}" >Action mutate</button></p> 
    -->  
    <div>
        <h2>Classes</h2>
        <div>
            <button v-for=" item in classes" :key="item.name" @click.prevent="()=>completedCourses(item)" :style="{marginRight:'10px'}">{{  item.name}}</button>
        </div>
    </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name:'ClassComp',
    data(){
        return({
            totClass:25,
            newUser:'',
            classes:[
                {name:'HTML & CSS', curse_duration:30},
                {name:'PHP & OOP', curse_duration:60},
                {name:'Python & Django', curse_duration:89},
            ]
        })
    },
    methods:{
        ...mapMutations(['USER_MUTATE_TEST']),
        showConsole(){
            //{{ $store.state.user}}
            console.log(this.infoUser)
        },
        increaseClass(){
            this.$store.dispatch('increment');
        },
        reduceClass(){
            this.$store.dispatch('decrement')
        },
        changeUserName(){
            this.$store.dispatch('muteUser', {name:this.newUser})
        },
        changeUserNameMapMutation(){
            this.USER_MUTATE_TEST({name:this.newUser})
        },
        completedCourses(value){
            this.$store.dispatch('addCompletedCourse', {...value})
        }
        
    },
    computed:{
        infoUser(){
            return this.$store.state.user;
        },
        /* completedClass(){
            return this.$store.state.completedClass
        }, */
        getCompleteClass(){
            return this.$store.getters.getCompletedClass
        },
        ...mapState(['completedClass'])
    }
}
</script>

<style>
</style>