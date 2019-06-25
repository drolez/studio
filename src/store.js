import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // app data
    user: {
      // for user related information
      auth: {
        // authentication details
        url: {
          // Discord OAuth2 urls
          // https://discordapp.com/developers/docs/topics/oauth2
          base: 'https://discordapp.com/api/oauth2/authorize',
          token: 'https://discordapp.com/api/oauth2/token',
          revoke: 'https://discordapp.com/api/oauth2/token/revoke'
        },
        token: undefined,
        status: undefined
      }
    },
    app: {
      // for general purpose things like app settings
    }
  },
  mutations: {

  },
  actions: {

  }
})
