<template lang="pug">
  .role-group
    input.cb(type="checkbox" :id="internalId" v-model="open")
    label.group-name(:for="internalId" :id="internalId")
      img(src="@/assets/icons/folder.png" v-if="open")
      img(src="@/assets/icons/folder_closed.png" v-else)
      span {{name}}
    .group-wrapper(v-if="open")
      slot
</template>

<script>
  import RoleBadge from './RoleBadge'
  export default {
    props: {
      name: String,
      collapsed: Boolean
    },
    computed: {
      internalId () {
        return `role-group-${btoa(this.name)}`
      }
    },
    data () {
      return {
        open: !this.collapsed
      }
    },
    components: { RoleBadge }
  }
</script>

<style lang="stylus" scoped>
.cb
  display none

.role-group
  margin 8px 4px

.group-name
  display inline-flex
  align-items center
  margin-bottom 4px
  padding-right 4px
  border 2px outset transparent
  user-select none
  &:hover, &:active
    border-color var(--ui-border)
  &:active
    border-style inset
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
