<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Sign-Up Page </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="mdi-text"
                              name="fname"
                              label="Enter First Name"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              prepend-icon="mdi-text"
                              name="lname"
                              label="Enter Last Name"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              prepend-icon="mdi-email"
                              name="email"
                              label="E-mail"
                              type="email"
                           ></v-text-field>
                           <v-text-field
                              prepend-icon="mdi-phone"
                              name="phone_number"
                              label="Enter You Mobile Number"
                              type="number"
                           ></v-text-field>
                          
                           <v-textarea
                           label="Enter Your Address"
                           row="1"
                           prepend-icon="mdi-text"
                           >

                           </v-textarea>

                           <v-text-field
                              id="password"
                              prepend-icon="mdi-lock"
                              name="password"
                              label="Password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn   color="primary" @click="alert()">Sign up</v-btn>
                        <v-spacer></v-spacer>
                        Already have an account?
                        <v-btn  text color="primary" to="/login">Login</v-btn>
                      
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
  import Swal from 'sweetalert2'
export default {
   name: 'SignUp',
   methods:{
    alert(){
   Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: "Sign-up Successfully",
  showConfirmButton: false,
  timer: 1500
})
this.$router.push("/login")
    }
  }
};
</script>

<style></style>
