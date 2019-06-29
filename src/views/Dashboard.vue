<template lang="pug">
    .home
        wsConnectionLoader(v-if="!connected")
        Window(title="Welcome to Drolez 95" icon="icons/safari-pinned-tab.svg")(v-if="connected")
            Toolbar
                LogoutButton
                .btns(v-if="guildsLoaded" v-for="guild in guildsDone")
                    button(@click="fetchRoles(guild.Identifier)")
                        img(:src="guild.Icon")
                        | {{ guild.Name }}
            User(:user="app.user")
            Gem(color="hsl(150, 80%, 50%)")
            Gem
            Gem(color="red")
            Gem(color="#39f")
            hr

</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import LogoutButton from '../components/LogoutButton'
  import AuthenticatedUser from '../components/AuthenticatedUser'
  import TestCommand from '../components/testCommand'
  import Window from '../components/Window'
  import Toolbar from '../components/Toolbar'
  import Gem from '../components/Gem'
  import User from '../components/User'
  import WsConnectionLoader from '../components/wsConnectionLoader'
  export default {
    name: 'Dashboard',
    components: { WsConnectionLoader, User, Gem, Toolbar, Window, TestCommand, AuthenticatedUser, LogoutButton },
    computed: {
      connected: function () {
        return this.app.socket.isAuthorized
      },
      guildsLoaded: function () {
        return !!this.app.guilds
      },
      guildsDone: function () {
        return this.app.guilds
      },
      ...mapState(['app', 'auth'])
    },
    watch: {
      // whenever question changes, this function will run
      connected: function (oldvar, newvar) {
        if (!newvar) {
          this.$store.dispatch('getGuilds', this.app.user.Id)
        }
      }
    },
    methods: {
      fetchRoles: function (guildid) {
        this.$store.dispatch('getGuildRoles', guildid)
      },
      ...mapActions(['getGuilds', 'getGuildRoles'])
    }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    @import './../assets/styles/95-progress.styl'
    .dash
        background $Not-quite-black
        width 100%
        height 100%
    a
        color yellow
</style>
