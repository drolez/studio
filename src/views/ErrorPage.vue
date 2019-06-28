<template lang="pug">
  .graveyard
    .headstone
      div RIP
      img(src="@/assets/icons/logo_95.png")
</template>

<script>
  export default {
    name: 'RIP'
  }
</script>

<style lang="stylus" scoped>

.graveyard
  width 100%
  height 90vh
  display flex
  align-items center
  justify-content center

.headstone
  width 150px
  height 200px
  background-color var(--ui-base)
  border 4px outset var(--ui-base)
  border-radius 100px 100px 0 0
  text-align center
  padding-top 50px
  font 42px 'Comic Sans MS'
</style>
