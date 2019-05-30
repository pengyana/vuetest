import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

 const store =  new Vuex.Store({
  state:{
    adata:'原来的'
  },
  mutations:{
    adataFun(state,lsi){
      console.log(state);
      console.log(lsi);
    }
  }
});
export default store;
