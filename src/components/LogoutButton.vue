<template lang='pug'>
    .logout
        button(@click="logout") Log out
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'LoginButton',

    methods: {
      logout: function () {
        this.AUTH_LOGOUT()
        this.$router.push('/')
      },
      ...mapMutations(['AUTH_LOGOUT'])
    }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    .logout
        background $Dark-but-not-black
    button
        color black
        backround teal
</style>
