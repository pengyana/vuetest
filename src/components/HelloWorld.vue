<template>
  <div class="hello">
    {{count}}

    getter:------{{getterFuna}}

    <button @click="btnClick">点击事件</button>

    <SlotName><div slot="header">头部</div><div slot="footer">脚</div></SlotName>
  </div>
</template>

<script>
  import store from '@/store/index'
  import {getters} from 'vuex'
  import SlotName from '@/components/slotName'
export default {
  name: 'HelloWorld',
  components: {
    SlotName,
  },
  computed: {
    count () {
      return this.$store.state.adata +'-'+ store.state.adata
    },
    getterFuna(){
      return this.$store.getters.getterFun(this.objectstr);
    },
    countNum(){
      return this.$store.state.count
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      objectstr:{a:1,b:2}
    }
  },
  mounted(){

//    count()
    this.changeFun()
  },
  methods:{
    changeFun(){
      this.$store.commit('adataFun','www');
      console.log(this.$store.state);

    },
    btnClick(){
      this.$store.dispatch('actionFun', {
        amount: 10
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
