<template lang='pug'>
    .command
        h1 Send bot command:
        label(for="server") Server
        input(v-model="server" name="server")
        label(for="message") Message
        input(v-model="message" name ="message")
        button(@click="sendMessage(message)") send
        p Status: {{status}}
        .res
            p.float Response:
            p(v-if="!response").float  None
            pre.float  {{ response }}
</template>

<script>
  import { mapActions } from 'vuex'
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
        ...mapActions(['sendMessage'])
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
