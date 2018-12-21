  <template>
		<div class="hello">
			<div class="top_logo">
				<div class="left"><img src="../assets/img/ic_disc.png" alt=""><span>宝宝档案</span></div>
				<img src="../assets/img/logo_nav.png" alt="">
				<div class="right"><i class="fa fa-neuter"></i></div>
			</div>
			<!-- <a href="https://v.qq.com/x/page/f0615586m9j.html">ffefefe</a> -->
			<div class="swiper-container baby_nav" id="swiper1">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(i,index) in jingxuan.top" :key="index">{{i.title}}</div>
				</div>
			</div>
			<div class="banner swiper-container banner" id="swiper2">
				<div class="swiper-wrapper">
					<div class="swiper-slide jingxuan">
						<div class="wrapper1" ref="wrapper1">
							<div class="wrap">
								<div class="jingxuan_top" v-for="(i,index) in jingxuan.navTop" :key="index">
									<router-link to="/lookList?num=1">
										<div class="left"><img :src="i.pic1" alt=""></div>
									</router-link>
									<div class="right">
										<router-link to="/lookList?num=2">
											<div class="top"><img :src="i.pic2" alt=""></div>
										</router-link>	
										<router-link to="/lookList?num=3">
											<div class="bottom"><img :src="i.pic3" alt=""></div>
										</router-link>	
									</div>
								</div>	
								<div class="jingxuan_center">
									<ul>
										<router-link to="/lookList?num=4">
											<li v-for="(i,index) in jingxuan.centerList" :key="index">
												<img :src="i.pic" alt="">
												<p>{{i.title}}</p>
											</li>
										</router-link>	
									</ul>
								</div>
								<div class="jingxuan_main">
									<div class="list">
										<div class="item" v-for="(i,index) in jingxuan.main" :key="index">
											<div class="pic"><img :src="i.pic" alt=""></div>
											<div class="title">{{i.name}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide" v-for="(i,index) in looklistArrLook" :key="index">
						<div class="wrapper" ref="wrapper">
							<div class="wrap">
								<div class="identical">
									<div class="list">
										<div class="item" v-for="(i,index) in i" :key="index">
											<div class="pic"><img :src="i.pic" alt=""></div>
											<div class="right">
												<div class="title">{{i.name}}</div>
												<div class="num">共{{i.num}}首</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
					<div class="swiper-slide partner">
						<div class="wrapper2" ref="wrapper2">
							<div class="wrap">
								<div class="box">
									<div class="list" v-for="(i,index) in partner.main" :key="index">
										<div class="item"><img :src="i.pic" alt=""></div>
										<p>{{i.title}}</p>
									</div>
								</div>
							</div>
						</div>
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
  name: 'babyLook',
  data () {
    return {
			mySwiper2:null
    }
  },
	methods : {
	},
	computed: {
		...mapState(['jingxuan','partner','looklistArrLook'])
	},
	mounted() {
	/* 	this.$ajax({
			url : '/VueHandler/AdminLoginAndRegHandler?action=login',
			method : 'post',
			data : {
				username : '123456',
				password : '123456'
			}
		}).then((res) => {
			console.log(res)
		}) */
		
		
		/* this.$ajax({
			url : '/VueHandler/AdminLoginAndRegHandler?action=verification'
		}).then((res) => {
			console.log(res)
		}) */
		
		/* this.$ajax({
			url : '/VueHandler/AdminLoginAndRegHandler?action=add',
			method : 'post',
			data : {
				username : 'asdasdffa',
				password : '123123'
			}
		}).then((res) => {
			console.log(res)
		}) */
		
		var mySwiper1 = new Swiper('#swiper1', {
			slidesPerView : 8,
			watchSlidesVisibility: true,
			allowSlideNext : false,
			allowSlidePrev : false,
		});
		this.mySwiper2 = new Swiper('#swiper2', {
			thumbs: {
				swiper: mySwiper1,
			},
			scrollbar: {
				el: '.swiper-scrollbar'
			},
		});
		this.mySwiper2.scrollbar.$dragEl.css('background','green');
		this.mySwiper2.slideTo(0, 1000, false);
		this.$refs.wrapper.forEach((v,i) => {
			const bscroll = new BScroll(v,{
				click : true
			})
			window.addEventListener('load',function(){
				bscroll.refresh();
			})
		});	
		const bscroll1 = new BScroll('.wrapper1',{
			click : true
		});
		const bscroll2 = new BScroll('.wrapper2',{
			click : true
		});
		window.addEventListener('load',function(){
			bscroll1.refresh();
		})
		window.addEventListener('load',function(){
			bscroll2.refresh();
		})
	},
	updated() {
		window.scroll(0, 0);
	},
  components : {
		
  }
}
</script>

<style scoped>
	.wrapper1{
		height: 100%;
		overflow: hidden;
	}
	.wrapper2{
		height: 100%;
		overflow: hidden;
	}	
	
.hello{
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
	padding-top: 2.515rem;
	width: 100%;
	height: 100%;
}
.banner .swiper-slide{
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
.banner .jingxuan_center ul{
	text-align: center;
	border-bottom: 1px solid #CCCCCC;
	padding-bottom: 0.3125rem;
}
.banner .jingxuan_center li{
	margin: 0;
	width: 25%;
	height: 1.5375rem;
	margin-top: 0.325rem;
	display: inline-block;
	color: #666;
}
.banner .jingxuan_main .list .item{
	height: 2.875rem;
	line-height: 2.875rem;
	border-bottom: 1px solid #CCCCCC;
	display: flex;
	flex-direction: row;	
	font-size: 0.4375rem;
	font-weight: 600;
}
.banner .jingxuan_main .list .item .pic{
	height: 100%;
	width: 35%;
	padding: 0.3125rem 0;
	margin-right: 0.3125rem;
}

/* 页面结构一致开始 */
	.wrapper{
		height: 100%;
		overflow:hidden;
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
/* 页面结构一致结束 */

.partner .box{
	overflow: hidden;
}
.partner .box .list{
	width: 33.333%;
	height: 3rem;
	text-align: center;
	font-size: 0.4375rem;
	float: left;
	margin-top: 0.5rem;
}
.partner .box .list .item{
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	overflow: hidden;
	margin: auto;
	margin-bottom: 0.15625rem;
}
.partner .box .list .item img{
	transform: scale(1.2);
}
.partner .box .list .item p{
	height: 1rem;
}
</style>
