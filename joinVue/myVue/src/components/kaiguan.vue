<template>
	<div>
		<div class="box" :class="{cur : !flag}">
			<div class="yuan" @click="toggle" :class="{leave : !flag}"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'kaiguan',
		data() {
			return {
				flag : true
			};
		},
		props : ['onSwitch','tixing'],
		methods: {
			toggle (){
				this.flag = !this.flag
				this.$emit('send-flag',this.flag)
			}
		},
// 		updated(){
// 			console.log(this.onSwitch)
// 			if(this.onSwitch){
// 				this.flag = true;
// 			}else{
// 				this.flag = false;
// 			}
// 		},
		mounted() {
			if(this.onSwitch){
				this.flag = true
			}else{
				this.flag = false;
			}
		}
	}
</script>

<style scoped>
.box{
	width: 2.5rem;
	height: 1rem;
	border-radius: 0.625rem;
	background: #ccc;
	position: relative;
}
.cur{
	background: #008000;
}
.box .yuan{
	width: 0.9rem;
	height: 0.9rem;
	border-radius: 50%;
	background: #FFFFFF;
	position: absolute;
	top: 0.038rem;
	left: 0.1rem;
	transition: all .3s linear;
}
.box .leave{
	left : 1.48rem;
}
</style>
