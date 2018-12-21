<template>
	<div class="cache">
		<div class="showd" v-show="!showdFlag">
			<div class="box">
				<div class="fix" @click="closeShowd"><i class="fa fa-times"></i></div>
				<div class="title">请确认您是家长</div>
				<div class="cheng">{{RndNum1}} <i class="fa fa-times"></i> {{RndNum2}} = <span>{{num}}</span></div>
				<div class="num">
					<span v-for="(i,index) in video.nums" :key="index" @click="dian(i)">{{i}}</span>
				</div>
			</div>
		</div>
		<div class="top_logo">
			<div class="left" @click="setting"><img src="../assets/img/setting_unpressed.png" alt=""></div>
			<div class="center"><img src="../assets/img/logoToo.png" alt=""></div>
			<div class="right" @click="clear()"><span v-if="clearFlag">清理缓存</span><span v-if="!clearFlag">&nbsp;&nbsp;取消</span></i></div>
		</div>
		<div class="swiper-container baby_nav" id="swiper1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(i,index) in video.top" :key="index">{{i.title}}</div>
			</div>	
		</div>
		<div class="swiper-container banner" id="swiper2">
			<div class="swiper-wrapper">
				
				<div class="swiper-slide jingxuan">
					
				</div>
				<div class="swiper-slide jingxuan">
					
				</div>
				<div class="swiper-slide jingxuan">
				
				</div>
			</div>
			<div class="swiper-scrollbar"></div>	
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';	
	import Swiper from 'swiper';
	import { mapState } from 'vuex';
	export default {
		name: 'cacheFile',
	
		data() {
			return {
				clearFlag : true,
				showdFlag : true,
				RndNum1 : Math.floor(Math.random()*9)+1,
				RndNum2 : Math.floor(Math.random()*9)+1,
				num:null
			};
		},
		methods: {
			clear() {
				this.clearFlag = !this.clearFlag;
			},
			setting() {
				this.showdFlag = !this.showdFlag;
				this.num=null
				this.RndNum1=Math.floor(Math.random()*9)+1;
				this.RndNum2=Math.floor(Math.random()*9)+1;
			},
			closeShowd() {
				this.showdFlag = !this.showdFlag;
			},
			dian(i) {
				var a=this.RndNum1*this.RndNum2;
				if(a<10){
					if(a==i){
						this.num=i;
						this.$router.push('/setting');
					}else{
						this.RndNum1=Math.floor(Math.random()*9)+1;
						this.RndNum2=Math.floor(Math.random()*9)+1;
					}
				}else{
					if(Math.floor(a/10)==i&&this.num==null){
						this.num=i;
					}else if(a%10==i&&this.num!=null){
						this.num=this.num*10+i;
						this.$router.push('/setting');
						
					}else{
						this.RndNum1=Math.floor(Math.random()*9)+1;
						this.RndNum2=Math.floor(Math.random()*9)+1;
						this.num=null;
					}
				}
			}
		},
		computed : {
			...mapState(['video'])
		},
		mounted() {
			var mySwiper1 = new Swiper('#swiper1', {
				slidesPerView : 3,
				watchSlidesVisibility: true,
			});
			var mySwiper2 = new Swiper('#swiper2', {
				autoHeight : true,
				thumbs: {
					swiper: mySwiper1,
				},
				scrollbar: {
					el: '.swiper-scrollbar'
				},
			});
			mySwiper2.scrollbar.$dragEl.css('background','green');
		}
	}
</script>

<style scoped>
.cache{
	height: 100%;
	padding-bottom: 1.5625rem;
}	
.showd{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
}
.showd .box{
	width: 7rem;
	height: 6rem;
	background: mediumspringgreen;
	border-radius: 0.4125rem;
	color: #FFFFFF;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	text-align: center;
	line-height: 1rem;
}
.showd .box .fix{
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	background: rgba(0,0,0,0.6);
	font-size: 0.5rem;
	line-height: 0.8rem;
	position: absolute;
	top: 0.2rem;
	right: 0.2rem;
}
.showd .box .title{
	height: 1rem;
	font-size: 0.50625rem;
	padding-top: .3rem;
}
.showd .box .cheng{
	font-size: 0.7625rem;
	height: 1rem;
	margin: .35rem 0;
}
.showd .box .cheng span{
	display: inline-block;
	width: 1.5rem;
	border-bottom: 1px solid #FFFFFF;
}
.showd .box .num{
	height: 3rem;
}
.showd .box .num span{
	display: inline-block;
	width: 1rem;
	height: 1rem;
	margin: 0.2rem;
	border-radius: 50%;
	background: #FFFFFF;
	color: mediumspringgreen;
	font-size: 0.56875rem;
}
.top_logo{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	height: 1.35rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.top_logo .left{
	width: 0.5rem;
	height: 0.5rem;
	margin: 0.425rem 0 0 0.5rem;
}
.top_logo .center{
	height: 1.35rem;
	padding: 0.4rem 0.5rem;
	width: 3.5rem;
}
.top_logo .right{
	width: 1.5rem;
	margin-right: 0.2rem;
	font-size: 0.26875rem;
	line-height: 1.35rem;
	color: limegreen;
}
.baby_nav{
	width: 100%;
	position: fixed;
	top: 1.35rem;
	z-index: 99;
	height: 1rem;
	line-height: 1rem;
	font-size: 0.46875rem;
	text-align: center;
}
.baby_nav .swiper-slide-thumb-active{
	color: green;
}
.banner{
	padding-top: 2.515rem;
}
.banner .swiper-slide{
	padding: 0 0.3125rem;
}
.banner .swiper-scrollbar{
	background: #ddd;
	position: fixed;
	top: 2.3375rem;
	
}
</style>
