//包含多个接收组件通知触发mutation间接更新状态的方法对象
import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,CLEAR_ALL_COMPLETE,RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/StorageUtil'
export default{
	addTodo({commit},todo){
		//提交对mutation的请求
		commit(ADD_TODO,{todo})
	},
	deleteTodo({commit},index){
		//提交对mutation的请求
		commit(DELETE_TODO,{index})
	},
	selectAllTodos({commit},check){
		//提交对mutation的请求
		commit(SELECT_ALL_TODOS,{check})
	},
	//删除全部选中的
	clearAllComplete({commit}){
		commit(CLEAR_ALL_COMPLETE)
	},
	//异步获取todos并更新状态
	reqTodos({commit}){
		//模拟
		setTimeout(()=>{
			//读取数据
			const todos = storageUtil.readTodos()
			//更新状态
			commit(RECEIVE_TODOS,{todos})
		},1000)
	}

}