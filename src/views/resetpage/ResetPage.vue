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
                                <v-form @submit.prevent="alert()">




                                    <ValidationObserver>

                                        <ValidationProvider rules="required|min:8" vid="new_pass" v-slot="{ errors }">

                                            <v-text-field prepend-icon="mdi-lock" v-model="new_pass" name="newpass"
                                                label="Enter New Password" type="password"></v-text-field>
                                            <p>{{ errors[0] }}</p>
                                        </ValidationProvider>

                                        <ValidationProvider rules="confirmed:new_pass|min:8" v-slot="{ errors }">

                                            <v-text-field prepend-icon="mdi-lock" v-model="confirmation" name="confirm_pass"
                                                label="Confirm Password" type="password"></v-text-field>
                                            <p>{{ errors[0] }}</p>
                                        </ValidationProvider>


                                    </ValidationObserver>
                                    <v-card-actions>
                                        <v-btn color="success" type="submit">Change Password</v-btn>
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
export default {
    name: 'SetPassPage',
    data() {
        return {
            confirmation: "",
            new_pass: ""
        }
    },
    methods: {
        alert() {
            if (this.confirmation == "" || this.new_pass == "") {
                Swal.fire('Please fill in all fields')
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "Password Successfully Changed",
                    showConfirmButton: false,
                    timer: 1500
                })
                this.$router.push("/login")
                console.log(this.confirmation, "", this.new_pass);
            }

        },

    }
};
</script>
  
<style></style>
  