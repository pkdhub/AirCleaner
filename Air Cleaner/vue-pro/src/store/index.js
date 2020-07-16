import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    //state 专门用来保存  共享的状态值
    state: {
        login:false
    },
    //mutations 专门书写方法，用来更新state中的值
    mutations: {
        // 登录
        DoLogin(state){
            state.login=true
        },
        // 退出
        DoLogout(state){
            state.login=false
        }
    }
  })