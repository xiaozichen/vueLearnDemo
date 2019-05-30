import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({//配置对象的属性名都是一些确定的属性名，不能随便修改
	el:'#app',
	components:{App},
	template:'<App/>',
	store//所有组件对象都多一个属性$store
})