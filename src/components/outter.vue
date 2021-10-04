<template>
  <div>
     我是outter组件拿到的全局状态：{{getOutterNum}}
    <button @click='oadd'>outter组件--改变状态按钮</button>
     <button @click='oaddActions'>outter组件--改变状态按钮(acitons)</button>
  </div>
</template>

<script>

export default {
  name: 'outter',
   computed:{
    getOutterNum:function(){
      return this.$store.state.num
    }
  },
  methods:{
    oadd:function(){
      this.$store.commit('increase')
    },
     oaddActions:function(){
      this.$store.dispatch('decreaseActions')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
