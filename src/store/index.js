import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Dynamically load modules from module files
let modulesList = {}
// List modules
const moduleImport = require.context('./modules', false, /\.js$/)
moduleImport.keys().forEach((file, index) => { // go trough all files
  let filename = file.slice(2) // remove the first 2 characters (./)
  let name = file.match(/\w+/)[0] // strip the file extension
  // Import module
  let module = require(`./modules/${filename}`).default
  modulesList[name] = module
})

export default new Vuex.Store({
  modules: modulesList
})
