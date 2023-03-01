<template>
  <div class="container-fluid m-0 p-0">
    <v-row  v-for="data in data" :key="data">
        <v-col cols="6">
            <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" src="../../assets/Honda/Honda-CRV-0.jpeg"></v-img>

      <v-card-title class="d-flex justify-content-center">
        <span>{{data.year}}</span> &nbsp; {{data.modal}}
      </v-card-title>

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
    </v-card>
        </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Card-data",
  props: {
    data: Array,
  },
  mounted() {
    console.log(this.data);
  },
};
</script>