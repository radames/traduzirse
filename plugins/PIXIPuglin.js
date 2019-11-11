import Vue from 'vue'
import * as PIXI from 'pixi.js'

const PIXIPlugin = {
  install(Vue, options) {
    Vue.prototype.$PIXI = PIXI
  }
}
Vue.use(PIXIPlugin)

export default PIXIPlugin
