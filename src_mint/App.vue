<template>
	<div >
		<mt-button type='primary' @click.native='handleClick' style='width:100%'>Ttang</mt-button>
	</div>
</template>


<script>
	import {Toast} from 'mint-ui'
	export default {
		methods:{
			handleClick(){
				Toast('nihao')
			}
		}
	}
</script>

<style>

</style>
