<template lang="pug">
    #app
        router-view
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Studio',
    props: {
      msg: String
    },
    computed: {
      ...mapState({
        token: state => state.auth.token,
        authStatus: state => state.auth.status
      })
    },
    methods: {
      init () {
        let self = this
        if (this.authStatus === 'success') { // Auth
          this.$store.watch( // waits for websocket to connect
            (state) => state.app.socket.isConnected, (now) => {
              console.log(now)
              if (now) { // authentificate
                console.log('connected now')
                self.sendMessage(`auth/${self.token.token}/${self.token.ttl}`)
                console.log(`auth/${self.token.token}/${self.token.ttl}`)
              }
            }
          )
        }
      },
      ...mapActions(['sendMessage'])
    },
    mounted: function () {
      this.init()
    }
  }

</script>
<style lang="stylus">
    // CSS reset
    // https://github.com/bymathias/normalize.styl
    @import '~normalize-styl'
    @import 'assets/styles/95'

    #app
      background-image url('assets/wallpapers/CIRCLES.png')

</style>
