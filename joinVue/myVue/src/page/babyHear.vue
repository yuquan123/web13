<template>
	<div class="hear">
		<div class="top_logo">
			<div class="left"><img src="../assets/img/ic_disc.png" alt=""><span>宝宝档案</span></div>
			<img src="../assets/img/logo_nav.png" alt="">
			<div class="right"><i class="fa fa-neuter"></i></div>
		</div>
		<div class="swiper-container baby_nav" id="swiper1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(i,index) in jingxuanLook.top" :key="index">{{i.title}}</div>
			</div>	
		</div>
		<div class="mainScroll">
			<div class="swiper-container banner" id="swiper2">
				<div class="swiper-wrapper">
					<div class="swiper-slide jingxuan">
							<div class="wrapper1" ref="wrapper1"> 
								<div class="wrap">
									<div class="jingxuan_top" v-for="(i,index) in jingxuanLook.navTop" :key="index">
										<router-link to="hearList?num=1">
											<div class="left"><img :src="i.pic1" alt=""></div>
										</router-link>
										<div class="right">
											<router-link to="hearList?num=2">
												<div class="top"><img :src="i.pic2" alt=""></div>
											</router-link>	
											<router-link to="hearList?num=3">
												<div class="bottom"><img :src="i.pic3" alt=""></div>
											</router-link>	
										</div>
									</div>
									<div class="jingxuan_zhuanji">
										<div class="title">
											<p>精选专辑</p>
											<span>宝宝最爱 热门儿歌 精彩故事</span>
										</div>
										<div class="bigbox">
											<div class="box" v-for="(i,index) in jingxuanLook.zhuanji" :key="index">
												<router-link to="hearList?num=3">
													<div class="pic">
														<img :src="i.pic" alt="">
														<div class="piece">
															<img src="../assets/img/music.png" alt="">
															<span>{{i.num}}</span>
														</div>
													</div>
													<div class="name">{{i.name}}</div>
												</router-link>
											</div>
										</div>	
									</div>
									<div class="other" v-for="(i,index) in jingxuanLook.list">
										<div class="top">
											<div class="left">
												<span>{{i.title}}</span>
											</div>
											<div class="right" @click="nums(index)">
												<span>更多</span>
												<i class="fa fa-angle-right"></i>
											</div>
										</div>
										<div class="bigbox" style="border-bottom: 1px solid #CCCCCC;">
											<div class="box" v-for="(j,index) in i.item" :key="index">
												<div class="pic">
													<img :src="j.pic" alt="">
													<div class="piece">
														<img src="../assets/img/music.png" alt="">
														<span>{{j.num}}</span>
													</div>
												</div>
												<div class="name">{{j.name}}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-slide" v-for="(i,index) in babylistArrHear" :key="index">
							<div class="wrapper" ref="wrapper"> 
								<div class="wrap">
									<div class="equally" v-for="(i,index) in i" :key="index">
										<div class="left">
											<div class="pic">
												<img :src="i.pic" alt="">
											</div>
										</div>
										<div class="right">
											<div class="top">{{i.top}}</div>
											<div class="intro">{{i.main}}</div>
											<div class="num">
												<img src="../assets/img/musictoo.png" alt="">
												<span>{{i.num}}首</span>
											</div>
										</div>
									</div>
								</div>
							</div>			
						</div>
					</div>
				<div class="swiper-scrollbar"></div>	
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';	
	import Swiper from 'swiper';
	import { mapState } from 'vuex';
	export default {
		name: 'babyHear',
		data() {
			return {
				mySwiper2:null
			};
		},
		methods : {
			nums(i) {
				this.mySwiper2.slideTo(i+1,1000,false)
			}
		},
		computed : {
			...mapState(['jingxuanLook','babylistArrHear'])
		},
		mounted() {
			var mySwiper1 = new Swiper('#swiper1', {
				slidesPerView : 6,
				watchSlidesVisibility: true,
				allowSlideNext : false,
				allowSlidePrev : false,
			});
			this.mySwiper2 = new Swiper('#swiper2', {
				autoHeight : true,
				thumbs: {
					swiper: mySwiper1,
				},
				scrollbar: {
					el: '.swiper-scrollbar'
				},
			});
			this.mySwiper2.scrollbar.$dragEl.css('background','green');
			this.mySwiper2.slideTo(0, 1000, false);
			
			//首页弹动效果
			this.$refs.wrapper.forEach((v,i) => {
				const bscroll = new BScroll(v,{
					click : true
				})
				window.addEventListener('load',function(){
					bscroll.refresh();
				})
			});
			//其他页面弹动效果
			const bscroll1 = new BScroll('.wrapper1',{
				click : true
			});
			window.addEventListener('load',function(){
				bscroll1.refresh();
			})
		},
		updated() {
       window.scroll(0, 0);
    }
	}
</script>

<style scoped>
.wrapper1{
	height: 100%;
	overflow: hidden;
}
.mainScroll{
	height:100%;
	padding-top:2.515rem;
}

.hear{
	color: #666;
	height: 100%;
	padding-bottom: 1.5625rem;
}
a {
  color: #42b983;
}
.top_logo{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	height: 1.35rem;
}
.top_logo .left img{
	width: 1.25rem;
	height: 1.25rem;
	position: absolute;
	top: -0.15625rem;
	left: 0.5125rem;
}
.top_logo .right{
	font-size: 0.525rem;
	font-weight: bold;
	position: absolute;
	top: 0.4125rem;
	right: 0.3125rem;
}
.top_logo .right i{
	transform: rotate(-38deg);
}
.top_logo .left span{
	display: block;
	width: 1.7rem;
	height: 0.5rem;
	line-height: 0.5rem;
	text-align: center;
	background: sandybrown;
	border-radius: 5px;
	font-size: 0.3rem;
	position: absolute;
	top: 0.625rem;
	left: 0.225rem;
}
.baby_nav{
	width: 100%;
	position: fixed;
	top: 1.25rem;
	z-index: 999;
	height:1.1375rem;
	line-height: 1.1375rem;
	text-align: center;
	font-size: 0.4rem;
	font-weight: bold;
	color: #666;
	background: #FFFFFF;
}	
.baby_nav .swiper-slide-thumb-active{
	color: green;
}
.banner{
	width: 100%;
	height: 100%;
}
.banner .swiper-slide{
	height:100%;
	padding: 0 0.3125rem;
}
.banner .swiper-scrollbar{
	background: #ddd;
	position: fixed;
	top: 2.3375rem;
}
.banner .jingxuan_top{
	height: 3.375rem;
	background: #ddd;
	overflow: hidden;
}
.banner .jingxuan_top .left{
	width: 60%;
	height: 100%;
	float: left;
}
.banner .jingxuan_top .right{
	width: 38%;
	height: 100%;
	float: right;
}
.banner .jingxuan_top .right .top{
	height: 1.6rem;
}
.banner .jingxuan_top .right .bottom{
	height: 1.6rem;
	margin-top: 0.175rem;
}
 
 /* 精选专辑开始*/
.jingxuan_zhuanji .title{
	text-align: center;
	padding: 0.3125rem 0;
}
.jingxuan_zhuanji .title p{
	font-size: 0.5rem;
	color: #222;
}
.jingxuan_zhuanji .title span{
	display: block;
	font-size: 0.39875rem;
	color: #999;
	padding-top: 0.1525rem;
}

/* 精选专辑内公用部分开始 */
.bigbox{
	margin: 0 -0.3125rem;
	border-bottom: 0.3125rem solid #f1f1f1;
	overflow: hidden;
}
.bigbox .box{
	width: 33.333333%;
	height: 3.5rem;
	padding: .5rem 00.1525rem;
	float: left;
}
.bigbox .box .pic{
	height: 80%;
	position: relative;
}
.bigbox .box .pic .piece{
	height: 0.5rem;
	background: rgba(0,0,0,0.5);
	position: absolute;
	bottom: 0;
	left: 0;
	overflow: hidden;
	padding: 0.03rem 0.08rem;
}
.bigbox .box .pic .piece img{
	width: 0.4rem;
	height: 0.4rem;
}
.bigbox .box .pic .piece span{
	display: inline-block;
	float: right;
	margin-left: 0.2rem;
	color: #fff;
	line-height: 0.5rem;
}
.bigbox .box .name{
	height: 20%;
	line-height: 0.7rem;
	color: #666;
}
/* 精选专辑内公用部分结束 */
/* 精选专辑结束*/

/* 其他相同结构开始 */
.other{
	border-bottom: 1px solid #F1F1F1;
	margin: 0.5125rem 0;
}
.other .top{
	font-size: 0.46875rem;
	height: 1rem;
	line-height: 1rem;
	overflow: hidden;
}
.other .top .left{
	float: left;
	color: #222222;
}
.other .top .right{
	float: right;
	color: #42B983;
}
/* 其他相同结构结束 */
/* 精选后相同大页面开始 */
.wrapper{
	height: 100%;
	overflow:hidden;
}
.equally{
	height: 2.5rem;
	border-bottom: 1px solid #ccc;
	overflow: hidden;
}	
.equally .left{
	width: 30%;
	height: 100%;
	padding: 0.4rem 0.3rem;
	float: left;
}
.equally .left .pic{
	width: 100%;
	height: 100%;
}
.equally .right{
	width: 70%;
	height: 100%;
	padding: 0.4rem 0.3rem;
	float: right;
	font-size: 0.3375rem;
}
.equally .right .top,.equally .right .intro,.equally .right .num{
	height: 33.33333%;
}
.equally .right .top{
	font-size: 0.4375rem;
	color: #111;
}
.equally .right .intro{
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #555;
}
.equally .right .num{
	color: #ccc;
	line-height: 0.5rem;
}
.equally .right .num img{
	display: inline-block;
	width: 0.5rem;
	height: 0.5rem;
	vertical-align:bottom;
	margin-right: 0.1rem;
}
/* 精选后相同大页面结束 */
</style>
