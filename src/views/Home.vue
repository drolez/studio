<template lang="pug">
  .home
    login
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Login from '@/components/Login.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld, Login
    }
  }
</script>
