<template>
	<div>
		<p>click{{count}}times count is{{evenOrOdd}}</p>
		<button @click='increment'>+</button>
		<button @click='decrement'>-</button>
		<button @click='incrementIfOdd'>increment if odd</button>
		<button @click='incrementAsync'>increment async</button>
	</div>
</template>


<script>
	
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		computed:{
			...mapState(['count']),//mapState()返回值
			...mapGetters(['evenOrOdd'])//mapGetters()返回值对象
		},
		methods:{
			...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
		}
	}
</script>

<style>

</style>
