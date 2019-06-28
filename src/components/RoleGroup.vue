<template lang="pug">
  .role-group
    .group-name
      img(src="@/assets/icons/folder.png")
      span {{name}}
    .group-wrapper
      slot
</template>

<script>
  import RoleBadge from './RoleBadge'
  export default {
    props: {
      name: String
    },
    components: { RoleBadge }
  }
</script>

<style lang="stylus" scoped>
.role-group
  margin 8px 4px

.group-name
  display flex
  align-items center
  margin-bottom 4px
  img
    height 16px
    margin-right 4px

.group-wrapper
  position relative
  display flex
  flex-direction column
  margin-left 8px
  &::before
    content ''
    position absolute
    height 100%
    height calc(100% - 1em + 1px)
    width 1px
    background-color var(--ui-light-border)
  .role-badge
    position relative
    margin-left 12px
    width max-content
    &::before
      content ''
      position absolute
      left -12px
      width 12px
      height 1px
      background-color var(--ui-light-border)
</style>
