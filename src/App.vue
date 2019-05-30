<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<TodoHeader />
			<TodoList />
			<todo-footer />
		</div>
	</div>
</template>

<script>
	import TodoHeader from './components/TodoHeader'
	import TodoList from './components/TodoList'
	import TodoFooter from './components/TodoFooter'
	export default {
		components: {
			TodoHeader,
			TodoList,
			TodoFooter
		},
		mounted(){
			//发送命令给action异步获取保存todos数据并显示
			this.$store.dispatch('reqTodos')
		},
		watch:{//深度监视
			// todos:{
			// 	deep:true,//深度监视
			// 	handler:function(value){
			// 		//将todos最新值保存到local
			// 		window.localStorage.setItem('todos_key',JSON.stringify(value))
			// 	}
			// }
		}
	}
</script>

<style>
	/*app*/
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}

	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
