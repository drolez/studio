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
      if (hash) {
        // Checks for callback data
        const tokenPattern = /access_token=([a-zA-z0-9]*)/
        this.AUTH_SUCCESS(hash.match(tokenPattern)[1])
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

</style>
