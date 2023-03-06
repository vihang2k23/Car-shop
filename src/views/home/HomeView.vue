<template>
  <div>
    <v-carousel height="100%">
      <v-carousel-item
        src="https://source.unsplash.com/collection/190727/1600x900/"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://source.unsplash.com/collection/190727/1600x900"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://source.unsplash.com/collection/190727/1600x900/"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-card class="bg-dark py-5" max-width="auto">
      <hr class="text-white" />
      <h3 class="text-white d-flex justify-content-center">POPULAR BRANDS</h3>
      <hr class="text-white" />
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <router-link
              :to="`/carsview/${card.title}`"
              class="text-decoration-none"
            >
              <v-card height="70%" width="70%">
                <v-img
                  :src="getImageUrl(card.folderName, card.image_name)"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="100%"
                  width="100%"
                  cover
                >
                </v-img>
                <v-card-title
                  class="bg-white justify-content-center"
                  v-text="card.title"
                ></v-card-title>
              
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <FooterVue />
  </div>
</template>
<script>
import FooterVue from "@/components/Footer/Footer.vue";

export default {
  components: {
    FooterVue,
  },
  data: () => ({
    cards: [
      {
        title: "Honda",
        flex: 4,
        folderName: "Car_models",
        image_name: "Honda.png",
      },
      {
        title: "Toyota",
        flex: 4,
        folderName: "Car_models",
        image_name: "toyota.png",
      },
      {
        title: "Chevrolet",
        flex: 4,
        folderName: "Car_models",
        image_name: "Chevrolet.png",
      },
      {
        title: "Tata",
        flex: 4,
        folderName: "Car_models",
        image_name: "Tata.png",
      },
      {
        title: "Ford",
        flex: 4,
        folderName: "Car_models",
        image_name: "Ford.png",
      },
    ],
  }),
  methods: {
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
    },
  },
};
</script>