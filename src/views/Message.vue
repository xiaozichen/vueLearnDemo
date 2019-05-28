<template>
	<ul>
		<li v-for='(message) in messages' :key='message.id'>
			<a href='??'>{{message.title}}</a>{{message.title}}
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				messages: []
			}
		},
		mounted() {
			//模拟ajax请求从后台获取数据
			setTimeout(() => {
				const messages = [{
						title: 'message001',
						id: 1
					},
					{
						title: 'message002',
						id: 2
					},
					{
						title: 'message004',
						id: 4
					}
				]
				this.messages = messages
			}, 1000)
		}
	}
</script>

<style>
</style>
