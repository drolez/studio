<template lang="pug">
  label
    input(
      type="checkbox"
      :checked="enabled"
      @change="emitToggle"
    )
    span.toggle
    span.label
      slot
</template>

<script>
  export default {
    props: {
      enabled: Boolean
    },
    methods: {
      emitToggle (event) {
        this.$emit('input', event.target.checked)
      }
    }
  }
</script>

<style lang="stylus" scoped>
input
  display none

.toggle
  position relative
  cursor pointer
  &::before
    content ''
    position absolute
    top 6px
    top calc(50% - 3px)
    left 4px
    width 28px
    height 6px
    background-color var(--ui-disabled)
    background-image linear-gradient(to right, alpha(white, 30%), transparent, alpha(black, 30%))
    border 2px inset var(--ui-border)
  &::after
    content ''
    position absolute
    top 6px
    top calc(50% - 6px)
    left 2px
    width 16px
    height 12px
    background-color var(--ui-highlight)
    border 2px outset var(--ui-light-border)

input:checked + .toggle
  &::before
    background-color var(--ui-enabled)
  &::after
    transform translateX(14px)

.label
  display inline-block
  margin-left 36px
  padding 4px
  user-select none
</style>
