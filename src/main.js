import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, 'wss://reye.me:4555', {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
  store: store,
  format: 'json',
  passToStoreHandler: async function (eventName, event) {
    if (!this.store.getters.isAuthenticated) { return }
    if (!eventName.startsWith('SOCKET_')) { return }
    let method = 'commit'
    let target = eventName.toUpperCase()
    let msg = event
    console.log(target)
    console.log(msg)
    if (target === 'SOCKET_ONOPEN') {
      // login after getting connected
      await store.dispatch('authorize', store.getters.getToken)
    }
    if (this.format === 'json' && event.data) {
      msg = JSON.parse(event.data)
      if (msg.mutation) {
        target = [msg.namespace || '', msg.mutation].filter((e) => !!e).join('/')
      } else if (msg.action) {
        method = 'dispatch'
        target = [msg.namespace || '', msg.action].filter((e) => !!e).join('/')
      }
    }
    this.store[method](target, msg)
  }
})

// Use axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
