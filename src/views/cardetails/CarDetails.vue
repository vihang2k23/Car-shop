<template>
  <div class="container-fluid m-0 p-0 "  id="container" >
    <div
      class="justify-content-evenly row"
      v-for="data in getCarInfo"
      :key="data.id"
    >
      <div class="col-8" >
        <div>
          <img
            v-if="
              mainImage.length < 1
                ? (mainImage = getImageUrl(data.name, data.mainImage))
                : mainImage
            "
            :src="mainImage"
            alt=""
            class="rounded mx-auto d-block w-75 h-75"
          />
        </div>

        <div class="justify-content-center row mt-5">
          <img
            v-for="(eachCarImage, i) in data.images"
            :key="i"
            :src="getImageUrl(data.name, eachCarImage)"
            alt=""
            @click="mainImage = getImageUrl(data.name, eachCarImage)"
            class="rounded mx-2 d-block h-50 w-25 thumbnailImage"
          />
        </div>
      </div>
      <div class="col-4">
        <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          max-height="100%"
          max-width="100%"
        >
          <v-card-title class="text-h5 font-weight-bold text-white">
            {{ data.name }} | &nbsp;
            <span>{{ data.modal }}</span>
          </v-card-title>
          <v-card-text class="text-h5 font-weight-bold">
            {{ data.price }} | &nbsp;
            <span> {{ data.fuel }}</span>
          </v-card-text>

          <v-card-text class="text-h5 font-weight-bold">
            Model Year : {{ data.year }} 
          </v-card-text>
          <v-card-text class="text-h5 font-weight-bold">
            Uploaded On : {{ data.uploadedOn }}
          </v-card-text>
          <v-card-text class="text-h6 font-weight-bold">
            <span class="text-white">Details {{ this.data1 }}</span>: {{ data.description }}
          </v-card-text>
        </v-card>
      </div>
    </div>
   

  </div>
</template>
<script>
// getImageUrl(data.name,data.mainImage)
// import bus from "../../main.js"
import cardetails from "../../json/cars_details.json";
export default {
  components:{

  },
    name: "CarDetails",
    data() {
        return {
            myCarDetails: cardetails,
            data1 : "",
            mainImage: "",
            // carName :this.$route.params.category,
            // carFiled:this.$route.params.id
        };
    },
    methods: {
        getImageUrl(folderName, imageName) {
            let image = require.context("@/assets/");
            return image("./" + folderName + "/" + imageName);
        },
    },
    computed: {
        getCarInfo() {
            let carData = "";
            switch (this.$route.params.category) {
                case "Honda":
                    carData = this.myCarDetails.Honda.filter((data) => {
                        return data.id == this.$route.params.id;
                    });
                    // console.log(carData);
                    break;
                case "Toyota":
                    carData = this.myCarDetails.Toyota.filter((data) => {
                        return data.id == this.$route.params.id;
                    });
                    break;
                case "Chevrolet":
                    carData = this.myCarDetails.Chevrolet.filter((data) => {
                        return data.id == this.$route.params.id;
                    });
                    break;
                case "Ford":
                    carData = this.myCarDetails.Ford.filter((data) => {
                        return data.id == this.$route.params.id;
                    });
                    break;
                case "Tata":
                    carData = this.myCarDetails.Tata.filter((data) => {
                        return data.id == this.$route.params.id;
                    });
                    break;
                default:
                    carData = this.myCarDetails;
            }
            return carData;
        },
    },
    mounted() {
      
        this.$on('send', data => {
            console.log(data,"datat")
           
            this.data1 = data
           
        })    
        console.log(this.data1,"dtataaaaaaaaa");
    } 

 
  
};
</script>

<style scoped>
.mainImage {
  width: 650px;
  height: 450px;
  border: 10px solid #eee;
  margin-bottom: 10px;
}
.thumbnailImage {
  width: 200px;
  border: 10px solid #eee;
}

</style>