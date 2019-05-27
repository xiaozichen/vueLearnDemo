<template>
	<div>
		<img src='./assets/logo.png' alt='logo' 
		class='logo'/>
		<!-- 编写组件标签 -->
		<HelloWorld/>
	</div>
</template>

<script>
	// 引入组件
	import HelloWorld from './components/HelloWolrd.vue'
	export default{
		//映射组件标签
		components:{
			HelloWorld
		}
	}
</script>

<style>
	.logo{
		width:200rpx;
		height:200rpx
	}
</style>
