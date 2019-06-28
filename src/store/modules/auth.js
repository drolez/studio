export default {
  // for user related information
  state: {
    client_id: '592973852301328384',
    baseURL: 'https://discordapp.com/api/oauth2/authorize',
    redirectUri: `${window.location.origin}/auth`,
    scopes: ['identify'],
    status: '',
    token: {}
  },
  getters: {
    getGrantURL: state => `${state.baseURL}?response_type=token&client_id=${state.client_id}&redirect_uri=${state.redirectUri}&scope=${state.scopes.join('%20')}`,
    isAuthenticated: state => !!state.status && state.status === 'success',
    authStatus: state => state.status,
    getToken: state => state.token
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = 'loading'
    },
    AUTH_ERROR: (state) => {
      state.status = ''
    },
    AUTH_SUCCESS: (state, auth) => {
      state.status = 'success'
      state.token = auth
    },
    AUTH_LOGOUT: (state) => {
      state.status = ''
      state.token = {}
    }
  },
  actions: {
    AUTH_LOGOUT ({ state, commit, dispatch }) {
      commit('AUTH_LOGOUT')
    }
  }
}
