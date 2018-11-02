import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'

Vue.use(ElementUI)
// Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
