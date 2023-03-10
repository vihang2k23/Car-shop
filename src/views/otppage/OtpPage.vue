<template>
    <v-app id="inspire">
        <v-main>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>OTP Page</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="setpass()">
                                    <template>
                                        <v-card-title class="justify-content-center">Enter OTP here</v-card-title>
                                        <div class="ma-auto" style="max-width: 260px">
                                            <ValidationObserver ref="myForm">
                              <ValidationProvider rules="required|otp:5" v-slot="{ errors }">
                                <v-otp-input type="password" v-model.lazy="otp_number" length="5" dark></v-otp-input>
                                 <p>{{ errors[0] }}</p>
                              </ValidationProvider>
                            
                           </ValidationObserver>
                                           
                                        </div>
                                    </template>
                                    <v-card-actions>
                                <v-btn color="success" type="submit">Confirm</v-btn>
                                <v-spacer></v-spacer>
                             
                                <v-btn color="error" to="/login">Cancel</v-btn>
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
export default{
    name:"OtpPage",
    data() {
        return {
            otp_number : null
        }
    },
    methods:{
        setpass(){
          if (this.otp_number !== null && this.otp_number.length >= 5) {
            Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: "OTP Verified Successfully",
  showConfirmButton: false,
  timer: 1500
})
this.$router.push("/reset")
            
            
          }else{
            Swal.fire("Please Enter Otp")
          }
        }
    }
}
</script>