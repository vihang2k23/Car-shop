<template>
  <v-main>
    <v-row
      ><v-col cols="2">
        <!-- expand-on-hover -->
        <v-navigation-drawer height="100%" permanent>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-divider class="bg-dark"></v-divider>

          <!-- Slider -->
          <!-- <v-text class="text-center space-around d-flex">Price Range</v-text> -->
          <!-- <range-slider
    class="slider"
    min="10"
    max="1000000"
    step="1"
    v-model="sliderValue">
  </range-slider> -->
  <v-divider class="bg-dark"></v-divider>
   <v-card-title class="text-center d-flex space-around">Year</v-card-title>
  <v-radio-group v-model="year">
  <v-radio label="2000 and above" value=2000></v-radio>
  <v-radio label="2010 and above" value=2010></v-radio>
  <v-radio label="2020 and above" value=2020></v-radio>
  <v-radio label="All Cars" value=""></v-radio>
</v-radio-group>

        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <div v-if="this.$route.params.category == 'Honda'">
          <div>
        
            <Card :data="cars.Honda" :data1="search" :year = year  />
          </div>
        </div>
        <div v-else-if="this.$route.params.category == 'Chevrolet'">
    
          <Card :data="cars.Chevrolet" :data1="search"  :year = year />
        </div>
        <div v-else-if="this.$route.params.category == 'Toyota'">
    
          <Card :data="cars.Toyota" :data1="search" :year = year />
        </div>  
        
        <div v-else-if="this.$route.params.category == 'Tata'">
          <Card :data="cars.Tata" :data1="search"  :year = year />
        </div>
        <div v-else-if="this.$route.params.category == 'Ford'">

          <Card :data="cars.Ford" :data1="search"  :year = year />
        </div>
        <div v-else>
  <Card :data="cars.All" :data1="search"  :year = year />
          <div>no data available</div>
        </div></v-col
      ></v-row
    >
  </v-main>
</template>

<script>
// import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
// import 'vue-range-slider/dist/vue-range-slider.css'
import cars from "../../json/cars_details.json";
import Card from "@/components/card/Card.vue";
export default {
  name: "CarsView",
  components: {
    Card,
    // RangeSlider
  },
  data() {
    return {
      cars: cars,
      route_data: null,
      search: " ",
      // sliderValue: 0,
      selected:[],
      year : null 
     
 
  
      }

},
mounted(){
  console.log(this.$route.params )
}
}
</script>
<style>
</style>