import Vue from "vue";
import App from "./App.vue";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import axios from 'axios'

Vue.use(VueMaterial)

Vue.config.productionTip = false;
Vue.prototype.$http = axios

new Vue({
  render: h => h(App)
}).$mount("#app");
