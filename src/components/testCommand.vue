<template lang='pug'>
    .command
        p Send bot command:
        input(v-model="message")
        button(@click="sendSocket") send {{ message }}
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
        status: ''
      }
    },
    methods:
      {
        sendSocket: async function () {
          // Create WebSocket connection.
          this.status = 'connecting'
          const socket = new WebSocket('wss://82.114.198.147:4555')
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
        backround teal
    pre
        background yellow
</style>
