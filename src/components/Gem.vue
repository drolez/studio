<template lang="pug">
  .gem(:style="{backgroundColor: color}")
</template>

<script>
  export default {
    props: {
      color: String
    }
  }
</script>

<style lang="stylus" scoped>
.gem
  display inline-block
  width 12px
  height @width
  box-shadow inset -2px -2px alpha(black, 30%), inset 2px 2px alpha(white, 60%)
</style>
