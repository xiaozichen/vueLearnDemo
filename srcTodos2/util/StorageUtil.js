// localStorage存储数据的工具模块
//函数
//对象
//需要向外暴露1个功能还是多个功能

const TODOS_KEY = 'todos_key'
export default{
	saveTodos(value){
		window.localStorage.setItem(TODOS_KEY,JSON.stringify(value))
	},
	readTodos(){
		return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
	}
}