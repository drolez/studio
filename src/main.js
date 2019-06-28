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
  store: store
})

// Use axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
