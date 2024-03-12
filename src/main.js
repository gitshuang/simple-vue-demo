import Vue from 'vue'
import App from './App.vue'
import { Message } from 'personal-component'
Vue.component(Message.name, Message);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
