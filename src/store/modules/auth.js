import VuexPersist from 'vuex-persist'

// Initialize VuexPersist:
const vuexPersist = new VuexPersist({
  key: 'drolez',
  storage: localStorage
})

export default {
  // for user related information
  state: {
    client_id: '592973852301328384',
    baseURL: 'https://discordapp.com/api/oauth2/authorize',
    revokeURL: 'https://discordapp.com/api/oauth2/token/revoke',
    redirectUri: `${window.location.origin}/auth/`,
    scopes: ['identify', 'guilds'],
    status: ''

  },
  getters: {
    getGrantURL: state => `${state.baseURL}?response_type=token&client_id=${state.client_id}&redirect_uri=${state.redirectUri}&scope=${state.scopes.join('%20')}`,
    isAuthenticated: state => !!state.status && state.status === true,
    authStatus: state => state.status
  },
  mutations: {

  },
  actions: {

  }/*,
  plugins: [vuexPersist.plugin]
*/
}
