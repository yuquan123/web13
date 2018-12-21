<template>
  <div id="app">
    <div class="main">
			<router-view />
		</div>
		<div class="nav" v-show="$route.meta.navShow == undefined || $route.meta.navShow">
			<ul>
				<li v-for="(nav,i) in navs" :key="i" >
					<router-link :to="{path:nav.link}" :class="{active : nav.active}"><img :src="nav.icon" v-if="nav.flag"/><img :src="nav.icon1" v-if="!nav.flag"/> {{nav.title}}</router-link>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'App',
	data (){
		return {
			flag:true,
			navs : [{
				link : '/babyLook',
				title : '宝宝看',
				icon : require('./assets/img/video_checked.png'),
				icon1 : require('./assets/img/video_unchecked.png'), 
				flag : true
			},{
				link : '/babyHear',	
				title : '宝宝听',
				icon : require('./assets/img/audio_checked.png'),
				icon1 : require('./assets/img/audio_unchecked.png'),
				flag : false
			},{
				link : '/cacheFile',
				title : '缓存',
				icon : require('./assets/img/mine_checked.png'),
				icon1 : require('./assets/img/mine_unchecked.png'),
				flag : false
			}]	
		}
	},
	mounted(){
		this.navs.forEach((o,i) => {
			if(this.$route.path == o.link){
				o.flag = true
			}else{
				o.flag = false
			}
		})
	},	
	watch : {
		'$route'(to,from){
			this.navs.forEach((o,i) => {
				if(to.path == o.link){
					o.flag = true
				}else{
					o.flag = false
				}
			})
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	width: 100%;
	height: 100%;
}
.main{
	width: 100%;
	height: 100%;
}
.nav{
	height: 1.5625rem;
	position: fixed;	
	bottom: 0;
	padding-top: 1.5625rem;
	width: 100%;
	font-size: 0.3625rem;
	padding: 0.3125rem;
	background: #444;
	z-index: 99;
}
.nav ul{
	display: flex;
	justify-content: space-around;
}
.nav ul a{
	display: flex;
	flex-direction: column;
	color: #ccc;
}
.nav ul a img{
	margin: auto;
	width: 0.625rem;
	height: 0.525rem;
}
</style>
