<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<!-- <TodoHeader  @addTodo='addTodo'/> -->
			<TodoHeader ref='header'/> 
			<TodoList :todos='todos' />
			<!-- <todo-footer :todos='todos' :selectAllTodos='selectAllTodos' :deleteCompleteTodos='deleteCompleteTodos' /> -->
			<todo-footer>
				<input type="checkbox" v-model="isAllChecked"  slot='checkAll'/>
				<span slot='count'>已完成{{completeSize}}</span> / 全部{{todos.length}}</span>
				<button class="btn btn-danger" v-show='completeSize' @click='deleteCompleteTodos' slot='delete'>清除已完成任务</button>
			</todo-footer>
		</div>
		
	</div>
</template>



<!-- 绑定事件监听，触发事件
* 
* 订阅消息，发布消息 -->

<script>
	import TodoHeader from './components/TodoHeader'
	import TodoList from './components/TodoList'
	import TodoFooter from './components/TodoFooter'
	import PubSub from 'pubsub-js'
	import storageUtil from './util/StorageUtil'
	export default {
		components: {
			TodoHeader,
			TodoList,
			TodoFooter
		},
		data() {
			return {
				//从Localstorage读todos
				todos:storageUtil.readTodos()
			}
		},
		computed: {
			completeSize() {
				return this.todos.reduce(
					(preTotal, todo) => preTotal + (todo.complete ? 1 : 0),
					0)
			},
			isAllChecked: {
				get() {
					return this.completeSize == this.todos.length&&this.todos.length>0
				},
				set(value) { //value是当前checkbox最新值
					this.selectAllTodos(value)
				}
			}
		},
		mounted(){
			//执行异步代码
			//给TodoHeader绑定addTodo事件监听
			this.$refs.header.$on('addTodo',this.addTodo)
			
			//订阅消息
			let that=this;
			PubSub.subscribe('deleteTodo',(msg,index)=>{
				this.deleteTodo(index)
			})
			
		},
		methods: {
			addTodo(todo) {
				this.todos.unshift(todo)
			},
			deleteTodo(index) {
				this.todos.splice(index, 1)
			},
			deleteCompleteTodos() {
				this.todos = this.todos.filter(todo => !todo.complete)
			},
			selectAllTodos(check) {
				this.todos.forEach(todo => todo.complete = check)
			}
		},
		watch:{//深度监视
			todos:{
				deep:true,//深度监视
				// handler:function(value){
				// 	//将todos最新值保存到local
				// 	storageUtil.saveTodos(value)
				// },
				handler:storageUtil.saveTodos
			}
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
