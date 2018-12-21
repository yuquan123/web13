<template>
	<div class="set-child">
		<div class="showd" v-if="false">
			<div class="box">
				<h3>提醒</h3>
				<p>2G/3G/4G网络播放会产生较多流量，确定使用</p>
				<div class="smallBox">
					<div class="left" @click="leave">取消</div>
					<div class="right" @click="enter">确定</div>
				</div>
				
			</div>
		</div>
		<div class="top">
			<router-link to="/setting">
				<i class="fa fa-chevron-left"></i>
			</router-link>
		</div>
		<div class="bofang">
			<div class="chirld">
				<span>允许流量播放和缓存</span>
				<div class="xuan" @click="isshow">
					<kaiguan :on-switch="flag" :tixing="true" @send-flag="getflag"></kaiguan>
				</div>
			</div>
			<div class="chirld">
				<span>边播边缓存</span>
				<kaiguan class="xuan"  :on-switch="!flag"></kaiguan>
			</div>
		</div>
	</div>
</template>

<script>
	import kaiguan from './kaiguan'
	export default {
		name : 'setting-child',
		data() {
			return {
				flag : true,
				showShade : false
			};
		},
		methods: {
			isshow(){
				if(!this.flag){
					this.showShade = true;
					this.flag = !this.flag
				}
			},
			leave() {
				// this.shadeHide()
				this.showShade = true;
				this.flag = !this.flag
			},
			enter() {
				this.flag = !this.flag;
				this.showShade = false
			},
			getflag(data){
				if(data == true){
					this.flag = data
					this.flag = !this.flag
				}
				console.log(data)
				console.log(this.flag)
// 				console.log(data)
// 				this.flag = data
// 				!this.flag == !data
// 				console.log(!this.flag)
			}
		},
		mounted() {
			
		},
		components: {
			kaiguan
		}
	}
</script>

<style scoped>
	.set-child{
		width: 100%;
	}
	.showd{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		font-size: 0.40875rem;
	}
	.showd .box{
		width: 6rem;
		height: 5rem;
		background: #FFFFFF;
		border-radius: 0.3125rem;
		text-align: center;
		padding-bottom: .3rem;
		padding: 0 .5rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.showd .box h3{
		height: 1rem;
		line-height: 1rem;
	}
	.showd .box p{
		height: 2rem;
		line-height: 1rem;
	}
	.showd .box .smallBox{
		height: 1.5rem;
		line-height: 1.5rem;
		margin-top: .3rem;
		border-top: 1px solid #ccc;
		overflow: hidden;
	}
	.showd .box .smallBox .left{
		width: 50%;
		border-right: 1px solid #ccc;
		float: left;
	}
	.showd .box .smallBox .right{
		width: 50%;
		float: right;
	}
	.top{
		height: 1.5rem;
		line-height: 1.5rem;
		border-bottom: 1px solid #eee;
		font-size: 0.56875rem;
		text-indent: 0.225rem;
		color: #ccc;
	}
	.bofang .chirld{
		height: 1.5rem;
		line-height: 1.5rem;
		border-bottom: 1px solid #eee;
		display: flex;
		justify-content: space-between;
		padding: 0 .5rem;
		font-size: .4rem;
		color: #666;
	}
	.bofang .xuan{
		margin-top: 0.25rem;
	}
</style>
