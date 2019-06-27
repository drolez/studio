<template lang='pug'>
    .login
        button(@click="login") Login with Discord

</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'LoginButton',
    computed: {
      ...mapGetters(['getGrantURL'])
    },
    methods: {
      login: function () {
        this.AUTH_REQUEST()
        window.location = this.getGrantURL
      },
      ...mapMutations(['AUTH_REQUEST'])
    }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    .login
        background green
    button
        color white
        background $Blurple
</style>
