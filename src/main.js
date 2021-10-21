import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import wysiwyg from "vue-wysiwyg";

import "vue-wysiwyg/dist/vueWysiwyg.css";

Vue.config.productionTip = false

const userinfo = localStorage.getItem('userAuth');

Vue.use(wysiwyg, {});

new Vue({
	data() {
		return {
			UserAuth: userinfo ? JSON.parse(userinfo) : {},
		}
	},
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
