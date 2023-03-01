import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import CarsView from "../views/cars/CarsView.vue"
import CarDetails from "../views/cardetails/CarDetails.vue"
import AddCarDetails from "../views/addcardetails/AddCarDetails.vue"
import EditCarDetails from "../views/editdetails/EditCarDetails.vue"

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
    component: CarsView
  },
  {
    path: '/cardetails/:category/:id',
    name: 'cardetails',
    component: CarDetails
  },
  {
    path: '/addcardetails/:category',
    name: 'addcardetails',
    component: AddCarDetails
  },
  {
    path: '/editcardetails/:category/:id',
    name: 'editcardetails',
    component: EditCarDetails
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
