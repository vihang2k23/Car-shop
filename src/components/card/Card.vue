<template>
  <div class="container-fluid m-0 p-0">
    <v-row class="row-gutters m-0 p-0">
      <v-col  v-for="(data, index) in car" :key="index">
     
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="getImageUrl(data.name,data.mainImage)"></v-img>

          <v-card-title class="d-flex justify-content-center">
            <span>{{ data.year }}</span> &nbsp; {{ data.modal }}
          </v-card-title>

          <h5 class="ml-3">
            {{ data.price }} <span>|</span><span> {{ data.fuel }}</span>

            <router-link :to="{path:`/cardetails/${data.name}/${data.id}`,params:{data:data}}" class="text-decoration-none"> <v-btn color="deep-purple lighten-2" text >
                <v-card-title >All Details </v-card-title>
              </v-btn></router-link>
             
           
          </h5>

          <v-divider></v-divider>

          <v-card-actions class="space-between d-flex">
            <v-btn color="teal accent-2 lighten-2" class="d-flex space-between">
              Edit Details
            </v-btn>
            <v-btn color="cyan lighten-5 lighten-2" @click="deletecar(data)"> Delete Details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import axios from "axios"
import car_data from "../../json/cars_details.json"
export default {
  name: "Card-data",
  props: {
    data: Array,
  },
  data(){
    return {
      car: this.data
  }},
  methods:{
    redirect(data){
  this.$router.push({
        name: "cardetails",
        path: `/cardetails/${data.name}/${data.id}`,
        params: { data }
      })
      


},
getImageUrl(folderName,imageName){
let image = require.context("@/assets/");
return image("./" + folderName + "/" + imageName)
}, deletecar(data)
{
  car_data.Honda = car_data.Honda.filter((data1)=> {return data1.id!==data.id})
console.log( car_data.Honda,);
  // switch(data.name){
  //           case "Honda" :
  //           car_data.Honda   = car_data.Honda.filter((data1)=>{
  //                   return   data1.id !== data.id
  //               }) 
  //               console.log( car_data.Honda);
  //               break;
  //               case "Toyota" :
  //               car_data.Toyota = car_data.Toyota.filter((data1)=>{
  //                   return   data1.id !== data.id
  //               }) 
  //                     console.log( car_data.Toyota);
  //                   break;
  //                   case "Chevrolet" :
  //                   car_data.Chevrolet  =  car_data.Chevrolet.filter((data1)=>{
  //                   return   data1.id !== data.id
  //               }) 
  //                         console.log(  car_data.Chevrolet );
  //                       break;
  //                       case "Ford" :
  //                       car_data.Ford  =car_data.Ford.filter((data1)=>{
  //                   return   data1.id !== data.id
  //               }) 
  //                             console.log( car_data.Ford);
  //                           break;
  //                        case "Tata" :
  //                        car_data.Tata  = car_data.Tata.filter((data1)=>{
  //                   return   data1.id !== data.id
  //               }) 
  //                             console.log( car_data.Tata);
  //                           break;
  //                           default :
  //                           car_data 
  //       }
}
  },
  mounted() {
    console.log(this.data);
  },
};
</script>