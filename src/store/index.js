import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

 const store =  new Vuex.Store({
  state:{
    adata:'原来的',
    count:1
  },
  mutations:{
    adataFun(state,lsi){
      console.log(state);
      console.log(lsi);
    },
    increment (state) {
      state.count++
      console.log(this.state.count)
    }
  },
   getters:{
    //getter 返回一个函数，来实现给 getter 传参
    getterFun:state=> getters =>{
      console.log(getters)
      return state;
    }
   },
   actions:{
      actionFun({commit}){
        setTimeout(() => {
          commit('increment')
        }, 1000)
      }
   }

});
export default store;
