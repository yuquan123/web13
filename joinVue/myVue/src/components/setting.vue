<template>
	<div class="set">
		<div class="Masked" v-if="maskedFlag">
			<div class="box">
				<div class="login" @click="maskedHide">QQ 登录</div>
			</div>
		</div>
		<div class="times" v-show="timeflag">
			<div class="list">
				<div class="item set-top">选择休息频率</div>
				<div class="item" v-for="(i,index) in times" @click="timeHide(index)" :key="index">{{i}}</div>
			</div>
		</div>
		<div class="top">
			<span @click="returnCache"><i class="fa fa-chevron-left"></i></span>
			<span>设置</span>
		</div>
		<div class="logo">
			<div class="background">
				<img src="../assets/img/account_info_bg.png" alt="">
			</div>
			<img class="img" src="../assets/img/account_head_default.png" alt="">
			<span @click="maskedShow">家长登录</span>
		</div>
		<div class="list">
			<p></p>
			<router-link to="/settingChild">
				<div class="item">
					<div class="left">播放设置</div>
					<div class="right"><i class="fa fa-chevron-right "></i></div>
				</div>
			</router-link>
			<div class="item">
				<div class="left">启动音效</div>
				<div class="right"><kaiguan class="xuan" :on-switch="false"></kaiguan></div>
			</div>
			<p></p>
			<div class="item">
				<div class="left">作息控制</div>
				<div class="right"><kaiguan class="xuan" :on-switch="true"></kaiguan></div>
			</div>
			<div class="item">
				<div class="left">休息频率</div>
				<div class="right timeText" @click="timeShow"><span>{{times[num]}}</span><i class="fa fa-chevron-right "></i></div>
			</div>
			<p></p>
			<div class="item">
				<div class="left">微信公众号</div>
				<div class="right"><i class="fa fa-chevron-right "></i></div>
			</div>
			<div class="item">
				<div class="left">内容合作</div>
				<div class="right"><i class="fa fa-chevron-right "></i></div>
			</div>
			<div class="item">
				<div class="left">关于</div>
				<div class="right"><i class="fa fa-chevron-right "></i></div>
			</div>
			<p></p>
		</div>
		<div class="bottom">
			<div class="chirld">
				<img src="../assets/img/setting_icon_feedback.png" alt="">
				<p>建议反馈</p>
			</div>
			<div class="chirld">
				<img src="../assets/img/setting_icon_comment.png" alt="">
				<p>评分支持</p>
			</div>
			<div class="chirld">
				<img src="../assets/img/setting_icon_share.png" alt="">
				<p>推荐给朋友</p>
			</div>
		</div>
	</div>
</template>

<script>
	import kaiguan from './kaiguan'
	export default {
		name : 'setting',
		data() {
			return {
				times : ['不休息','15分钟','30分钟','45分钟','60分钟'],
				timeflag : false,
				num:0,
				maskedFlag : false
			};
		},
		methods: {
			returnCache() {
				this.$router.push('/cacheFile');
			},
			timeShow() {
				this.timeflag = true;
			},
			timeHide(i) {
				this.num=i
				this.timeflag = false;
			},
			maskedShow() {
				this.maskedFlag = !this.maskedFlag
			},
			maskedHide() {
				this.maskedFlag = !this.maskedFlag
			}
 		},
		components:{
			kaiguan
		}
	}
</script>

<style scoped>
.set{
	width: 100%;
	height: 100%;
	position: relative;
}
.Masked{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999;
}
.Masked .box{
	width: 80%;
	height: 3rem;
	border-radius: 0.3125rem;
	background: #FFFFFF;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}
.Masked .box .login{
	width: 80%;
	height: 1rem;
	background: deepskyblue;
	border-radius: 0.625rem;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	color: #FFFFFF;
	text-align: center;
	font-size: .5rem;
	line-height: 1rem;
}
.top{
	height: 1.5rem;
	line-height: 1.5rem;
}
.top span{
	display: inline-block;
	font-size: .5rem;
}
.top span:first-child{
	margin-left: .5rem;
	color: #666;
	font-weight: 100;
	font-size: 0.56875rem;
}
.top span:last-child{
	color: mediumspringgreen;
	width: 80%;
	text-align: center;
}
.logo{
	width: 100%;
	height: 2rem;
	line-height: 2rem;
	color: #FFFFFF;
	position: relative;
}
.logo .background{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.logo .background img{
	width: 100%;
	height: 100%;
}
.logo .img{ 
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top: .25rem;
	left: .25rem;
}
.logo span{
	display: block;
	font-size: 0.5rem;
	position: absolute;
	left: 2rem;
}
.list .item{
	height: 1.3rem;
	line-height: 1.3rem;
	font-size: .5rem;
	color: #666;
	border-bottom: 1px solid #eee;
	overflow: hidden;
}
.list .item .left{
	float: left;
	margin-left: .5rem;
}
.list .item .right{
	float: right;
	margin-right: .5rem;
}
.list p{
	display: block;
	height: .3rem;
	background: #eee;
}
.xuan{
	margin-top: .15rem;
}
.bottom{
	padding-top: .5rem;
	display: flex;
	justify-content: space-around;
	text-align: center;
	color: #bbb;
}
.bottom img{
	width: .7rem;
	height: .7rem;
}

.timeText span{
	display: inline-block;
	width: 3rem;
	text-align: center;
}

.times{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
}
.times .list{
	width: 100%;
	background: #FFFFFF;
	position: absolute;
	bottom: 0;
}
.times .item{
	text-indent: 0.625rem;
}
.times .set-top{
	text-align: center;
	text-indent: 0;
}
</style>
