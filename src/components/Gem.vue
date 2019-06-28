<template lang="pug">
  .gem-slot
    .gem(
      v-if="color"
      :style="{backgroundColor: color}"
    )
</template>

<script>
  export default {
    props: {
      color: String
    }
  }
</script>

<style lang="stylus" scoped>
.gem-slot
  position relative
  display inline-block
  width 12px
  height @width
  box-shadow inset 2px 2px alpha(black, 30%),\
             inset -2px -2px alpha(white, 30%)

.gem
  position absolute
  top 2px
  left 2px
  display inline-block
  width 8px
  height @width
  box-shadow inset -2px -2px alpha(black, 50%),
             inset 2px 2px alpha(white, 70%)
</style>
