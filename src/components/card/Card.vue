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
            <!-- this.$router.push() -->
      
            <v-btn
              color="deep-purple lighten-2"
              text
            
            >
              <v-card-title @click="redirectdetails(data)">All Details </v-card-title>
            </v-btn>
      
          </h5>

          <v-divider></v-divider>

          
        </v-card>
      </v-col>
      
    </v-row>
  </div>
</template>
<script>



import { EventBus } from '@/event-bus';

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
      emit:"hello"
    };
  },
  methods: {
    // To redirected to Car alldetails page
    redirectdetails(data) {
      // console.log("callleddddddd",this.car);
      EventBus.$emit('search-value',this.car)
     this.$router.push(`/cardetail/${data.name}/${data.id}`)
    },
    // For get image path
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
    },
    

  },
  computed: {
    //data_filter is method use for filtering data and display in card design
    data_filter() {
      // console.log(this.data1, "1232");
      return this.car.filter((data) => {
        if (!this.year && this.data1 !== "") {
          // console.log("called 1")
          return data.modal.match(this.data1);
        }  else if (this.data1 === "" && this.year >= 0) {
          // console.log("called 3")
    
         
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
          // console.log("called 2")
          if (this.data1 !== " ") {
            // console.log("called 2/1")
            return data.modal.match(this.data1);
          } else {
            // console.log("called 2/2")
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