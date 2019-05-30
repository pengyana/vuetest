<template>
  <div class="hello">
    {{count}}
  </div>
</template>

<script>
  import store from '@/store/index'
export default {
  name: 'HelloWorld',
  computed: {
    count () {
      return this.$store.state.adata +'-'+ store.state.adata
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
