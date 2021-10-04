<template>
  <div class="hello">
    <parent></parent> <hr>
    <outter></outter>
  </div>
</template>

<script>
import parent from './parent'
import outter from './outter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{parent,outter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
