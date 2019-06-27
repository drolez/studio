<template lang="pug">
  .home
    LoginButton(v-if='!isAuthenticated')
    .open-dash-callout(v-if='isAuthenticated')
        router-link(to='dashboard') Go to dashboard
        LogoutButton()
    HelloWorld(msg="Drolez Studio")
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import LoginButton from '@/components/LoginButton.vue'
  import LogoutButton from '@/components/LogoutButton.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    components: {
      LogoutButton, HelloWorld, LoginButton
    },
    computed: {
      ...mapGetters(['isAuthenticated'])
    }
  }
</script>
