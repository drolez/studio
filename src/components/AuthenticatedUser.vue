<template lang='pug'>
    .user
        | Login Status
        p(v-if='!isAuthenticated') Logged out
        p(v-if='isAuthenticated') {{ authStatus }}

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AuthenticatedUser',
    computed: {
      ...mapGetters(['isAuthenticated', 'authStatus'])
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
        background pink
</style>
