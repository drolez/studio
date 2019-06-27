<template lang="pug">
  .home
    .open-dash-callout(v-if='isAuthenticated')
        router-link(to='dashboard') Go to dashboard
        LogoutButton()
    Window(title="Welcome to Drolez 95" icon="icons/safari-pinned-tab.svg")
      Toolbar
        button
          img(src="@/assets/icons/logo_95.png")
          | Button test
        LoginButton(v-if='!isAuthenticated')
      HelloWorld(msg="Drolez Studio")
      Gem(color="hsl(150, 80%, 50%)")
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import LoginButton from '@/components/LoginButton.vue'
  import LogoutButton from '@/components/LogoutButton.vue'
  // testing Windows 95
  import Window from '@/components/Window'
  import Toolbar from '@/components/Toolbar'
  import Gem from '@/components/Gem'
  //
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    components: {
      LogoutButton,
      HelloWorld,
      LoginButton,
      //
      Window,
      Toolbar,
      Gem
    },
    computed: {
      ...mapGetters(['isAuthenticated'])
    }
  }
</script>
