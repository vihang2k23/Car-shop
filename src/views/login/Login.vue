<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field prepend-icon="mdi-login" name="login" label="Login" type="text"></v-text-field>
                           <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password"
                              type="password"></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn text color="primary" @click="forgetpage()">Forget Password</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="alert()">Login</v-btn>
                        <v-btn color="primary" to="/signup">Sign Up</v-btn>
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
   name: 'LoginView',
   methods: {
      alert() {
         Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
         })
         this.$router.push("/")
      },
      forgetpage() {
         Swal.fire({
            title: 'Are you sure to Forget Your Password?',

            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
         }).then((result) => {
            if (result.isConfirmed) {
               this.$router.push("/forget")
            }
         })

      }
   }
};
</script>
 
<style></style>
 