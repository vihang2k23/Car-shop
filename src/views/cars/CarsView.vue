<template>
    <v-main>


<div v-if='this.$route.params.category == "Honda"'>
   <div>

    <Card  :data= cars.Honda />
   </div>


</div>
<div v-else-if='this.$route.params.category == "Toyota"'>
    <div>Toyoto</div>
    <Card  :data= cars.Toyota />

</div>
<div v-else-if='this.$route.params.category == "Chevrolet"'>
    <div>Chevrolet</div>
    <Card  :data= cars.Chevrolet />
</div>
<div v-else-if='this.$route.params.category== "Tata"'>
    <div>Tata</div>
    <Card  :data= cars.Tata />
</div>
<div v-else-if='this.$route.params.category== "Ford"'>
    <div>Ford</div>
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
    
  }
 },
 created() {
    this.route_data =
      console.log('the local product is ', )
    }  
 

 
 
}
</script>