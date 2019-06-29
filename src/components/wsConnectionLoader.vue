<template lang='pug'>
    .home
        Window(title="Dialing Progress" icon="icons/network.png")
            .connecting
                .step1(v-if="!app.socket.isConnected")
                    p.saving Connecting to Drolez Bot
                        span  .
                        span .
                        span .
                    img(src="@/assets/icons/disconnected.png")

                .step2(v-if="app.socket.isConnected && !app.socket.isAuthorized")
                    p.saving Authorizing your Computer
                        span  .
                        span .
                        span .
                    img(src="@/assets/icons/auth.png")

                .step3(v-if="app.socket.isAuthorized")
                    p Ready
                    img(src="@/assets/icons/connected.png")
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Window from '../components/Window'
  export default {
    name: 'wsConnectionLoader',
    components: { Window },
    computed: {
      // mix this into the outer object with the object spread operator
      ...mapState(['app', 'auth'])
    },
    methods: {
      ...mapActions(['getGuilds'])
    }
  }
</script>

<style lang='stylus' scoped>
    @keyframes blink
        0%
            opacity .2
        20%
            opacity 1
        100%
            opacity .2
    .saving
        span
            animation-name blink
            animation-duration 1s
            animation-iteration-count infinite
            animation-fill-mode both

            &:nth-child(2)
                animation-delay .3s
            &:nth-child(3)
                animation-delay .6s
</style>
