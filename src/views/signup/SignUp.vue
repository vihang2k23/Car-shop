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
                        <v-form @submit.prevent="signup()">
                           <ValidationObserver ref="myForm">
                              <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                 <v-text-field prepend-icon="mdi-account-tie" name="fname" v-model.lazy="signup_data.fname" label="Enter First Name"
                                    type="text"></v-text-field>
                                 <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                              <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                                 <v-text-field prepend-icon="mdi-account-tie" name="lname" v-model.lazy="signup_data.lname" label="Enter Last Name"
                                    type="text"></v-text-field>
                                 <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                              <ValidationProvider rules="required|email" v-slot="{ errors }">
                                 <v-text-field prepend-icon="mdi-email" name="email" v-model.lazy="signup_data.email" label="E-mail"
                                    type="email"></v-text-field>
                                 <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                              <ValidationProvider rules="required|numeric" v-slot="{ errors }">
                                 <v-text-field prepend-icon="mdi-phone" name="phone_number" v-model.lazy="signup_data.phone_number" label="Enter You Mobile Number"
                                    type="number"></v-text-field>
                                 <span>{{ errors[0] }}</span>
                              </ValidationProvider>
                              <ValidationProvider rules="required|alpha|max:50"  v-slot="{ errors }">
                                 <v-textarea label="Enter Your Address" row="1" v-model.lazy="signup_data.address" prepend-icon="mdi-home-account">

                                 </v-textarea>
                                 <span>{{ errors[0] }}</span>
                              </ValidationProvider>

                              <ValidationProvider rules="required|min:8" v-slot="{ errors }">
                              <v-text-field id="password" v-if="!signup_data.password"  prepend-icon="mdi-lock"  name="password" v-model.lazy="signup_data.password" label="Password"
                                 type="password"></v-text-field>
                                 <v-text-field id="password" v-else  prepend-icon="mdi-lock-check"  name="password" v-model.lazy="signup_data.password" label="Password"
                                 type="password"></v-text-field>
                                 <p>{{ errors[0] }}</p>
                           </ValidationProvider>
                           </ValidationObserver>
                           <v-card-actions>
                        <v-btn color="primary" type="submit">Sign up</v-btn>
                        <v-spacer></v-spacer>
                        Already have an account?
                        <v-btn text color="primary" to="/login">Login</v-btn>

                     </v-card-actions>
                        </v-form>
                     </v-card-text>
                     
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
   data(){
      return{
         signup_data:{
            email: '',
            fname:'',
            lname:'',
            phone_number:null,
            password:'',
            address:'',

         }
      }
   },
   methods: {
      signup() {
         if(this.signup_data.email == '' || this.signup_data.fname=='' || this.signup_data.address== '' || this.signup_data.lname== '' ||this.signup_data.password== ''|| this.signup_data.phone_number== null)
         {
            Swal.fire('Please fill in all fields')
         }
         else{
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Sign-up Successfully",
            showConfirmButton: false,
            timer: 1500
         })
         console.log(this.signup_data)
         this.$router.push("/login")
         }
         
      }
   }
};
</script>

<style></style>
