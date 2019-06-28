<template lang="pug">
  .window
    .titlebar
      .title-wrapper
        img(v-if='icon' :src='icon')
        span.window-title {{title}}
      button.close x
    slot
</template>

<script>
  export default {
    props: {
      title: String,
      icon: String
    }
  }
</script>

<style lang="stylus" scoped>
.window
  background-color var(--ui-base)
  border 2px outset var(--ui-border)
  padding 2px

.titlebar
  background var(--theme-layer)
  height 24px
  padding 4px
  margin-bottom 2px
  display flex
  align-items center
  justify-content space-between

.title-wrapper
  display inline-flex
  align-items center
  img
    max-height 16px
  .window-title
    margin-left 4px
    font-size 1em
    font-weight bold

.close
  width 20px
  height @width
  margin-right -2px
  padding 0
  padding-left 4px
  padding-bottom 4px
  font-size .9em
  font-weight bold

</style>
