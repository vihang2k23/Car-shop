<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      


      <!-- For Home Page -->
      <router-link to="/" class="text-decoration-none text-white mr-5" >
        
        <v-toolbar-title><v-icon large>mdi-car</v-icon>&nbsp;Car-Shop</v-toolbar-title>
      </router-link>

      <v-menu bottom  >
        <template v-slot:activator="{ on, attrs }" >
          <v-btn icon v-bind="attrs" v-on="on" class="ml-5">
           Car-Brands
          </v-btn>
        </template>

        <!-- All brands name -->
        <v-card class="mx-auto" max-width="300" tile>
          <v-list flat>
            <v-subheader>Car Categories</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="item in brands_name" :key="item.length">
                <v-list-item-title @click="redirect(item.carName)" class="text-dark">
                  <v-list-item-icon>
                    <v-icon>mdi-car</v-icon>
                  </v-list-item-icon>

                  {{ item.carName }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card> </v-menu>
        <v-spacer></v-spacer>
          <v-card-actions>
                       
                         <v-btn color="warning " to="/login">Login</v-btn>
                         <v-btn color="primary" to="/signup">Sign Up</v-btn>
                      </v-card-actions>
     
    </v-app-bar>
  </div>
</template>
<script>

import brands from "../../json/cars.json";
export default {
  name: "NavBar",
  data: () => ({
    selectedItem: 1,
    brands_name: brands,
  }),
  methods: {

    // To redirected to particular brand cars page
    redirect(data) {
      this.$router.push(`/categories/${data}`);
      this.$router.go(this.$router.currentRoute);
      console.log("click");
    },
  },

};
</script>