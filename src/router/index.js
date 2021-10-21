import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import product from '../views/product.vue'
import card from '../views/card.vue'
import contant from '../views/contant.vue'
// import spark from '../views/spark.vue'
import Lravel from '../views/LaravelToDoApp'
import simpleCardVue  from '../views/simpleCard'
import Login from '../views/Login'
import SingUp from '../views/SingUp'
import ArticalPage from '../views/ArticalPage'
import addArtical from '../views/addArticals'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    
  },
  {
    path: '/product',
    name: 'product', 
    component: product
  }
  ,
  {
    path: '/card',
    name: 'card', 
    component: card,
    props:true,
   
  }
  ,
  {
    path: '/contant',
    name: 'contant', 
    component: contant,
  
   
  }
   ,
  {
    path: '/spark',
    name: 'spark', 
    component: Lravel,   
  },
   {
    path: '/simple-card',
    name: 'simple-card', 
    component: simpleCardVue,   
},
	{
		path: '/login',
		name: 'login', 
		component: Login,
	},
	{
		path: '/signup',
		component:SingUp,
	},
	{
		path:'/articals',
		name: 'ArticalPage',
		component:ArticalPage
	},
	{
		path:'/add-articals',
		name: 'add-artical',
		component:addArtical
	}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
