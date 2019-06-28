<template lang="pug">
  .role-badge(draggable)
    Gem(:color="color")
    span.role-name {{name || "Unnamed role"}}
</template>

<script>
  import Gem from './Gem'
  export default {
    props: {
      color: String,
      name: String
    },
    components: { Gem }
  }
</script>

<style lang="stylus" scoped>
.role-badge
  cursor pointer
  display inline-flex
  align-items center
  padding 2px 4px
  margin 2px
  border 1px solid var(--ui-light-border)
  &:hover
    background-color var(--ui-highlight)

.role-name
  display inline-block
  margin-left 4px
</style>
