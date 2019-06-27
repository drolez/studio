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
    .logout
        background purple
    button
        color black
        backround teal
</style>
