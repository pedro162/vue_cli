//import Vue from 'vue'
import Vuex from "vuex"

//Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        // Defina o estado inicial
        user:'Lobo',
        completedClass:10,
        completedCoursesState:[]
    },
    mutations:{
        // Defina as mutações para modificar o estado
        increment(state){
            state.completedClass++
        },
        decrement(state){
            state.completedClass--;
        },
        userMutate(state, payload){
            state.user = payload?.name;
        },
        USER_MUTATE_TEST(state, payload){
            state.user = payload?.name;
        },
        ADD_COMPLETED_COURSE(state, payload){
            state.completedCoursesState.push(payload)
        }
    },
    actions:{

        // Defina as ações para despachar mutações
        increment(context){
            context.commit('increment')
        },
        decrement(context){
            context.commit('decrement')
        },
        muteUser(context, value){
            context.commit('userMutate', value)
        },
        mutateUser(context, value){
            context.commit('userMutate', value)
        },
        addCompletedCourse(context, value){
            context.commit('ADD_COMPLETED_COURSE', value)
        }
    },
    getters:{
        // Defina getters para acessar e derivar o estado
        getCompletedClass(state){
            return state.completedClass
        },
        getUser(state){
            return state.user;
        },
        getCompletedCourses(state){
            return state.completedCoursesState
        }
    }
})