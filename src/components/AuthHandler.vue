<template lang='pug'>
    .auth
        h1 Processing authentication
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'AuthHandler',
    created: function () {
      let hash = this.$route.hash
      const tokenPattern = /access_token=([a-zA-z0-9]*)/
      const expiresPattern = /expires_in=([0-9]*)/
      if (hash.match(tokenPattern)) {
        // Checks for callback data
        this.AUTH_SUCCESS({ token: hash.match(tokenPattern)[1], ttl: hash.match(expiresPattern)[1] })
        this.$router.push('/dashboard')
      } else {
        this.AUTH_ERROR()
        this.$router.push('/')
      }
    },
    methods: {
      ...mapMutations(['AUTH_SUCCESS', 'AUTH_ERROR'])
    }
  }
</script>

<style lang='stylus' scoped>
    @import './../assets/styles/colors.styl'
    .auth
        background $Dark-but-not-black
        color: $Blurple
</style>
