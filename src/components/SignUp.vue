<script setup> 
import {ref} from 'vue'

const showPassword = ref(false)
const showConfirmPassword = ref(false)


//models
const name = ref(null)
const email = ref(null)
const phone = ref(null)
const DeliveryAddress = ref(null)
const password = ref(null)

function signUp(){
    const signUpData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        DeliveryAddress: DeliveryAddress.value,
        password: password.value,
    }
          try{
        //save databon browser
        localStorage.setItem( 'signUpData',JSON.stringify(signUpData))

        //to do: send to the backend 
    }catch(err){
        console.log('Sign up process failed',err)}
}
    //

</script> 
<template>
    <v-container align="center">
        <v-row>
            <v-col>
                <v-card class="pa-6" width="600" color="orange-lighten-1">
                    <v-card-title>Sign up</v-card-title>
                    <v-text-field v-model="name" label="Name"></v-text-field>
                    <v-text-field v-model="email" label="Email"   :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required ></v-text-field>
                    <v-text-field v-model="phone" label="Phone" type="Number"></v-text-field>
                    <v-text-field v-model="DeliveryAdress" label="Delivery Address":rules="[(v) => !!v || 'Delivery Address is required']" ></v-text-field>
                    <v-text-field v-model="password" label="Password"  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required></v-text-field>
                    <v-text-field label="Confirm Password"      :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        @click:append="showConfirmPassword = !showConfirmPassword"
                        :rules="[
                            (v) => !!v || 'Please confirm your password',
                            (v) => v === password || 'Passwords must match',
                        ]"
                        required></v-text-field>
                    <v-card-text>already registered?
                        <RouterLink to ="/login">Back to Login</RouterLink>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="black" variant="elevated" @click="signUp()"> Sign Up</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
        
</template>