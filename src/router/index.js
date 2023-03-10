import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from "../views/signup/SignUp.vue"
import HomeView from '../views/home/HomeView.vue'
import Categories from "../views/cars/Categories.vue"
import CarDetail from "../views/cardetail/CarDetail.vue"

import Login from "../views/login/Login.vue"
import NotFound from "../views/error/NotFoundPage.vue"
import Forget from "../views/forgetpage/ForgetPage.vue"
import OtpPage from "../views/otppage/OtpPage.vue"
import ResetPassword from "../views/resetpage/ResetPage.vue"
Vue.use(VueRouter)

const routes = [

  {
    path:"/",
    name:"home",
    component: HomeView
  },
  {
    path:"/categories/:category",
    name:"categories",
    component: Categories,
    meta: {
      auth: true
  }
  },
  {
    path: '/cardetail/:category/:id',
    name: 'cardetail',
    component: CarDetail,
    meta: {
      auth: true
  }
  },
  
 

  {
    path:'/login',
    name:"login",
    component: Login,
   
  },
  {
    path:'/signup',
    name:'signup',
    component:Signup,
    meta: {
      auth: true
  } 
  },
  {
    path:'/forget',
    name:'forget',
    component:Forget,
   
  },
  {
    path:'/otp',
    name:"otp",
    component:OtpPage,
     
  },
  {
    path:"/reset",
    name:"reset",
    component:ResetPassword,
  },
{
  path:'/*',
  name:"error",
  component:NotFound
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
