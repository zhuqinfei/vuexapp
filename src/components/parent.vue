<template>
  <div>
    <span>我是父组件</span>---{{msg}}<br>
     我是父组件拿到的全局状态：{{getParentNum}}
      <button @click='padd'>父组件--改变状态按钮</button>
      <button @click='paddActions'>父组件--改变状态按钮(acitons)</button>
    <hr>
    <son :msg='abc' @handle="getMsgToFa"></son>
  </div>
</template>

<script>
import son from './son'
export default {
  name: 'parent',
  data () {
    return {
     abc:'我是父组件的内容',
     msg:'',
    }
  },
  components:{son},
  methods:{
    getMsgToFa:function(value){
      this.msg=value
    },
    padd:function(){
      this.$store.commit('increase')
    },
    paddActions:function(){
      this.$store.dispatch('decreaseActions')
    }
  },
   computed:{
    getParentNum:function(){
      return this.$store.getters.getNum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
