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
                        <v-form @submit.prevent="alert()" >
                           <ValidationObserver ref="myForm">
                           <ValidationProvider rules="required|email" v-slot="{ errors }">
                           <v-text-field prepend-icon="mdi-login" name="login" v-model.lazy="login_data.login_email" label="Login" type="email"></v-text-field>
                           <span>{{ errors[0] }}</span>
                           </ValidationProvider>
                           <ValidationProvider rules="required|min:8" v-slot="{ errors }">
                           <v-text-field id="password" prepend-icon="mdi-lock" name="password" v-model.lazy="login_data.login_pass" label="Password"
                              type="password"></v-text-field>
                              <p>{{ errors[0] }}</p>
                           </ValidationProvider>
                          
                           </ValidationObserver>
                           <v-spacer></v-spacer>
                           <v-btn color="primary"  type="submit">Login</v-btn>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                      
                        <v-spacer></v-spacer>
                     
                        <v-btn color="warning" to="/signup">Sign Up</v-btn>
                        <v-btn text color="teal-accent-2" @click="forgetpage()">Forget Password</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>
 
<script>
// import { extend } from 'vee-validate';
// import { required, email } from 'vee-validate/dist/rules';
import Swal from 'sweetalert2'
export default {
   name: 'LoginView',
   data(){
      return{
         login_data:{
         login_email:"",
         login_pass:""
      }
      }
      
   },
   methods: {
      alert() {
      if(this.login_data.login_email=== "" || this.login_data.login_pass === ""){
         Swal.fire('Please fill in all fields')
      }else{
         Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
         })
         console.log(this.login_data,"login data")
         this.$router.push("/")
      }
         
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
 