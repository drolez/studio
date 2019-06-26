<template lang='pug'>
    .login
        a(v-bind:href='getGrantURL') Login with Discord
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Login',
computed: {
      ...mapGetters(['getGrantURL'])
    }
  }
</script>

<style lang='stylus' scoped>
    .login
        background red
        .btn
            background green
</style>
