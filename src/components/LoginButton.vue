<template lang='pug'>
    button(@click="login")
      img(src="@/assets/icons/discord95.png")
      | Login with Discord
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
    button
        //background $Blurple
</style>
