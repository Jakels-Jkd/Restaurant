<script setup> 
const isAdmin =true
const isLoggedIn =  JSON.parse(localStorage.getItem( "isLoggedIn"));
</script> 
<template>
    
    <v-app-bar color="blue-darken-4">
    <v-app-bar-title style="color:black" >Run 'n' Eats</v-app-bar-title>
    <v-btn to="/">Home</v-btn>
    <v-btn to="/menu">Menu</v-btn>
    <v-btn to="/orders" v-if="isLoggedIn">My Orders</v-btn>
    <v-btn to="/reservations">Reservations</v-btn>
    <v-btn to="/contactus">Contact Us</v-btn>
    <v-avatar to="/userprofile" v-if='isLoggedIn'>
    <span class="text-h5 text-white">J</span>
    </v-avatar>
   <v-btn to="/admin" v-if="isLoggedIn && isAdmin">Admin</v-btn>
  
    <v-btn to="/login" v-else>Log In</v-btn>
</v-app-bar>

</template>