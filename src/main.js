import Vue from 'vue'
import App from './App.vue'
import './base.css'
import store from './store'

// new Vue({
// 	el:'#app',
// 	components:{App},
// 	template:'<App/>',
// 	store
// })
new Vue({
	el:'#app',
	render:h=>h(App),
	store
})