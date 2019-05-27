<template>
	<div>
		<p class='msg'>{{msg}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'hello vue'
			}
		}
	}
</script>

<style>
	.msg{
		color:red;
		font-size:30rpx
	}
</style>
