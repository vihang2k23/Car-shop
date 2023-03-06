<template>
    <v-main>
      <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

<div v-if='this.$route.params.category == "Honda"'>
   <div>

    <Card  :data= cars.Honda  :search=search />
   </div>


</div>
<div v-else-if='this.$route.params.category == "Toyota"'>
    
    <Card  :data= cars.Toyota />

</div>
<div v-else-if='this.$route.params.category == "Chevrolet"'>

    <Card  :data= cars.Chevrolet />
</div>
<div v-else-if='this.$route.params.category== "Tata"'>
 
    <Card  :data= cars.Tata />
</div>
<div v-else-if='this.$route.params.category== "Ford"'>

    <Card  :data= cars.Ford />
</div>
<div v-else>
  <div>no data available</div>

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
    cars: cars,
    route_data: null ,
    search:""

  }
 },
 
 
 created() {
    this.route_data =
      console.log('the local product is ', )
    }  
 

 
 
}
</script>