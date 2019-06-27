<template lang="pug">
    #app
        router-view
</template>
<script>
  // import io from 'socket.io-client'
  export default {
    name: 'Studio',
    props: {
      msg: String
    }
    /* mounted: async () => {
      // Create WebSocket connection.
      const socket = new WebSocket('wss://82.114.198.147:4555')

      console.log(socket.bufferedAmount)
      // Connection opened
      socket.addEventListener('open', function (event) {
        socket.send('test1')
      })

      // Listen for messages
      socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data)
      })
    } */
  }

</script>
<style lang="stylus">
    // CSS reset
    // https://github.com/bymathias/normalize.styl
    @import '~normalize-styl'

    // Main app container
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #FFF
        background #2C2F33
        height 100vh
        width 100vw
        display flex

</style>
