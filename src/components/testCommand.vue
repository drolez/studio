<template lang='pug'>
    .command
        h1 Send bot command:
        label(for="server") Server
        input(v-model="server" name="server")
        label(for="message") Message
        input(v-model="message" name ="message")
        button(@click="sendSocket") send
        p Status: {{status}}
        p Response:
        pre.res {{ response }}
        p(v-if="!response") None
</template>

<script>
  export default {
    name: 'testCommand',
    data: function () {
      return {
        message: '',
        response: '',
        server: 'wss://82.114.198.147:4555',
        status: ''
      }
    },
    methods:
      {
        sendSocket: async function () {
          // Create WebSocket connection.
          this.status = 'connecting'
          const socket = new WebSocket(this.server)
          // Connection opened
          socket.addEventListener('open', async function (event) {
            this.status = 'sending command'
            await socket.send(this.message)
            this.message = ''
            this.status = 'command sent'
          })
          // Listen for messages
          socket.addEventListener('message', async function (event) {
            this.response = event.data
            this.status = 'recieved data'
          })
        }
      }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    .res
        background $Dark-but-not-black
    .command
        display flex
        flex-direction column
        align-items center
        justify-content center
        backround teal
    pre
        background yellow
</style>
