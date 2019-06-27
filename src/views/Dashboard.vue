<template lang="pug">
    .dash
        h1 Welcome to the dashboard
        router-link(to='/') Go home
        AuthenticatedUser
        LogoutButton
        test-command
</template>

<script>
  import LogoutButton from '../components/LogoutButton'
  import AuthenticatedUser from '../components/AuthenticatedUser'
  import TestCommand from '../components/testCommand'
  export default {
    name: 'Dashboard',
    components: { TestCommand, AuthenticatedUser, LogoutButton }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    .dash
        background $Not-quite-black
        width 100%
        height 100%
    a
        color yellow
</style>
