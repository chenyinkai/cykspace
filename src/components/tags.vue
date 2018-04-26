<template>
  <div class="tags">
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'tags',
  data() {
    return {
      msg: 'tags'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
