<template>
    <v-main>

   
   
  <!-- <v-card  class="mx-auto my-12" max-width="374" >
    <v-img height="250" src="../../assets/Honda/Honda-CRV-0.jpeg"></v-img>

    <v-card-title class="d-flex justify-content-center"> <span>2018</span> &nbsp; Honda CR-V </v-card-title>

    <h5 class="ml-5">
      $ 250000 <span>|</span><span> Petrol</span>

      <v-btn color="deep-purple lighten-2" text>
        <v-card-title class="">All Details </v-card-title>
      </v-btn>
    </h5>

    <v-divider></v-divider>

    <v-card-actions class="space-between d-flex">
      <v-btn color="teal accent-2 lighten-2" class="d-flex space-between">
        Edit Details
      </v-btn>
      <v-btn color="cyan lighten-5 lighten-2"> Delete Details </v-btn>
    </v-card-actions>
  </v-card> -->
<div v-if='this.$route.params.category == "Honda"'>
   <div v-for="data in cars.Honda" :key="data.length">
   
    <Card  :data= cars.Honda />
   </div>


</div>
<div v-else-if='this.$route.params.category == "Toyota"'>
    <div>Toyoto</div>


</div>
<div v-else-if='this.$route.params.category == "Chevrolet"'>
    <div>Chevrolet</div>


</div>
</v-main>
</template>

<script>
import cars from "../../json/cars_details.json";
import Card from "@/components/card/Card.vue";
export default {
  name: "CarsView",
  components:{
    Card
  },
 data() {
    return {
        cars:cars,
        
    }
 },
 
}
</script>