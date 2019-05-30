<template>
	<div>
		<p>ID:{{$route.params.id}}</p>
		<ul>
			<li>id:{{messageDetail.id}}</li>
			<li>title:{{messageDetail.title}}</li>
			<li>content:{{messageDetail.content}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				messageDetail: {}
			}
		},
		mounted() {
			setTimeout(() => {
				const allMeaage = [{
						title: 'message001',
						id: 1,
						content: '倒萨倒萨看见的撒'
					},
					{
						title: 'message002',
						id: 2,
						content: '大苏打大苏打撒旦撒旦'
					},
					{
						title: 'message004',
						id: 4,
						content: '大苏打大苏打撒旦大苏打撒旦撒旦'
					}
				]
				this.allMeaage = allMeaage;
				const id = this.$route.params.id * 1
				this.messageDetail = this.allMeaage.find(detail => detail.id === id)
			})

		},
		watch: {
			$route: function(value) { //路由路径发生了变化
				const id = value.params.id * 1
				this.messageDetail = this.allMeaage.find(detail => detail.id === id)
			}
		}
	}
</script>

<style>

	export default{
		
	}
</style>
