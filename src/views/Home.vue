<template lang="pug">
  .home
      Window(title="Welcome to Drolez 95" icon="icons/safari-pinned-tab.svg" static)
          Toolbar
              .open-dash-callout(v-if='isAuthenticated')
                  router-link(to='dashboard')
                      button
                        img(src="@/assets/icons/logo_95.png")
                        | Launch Studio
                  LogoutButton()
              LoginButton(v-if='!isAuthenticated')

          HelloWorld(msg="Drolez Studio")
      //
        Gem(color="hsl(150, 80%, 50%)")
          Gem
          Gem(color="red")
          Gem(color="#39f")
          hr
          RoleBadge(name="DrolezDev", color="purple")
          RoleBadge(name="Googly-eyed neso", color="hotpink")
          RoleBadge
          hr
          RoleGroup(name="Cool roles")
            RoleBadge(name="DrolezDev", color="purple")
            RoleBadge(name="Googly-eyed neso", color="hotpink")
          RoleGroup(name="Less cool roles" collapsed)
            RoleBadge(name="Swamp thing", color="rgb(150,180,20)")
            RoleBadge(name="Cerx", color="#33f")
          hr
          Toggle(v-model="toggleTest") Trigger me
          h1(v-if="toggleTest") v-model TRIGGER
          hr
          User(:user="{Username: 'Ovi', Avatar: 'https://cdn.discordapp.com/avatars/399106406026051597/25d4e46f00edad9304582a21b4d4b8e3.png'}")
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
  import RoleBadge from '@/components/RoleBadge'
  import RoleGroup from '@/components/RoleGroup'
  import Toggle from '@/components/Toggle'
  import User from '@/components/User'
  //
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    data () {
      return {
        toggleTest: null
      }
    },
    components: {
      LogoutButton,
      HelloWorld,
      LoginButton,
      //
      Window,
      Toolbar,
      Gem,
      RoleBadge,
      RoleGroup,
      Toggle,
      User
    },
    computed: {
      ...mapGetters(['isAuthenticated'])
    }
  }
</script>
