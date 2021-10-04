<template>
  <div>
    <span>我是子组件</span>----{{msg}} <br>
     我是子组件拿到的全局状态：{{getSonNum}}
    <button @click='setMsgToFa'>点我</button>
    <button @click='sadd'>子组件--改变状态按钮</button>
    <button @click='saddActions'>子组件--改变状态按钮(acitons)</button>
  </div>
</template>

<script>
export default {
  name: 'son',
  props:{
    msg:{
      type:String,
      default:''
    }
  },
  data:function(){
    return{
      count:'我是你的son'
    }
  },
  methods:{
    setMsgToFa:function(){
      this.$emit('handle',this.count)
    },
    sadd:function(){
      this.$store.commit('increase')  //commit方法里面是mutation定义的函数名
    },
    saddActions:function(){
      this.$store.dispatch(' decreaseActions')
    }
  },
  computed:{
    getSonNum:function(){
      return this.$store.state.num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
