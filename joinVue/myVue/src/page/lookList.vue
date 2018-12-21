<template>
	<div class="lookList">
		<div class="top">
			<router-link to="babyLook">
				<i class="fa fa-chevron-left"></i>
				<span>{{title[num-1]}}</span>
			</router-link>
		</div>
		<div class="wrapper">
			<div class="wrap">
				<div class="loding">
					<div class="identical">
						<div class="list">
							<div class="item" v-for="(i,index) in lookListItem[num-1]" :key="index">
								<div class="pic"><img :src="i.pic" alt=""></div>
								<div class="right">
									<div class="title">{{i.name}}</div>
									<div class="num">第{{i.num}}集</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import { mapState } from 'vuex';
	export default {
		name : 'lookList',
		data() {
			return {
				num : this.$route.query.num,
				title : ['英文发音','萌鸡小队','大家一起做游戏','汪汪队立大功'] 
			};
		},
		computed: {
			...mapState(['lookListItem'])
		},
		mounted (){
			const scroll = new BScroll('.wrap',{
				click : true
			})
		}
	}
</script>

<style scoped>
	.lookList{
		height: 100%;
	}
	.wrapper{
	  height:100%;
		padding-left: .3rem;
	  padding-top: 1.2rem;
	}
	.wrap{
		height: 100%;
		overflow: hidden;
	}
	.top{
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		background: #FFFFFF;
		font-size: 0.5rem;
		text-align: center;
		border-bottom: 0.5px solid #bbb;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.top i {
		display: block;
		position: absolute;
		top: 0.3rem;
		left: 0.3rem;
	}
	.identical .list{
		width: 100%;
		border-top: 1px solid #ccc;
	}
	.identical .list .item{
		height: 3.125rem;
		padding: 0.3rem 0;
		border-bottom: 1px solid#CCCCCC;
		display: flex;
		flex-direction: row;	
	}	
	.identical .list .item .pic{
		width: 40%;
		height: 100%;	
	}
	.identical .list .item .right{
		display: flex;
		flex-direction: column;
		margin-top: 0.5rem;
		margin-left: 0.6rem;
	}	
	.identical .list .item .title{
		font-size: 0.5rem;
		color: #111;
	}
	.identical .list .item .num{
		color: #666;
		font-size: 0.4375rem;
	}
</style>
