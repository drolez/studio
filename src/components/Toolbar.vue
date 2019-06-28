<template lang="pug">
  .toolbar
    slot
    hr
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
line-color = #2A2A2A

.toolbar
  position relative
  display flex
  padding 2px
  padding-bottom 4px
  margin-bottom 2px
  //border-bottom 1px solid line-color

  button
    border-color transparent
    margin-right 4px
    &:active, &:hover
      border-color var(--ui-border)

  .divider
    display inline-block
    width 4px
    border-left 1px solid line-color

hr
  position absolute
  width 100%
  width calc(100% - 2px)
  bottom -2px
  left 0
</style>
