<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Forget Password Page</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form @submit.prevent="alert_email()" >
                           <ValidationObserver ref="myForm">
                              <ValidationProvider rules="required|email" v-slot="{ errors }">
                                 <v-text-field prepend-icon="mdi-login" name="login" label="Enter your E-mail" type="email"
                                    v-model.lazy="forget_email"></v-text-field>
                                 <p>{{ errors[0] }}</p>
                              </ValidationProvider>
                              <v-btn text color="primary" type="submit">Send E-mail</v-btn>
                           </ValidationObserver>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>

                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/login">Login</v-btn>
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
   name: 'ForgetView',
   data() {
      return {
         forget_email: '',
      }
   },
   methods: {
      alert_email() {
         if (this.forget_email === "")
          { Swal.fire("Please Enter Email") } 
          else {
            Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: "Email Sent Successfully",
               showConfirmButton: false,
               timer: 1500
            })
            console.log(this.forget_email, "forget_email");
            this.$router.push("/otppage")
         }
      }
   }
};
</script>
 
<style></style>
 