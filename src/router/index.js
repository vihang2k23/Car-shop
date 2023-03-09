import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from "../views/signup/SignUp.vue"
import HomeView from '../views/home/HomeView.vue'
import CarsView from "../views/cars/CarsView.vue"
import CarDetails from "../views/cardetails/CarDetails.vue"
import AddCarDetails from "../views/addcardetails/AddCarDetails.vue"
import EditCarDetails from "../views/editdetails/EditCarDetails.vue"
import Login from "../views/login/Login.vue"
import NotFound from "../views/error/NotFoundPage.vue"
import Forget from "../views/forgetpage/ForgetPage.vue"
import OtpPage from "../views/otppage/OtpPage.vue"
import SetPassWord from "../views/setpasswordpage/SetPassPage.vue"
Vue.use(VueRouter)

const routes = [

  {
    path:"/",
    name:"home",
    component: HomeView
  },
  {
    path:"/carsview/:category",
    name:"carsview",
    component: CarsView,
    meta: {
      auth: true
  }
  },
  {
    path: '/cardetails/:category/:id',
    name: 'cardetails',
    component: CarDetails,
    meta: {
      auth: true
  }
  },
  {
    path: '/addcardetails',
    name: 'addcardetails',
    component: AddCarDetails,
    meta: {
      auth: true
  }
  },
  {
    path: '/editcardetails/:category/:id',
    name: 'editcardetails',
    component: EditCarDetails,
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
    path:'/otppage',
    name:"otppage",
    component:OtpPage,
     
  },
  {
    path:"/setpassword",
    name:"setpassword",
    component:SetPassWord,
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
