import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
          num:88
          },
    mutations:{
      increase:function(state){
           state.num++
      },
      decrease:function(state){
          state.num=state.num-20
      }
    },
    actions:{   //actions中只能对mucations进行操作
        //context为上下文对象
       decreaseActions:function(context){
          context.commit('decrease')
              //decrease方法是mucations中定义的方法
      }
    },
    getters:{
        getNum:function(state){
           return state.num>0? state.num:0
        } 
    }
    })