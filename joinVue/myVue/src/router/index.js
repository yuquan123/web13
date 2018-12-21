import Vue from 'vue'
import Router from 'vue-router'
import babyLook from '@/page/babyLook'
import babyHear from '@/page/babyHear'
import cacheFile from '@/page/cacheFile'
import setting from '@/components/setting'
import settingChild from '@/components/settingChild'
import lookList from '@/page/lookList'
import hearList from '@/page/hearList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/babyLook',
      name: 'babyLook',
      component: babyLook
    },{
      path: '/lookList',
      name: 'lookList',
      component: lookList,
			meta : {navShow : false} 
    },{
			path: '/babyHear',
			name: 'babyHear',
			component: babyHear
		},{
			path: '/hearList',
			name: 'hearList',
			component: hearList,
			meta : {navShow : false} 
		},{
			path: '/cacheFile',
			name: 'cacheFile',
			component: cacheFile
		},{
			path: '/setting',
			name: 'setting',
			component: setting,
			meta : {navShow : false} 
		},{
			path: '/settingChild',
			name: 'setting-child',
			component: settingChild,
			meta : {navShow : false} 
		},{
			path : "*",
			redirect : '/babyLook'
		}
  ]
})
