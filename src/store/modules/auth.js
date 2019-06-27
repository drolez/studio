export default {
  // for user related information
  state: {
    client_id: '592973852301328384',
    baseURL: 'https://discordapp.com/api/oauth2/authorize',
    redirectUri: `${window.location.origin}/auth`,
    scopes: ['identify'],
    status: '',
    token: undefined
  },
  getters: {
    getGrantURL: state => `${state.baseURL}?response_type=token&client_id=${state.client_id}&redirect_uri=${state.redirectUri}&scope=${state.scopes.join('%20')}`,
    isAuthenticated: state => !!state.status && state.status === 'success',
    authStatus: state => state.status
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = 'loading'
    },
    AUTH_ERROR: (state) => {
      state.status = ''
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    AUTH_LOGOUT: (state) => {
      state.status = ''
      state.token = undefined
    }
  },
  actions: {
    AUTH_LOGOUT ({ state, commit, dispatch }) {
      commit('AUTH_LOGOUT')
    }
  },
}
