<template>
	<div>
		<header class="site-header jumbotron">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h1>请发表对Vue的评论</h1>
					</div>
				</div>
			</div>
		</header>
		<div class="container">
			<Add :addComment='addComment'/>
			<List :comments='comments' :deleteComment='deleteComment' />
		</div>
	</div>
</template>

<script>
	import Add from './components/Add.vue'
	import List from './components/List.vue'
	export default {
		data(){
			return {
				comments:[//数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
					{
						name:'Bob',
						content:'Vue还不错'
					},
					{
						name:'CAt',
						content:'Vue so easy'
					},
					{
						name:'Bob',
						content:'Vue so so'
					}
				]
			}
		},
		components: {
			Add,
			List
		},
		methods:{
			//添加评论
			addComment(comment){
				this.comments.unshift(comment)
			},
			//删除指定下标的评论
			deleteComment(index){
				this.comments.splice(index,1)
			}
		}
	}
</script>

<style>
</style>
