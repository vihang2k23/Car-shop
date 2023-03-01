<template>
    <div>
      <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Car-Shop</v-toolbar-title>
  
        <!-- <v-spacer></v-spacer> -->
        <v-menu
        
        bottom
        
      >
        <template  v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="ml-5 pl-5"
          >
            <v-icon medium>mdi-car</v-icon>
           <v-content>Data</v-content>
          </v-btn>
        </template>



       <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list flat>
      <v-subheader>Car Categories</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="item in items"
          :key="item.length"
        >
          <v-list-item-icon>
            <v-icon >mdi-car</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
           <router-link class="text-decoration-none " :to="`/carsview/${item.carName}`"> <v-list-item-title class="text-dark">{{ item.carName }}</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
      </v-menu>ˀ
  
        
      </v-app-bar>
    </div>
  </template>
  <script>
 import json from '../json/cars.json'
export default {
    name:"NavBar",
    data: () => ({
      selectedItem: 1,
      items:json,
    }),
    mounted(){
    console.log(json);
    }
}
</script>