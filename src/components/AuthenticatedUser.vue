<template lang='pug'>
    .user
        | Login Status: {{ authStatus }}

        p(v-if='!isAuthenticated') Logged out
        p(v-if='isAuthenticated')
            b Token:
            |{{ getToken.token }}
        p(v-if='isAuthenticated')
            b Expires:
            |{{ getToken.ttl }}

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AuthenticatedUser',
    computed: {
      ...mapGetters(['isAuthenticated', 'authStatus', 'getToken'])
    },
    methods: {
      login: function () {
        window.location = this.getGrantURL
      }
    }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    .user
        background $Dark-but-not-black
</style>
