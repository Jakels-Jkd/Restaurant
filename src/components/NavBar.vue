<script setup> 
const isLoggedIn = true
</script> 
<template>
    
    <v-app-bar color="blue-darken-4">
    <v-app-bar-title style="color:black" >Run 'n' Eats</v-app-bar-title>
    <v-btn to="/">Home</v-btn>
    <v-btn to="/menu">menu</v-btn>
    <v-btn to="/orders" v-if="isLoggedIn">my orders</v-btn>
    <v-btn to="/reservations">Reservations</v-btn>
    <v-btn to="/contactus">contactus</v-btn>
    <v-btn to="/signup">Signup</v-btn>
    <v-avatar to="/userprofile" v-if='isLoggedIn'>
    <span class="text-h5 text-white">J</span>
    </v-avatar>

    <v-btn to="/login" v-else>Login</v-btn>
</v-app-bar>
</template>