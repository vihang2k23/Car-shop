<template>
  <v-app>
    
 
    <v-main>
      <Navbar/>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer/Footer.vue';
import Navbar from './components/Navbar/Navbar.vue';
export default {
  name: 'App',
components:{
    Navbar,
    Footer
},
  data: () => ({
    //
  }),
};
</script>
