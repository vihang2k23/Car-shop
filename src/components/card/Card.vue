<template>
  <div class="container-fluid m-0 p-0">
    <v-row class="row-gutters m-0 p-0">
      <!-- data_filter is method use for filtering data and display in card design  -->
      <v-col  cols="auto" v-for="(data, index) in data_filter" :key="index">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img
            height="250"
            :src="getImageUrl(data.name, data.mainImage)"
          ></v-img>

          <v-card-title class="d-flex justify-content-center">
            <span>{{ data.year }}</span> &nbsp; {{ data.modal }}
          </v-card-title>

          <h5 class="ml-2">
            {{ data.price }} <span>|</span><span> {{ data.fuel }}</span>

            <v-btn
              color="deep-purple lighten-2"
              text
              @click="redirectdetails(data)"
            >
              <v-card-title>All Details </v-card-title>
            </v-btn>
          </h5>

          <v-divider></v-divider>

          <v-card-actions class="space-between d-flex">
            <router-link class="text-decoration-none" :to="`/editcardetails/${data.name}/${data.id}`"
              ><v-btn
                color="teal accent-2 lighten-2 mr-sm-3"
                class="d-flex space-between"
              >
                Edit Details
              </v-btn></router-link
            >
            <v-btn color="cyan lighten-5 lighten-2" @click="deletecar(data)">
              Delete Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
  </div>
</template>
<script>
{
  /* <router-link
              :to="{
                path: `/cardetails/${data.name}/${data.id}`,
                params: { data: data },
              }"
              class="text-decoration-none"
            >
         
              </router-link>  */
}
// import axios from "axios"
// import bus from "../../main.js"
import car_data from "../../json/cars_details.json";
export default {
  name: "Card-data",
  props: {
    // filter data according to modal
    data: Array,
    
    data1: String,
    year: String,
  },
  data() {
    return {
      car: this.data,
    };
  },
  methods: {
    // To redirected to Car alldetails page
    redirectdetails(data) {
      this.$emit("send", "hello Component B");
      this.$router.push(`/cardetails/${data.name}/${data.id}`);
    },
    // For get image path
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
    },
    // For delete car card
    deletecar(data) {
      car_data.Honda = car_data.Honda.filter((data1) => {
        return data1.id !== data.id;
      });
      console.log(car_data.Honda);
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
    },
  },
  computed: {
    //data_filter is method use for filtering data and display in card design
    data_filter() {
      console.log(this.data1, "1232");
      return this.car.filter((data) => {
        if (!this.year && this.data1 !== "") {
          console.log("called 1")
          return data.modal.match(this.data1);
        }  else if (this.data1 === "" && this.year >= 0) {
          console.log("called 3")
    
         
              if (this.year == 2000) {
                return data.year >= 2000 && data.year <= 2009;
              }
              if (this.year == 2010) {
                return data.year >= 2010 && data.year <= 2019;
              }
              if (this.year == 2020) {
                return data.year >= 2020;
              }
     
        }else if (this.year >= 0  ) {
          console.log("called 2")
          if (this.data1 !== " ") {
            console.log("called 2/1")
            return data.modal.match(this.data1);
          } else {
            console.log("called 2/2")
            if (this.year == 2000) {
              return data.year >= 2000 && data.year <= 2009;
            }
            if (this.year == 2010) {
              return data.year >= 2010 && data.year <= 2019;
            }
            if (this.year == 2020) {
              return data.year >= 2020;
            }
          }
        }
        
      });
    },
  },
};
</script>