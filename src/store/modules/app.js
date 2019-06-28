import Vue from 'vue'

export default {
  // for user related information
  state: {
    app: 'drolez',
    user: {},
    listRoles: {},
    socket: {
      isConnected: false,
      isAuthorized: false,
      message: '',
      reconnectError: false
    }
  },
  getters: {
  },
  mutations: {
    auth_done (state, event) {
      console.log('AUTHED')
      state.socket.isAuthorized = true
      state.user = event.Data
    },
    rolesList (state, event) {
      state.listRoles = event.Data
    },
    SOCKET_ONOPEN (state, event) {
      Vue.prototype.$socket = event.currentTarget
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event) {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message) {
      state.socket.message = message
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT (state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR (state) {
      state.socket.reconnectError = true
    }
  },
  actions: {
    sendMessage ({ commit, state }, message) {
      console.log(message)
      Vue.prototype.$socket.send(message)
    }
  }
}
