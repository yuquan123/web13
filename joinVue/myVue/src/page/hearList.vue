<template>
	<div class="hearList">
		<div class="bigBox">
			<div class="topBox">
				<div class="background">
					<img :src="title[num-1].pic" alt="">
				</div>
				<div class="top">
					<router-link to="babyHear">
						<i class="fa fa-chevron-left"></i>
						<span>{{title[num-1].headline}}</span>
					</router-link>
				</div>
				<div class="left">
					<img :src="title[num-1].pic" alt="">
				</div>
				<div class="right">
					<p>{{title[num-1].names}}</p>
					<p>{{title[num-1].introduce}}</p>
				</div>
			</div>
			<div class="play">
					<img src="../assets/img/btn_play_all.png" alt="">
			</div>
		</div>	
		<div class="wrapper">
			<div class="wrap">
				<div>
					<div class="list">
						<div class="item" v-for="(i,index) in hearListItem[num-1]" :key="index">
							<div class="itemLeft">
								<div class="topUp">{{i.name}}</div>
								<div class="bottom"><span>
								<img src="../assets/img/icon_duration.png" alt=""></span><span class="time">{{i.hour}} ：{{i.minute}}</span></div>
							</div>
							<div class="itemRight">
								<img src="../assets/img/phone_downloaded.png" alt="">
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
		name : 'hearList',
		data() {
			return {
				num : this.$route.query.num,
				title : [{
					pic : require('../assets/img/guoxue.jpg'),
					headline : '走进大自然',
					names : '走进大自然',
					introduce : '美丽的大自然充满了故事'
				},{
					pic : require('../assets/img/jingxuan2.jpg'),
					headline : '萌鸡小队',
					names : '萌鸡小队的故事',
					introduce : '聪明的萌鸡们总是对外面的世界充满了好奇'
				},{
					pic : require('../assets/img/jingxuan_hear1-1.jpg'),
					headline : '童话故事',
					names : '好听的童话故事',
					introduce : '神奇而美妙的童话故事让小朋友在满足好奇的时候增长知识'
				}],
			};
		},
		computed: {
			...mapState(['hearListItem'])
		},
		mounted (){
			const scroll = new BScroll('.wrap',{
				click : true
			})
		}
	}
</script>

<style scoped>
	.hearList{
		height: 100%;
	}
	.bigBox{
		width: 100%;
		height: 6.3rem;
		background: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.topBox{
		width: 100%;
		height: 5rem;
		background: rgb(0,0,0,0.5);
		color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		padding-right: .5rem;
	}
	.topBox .background{
		width: 100%;
		height: 100%;
		filter: blur(8px);
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
	}
	.topBox .background img{
		transform: scale(1.5);
	}
	.top{
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.5rem;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.top i {
		display: block;
		position: absolute;
		top: 0.3rem;
		left: 0.3rem;
		color: #FFFFFF;
	}
	.top span{
		color: #FFFFFF;
	}
	.left{
		width: 4rem;
		height: 4rem;
		position: absolute;
		top: 2rem;
		left: 0.5rem;
	}
	.right{
		width: 50%;
		height: 3rem;
		margin-top: 2rem;
		float: right;
		color: #FFFFFF;
		font-size: 0.4rem;
		position: relative;
		z-index: 999;
	}
	.right p:first-child{
		margin: .2rem 0 .4rem 0;
	}
	.play{
		width: 3rem;
		height: 1rem;
		position: fixed;
		top: 5.5rem;
		left: 5.5rem;
	}
	.wrapper{
		height: 100%;
		padding-top: 6.5rem;
	}
	.wrap{
		height: 100%;
		overflow: hidden;
	}
	.list{
		width: 100%;
		height: 100%;
		padding-left: .5rem;
		
		overflow: hidden;
	}
	.list .item{
		height: 1.6rem;
		border-bottom: 1px solid #CCCCCC;
		overflow: hidden;
		margin-top: .3rem;
	}
	.list .item .itemLeft{
		float: left;
	}
	.list .item .itemLeft .topUp{
		font-size: .4rem;
		color: #666;
		margin-bottom: .2rem;
	}
	.list .item .itemLeft img{
		width: .5rem;
		height: .5rem;
	}
	.list .item .itemLeft .time{
		font-size: .3rem;
		margin-left: .3rem;
		vertical-align: 0.0725rem;
		color: #999;
	}
	.list .item .itemRight{
		width: .5rem;
		height: .5rem;
		float: right;
		margin: .2rem .5rem 0 0;
	}
</style>
