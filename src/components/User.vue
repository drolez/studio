<template lang="pug">
  .user
    img.profile-pic(:src="user.avatar")
    .user-info
      .name {{user.username}}
      .roles
        Gem(v-for="roleId in roles" :key="roleId" :color="getColor(roleId)")
</template>

<script>
  import Gem from './Gem'
  export default {
    props: {
      user: Object,
      roles: Array
    },
    methods: {
      // @FIXME
      getColor (roleId) {
        const role = this.$store.getters.getRole(roleId)
        const color = role.color
        return `rgb(${color[0]},${color[1]},${color[2]})`
      }
    },
    components: { Gem }
  }
</script>

<style lang="stylus" scoped>
.user
  display flex
  margin 4px
  padding 4px
  background-color var(--ui-lowlight)
  img
    height 42px
    width @height
    margin-right 8px
    border 2px inset var(--ui-lowlight)

.user-info
  display flex
  flex-direction column
  justify-content space-around

.name
  font-weight bold
  font-size 1.2em
</style>
