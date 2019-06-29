<template lang="pug">
    #app
        router-view
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Studio',
    props: {
      msg: String
    },
    computed: {
      ...mapState({
        token: state => state.auth.token,
        authStatus: state => state.auth.status
      })
    }
  }

</script>
<style lang="stylus">
    // CSS reset
    // https://github.com/bymathias/normalize.styl
    @import '~normalize-styl'
    @import 'assets/styles/95'

    #app
      background-image url('assets/wallpapers/CIRCLES.png')

</style>
