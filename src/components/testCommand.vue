<template lang='pug'>
    .command
        h1 Send bot command:
        label(for="server") Server
        input(v-model="server" name="server")
        label(for="message") Message
        input(v-model="message" name ="message")
        button(@click="sendSocket") send
        p Status: {{status}}
        .res
            p.float Response:
            p(v-if="!response").float  None
            pre.float  {{ response }}
</template>

<script>
  export default {
    name: 'testCommand',
    data: function () {
      return {
        message: '',
        response: '',
        server: 'wss://reye.me:4555',
        status: ''
      }
    },
    methods:
      {
        sendSocket: function () {
          let self = this
          // Create WebSocket connection.
          try {
            self.status = 'sending command'
            const socket = new WebSocket(this.server)
            // Connection opened
            socket.addEventListener('open', function (event) {
              socket.send(self.message)
              self.message = ''
              self.status = 'command sent'
            })
            // Listen for messages
            socket.addEventListener('message', function (event) {
              self.response = event.data
              self.status = 'recieved response'
            })
          } catch (e) {
            self.status = 'error:'
            self.response = e
          }
        }
      }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    .res
        background $Dark-but-not-black
    .command
        background red
        display flex
        flex-direction column
        align-items center
        justify-content center
        backround teal
    .float
        float left
</style>
