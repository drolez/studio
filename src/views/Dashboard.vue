<template lang="pug">
    .home
        Window(title="Welcome to Drolez 95" icon="icons/safari-pinned-tab.svg")
            Toolbar
                button
                    img(src="@/assets/icons/logo_95.png")
                    | Button test
                LogoutButton
            Gem(color="hsl(150, 80%, 50%)")
            Gem
            Gem(color="red")
            Gem(color="#39f")
            hr
            test-command
    //.dash
        h1 Welcome to the dashboard
        router-link(to='/') Go home
        AuthenticatedUser
        LogoutButton

</template>

<script>
  import LogoutButton from '../components/LogoutButton'
  import AuthenticatedUser from '../components/AuthenticatedUser'
  import TestCommand from '../components/testCommand'
  import Window from '../components/Window'
  import Toolbar from '../components/Toolbar'
  import Gem from '../components/Gem'
  export default {
    name: 'Dashboard',
    components: { Gem, Toolbar, Window, TestCommand, AuthenticatedUser, LogoutButton }
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
