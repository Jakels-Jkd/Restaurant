<script setup> 
const menuItem = {
   
        name: 'Pizza',
        image: "/images/menu/pizza-pepperoni-with-lentil-vegetable-soups.jpg",
        price: 899,
        description: "Delicious cheese pizza with fresh ingredients.",
        category: "main course"
    }
</script> 
<template>
    <v-container v-container fluid class="d-flex fill-height" align="center">
        <v-row>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" max-width="600" justify="center"> >
                   <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card  class="pa-6 rounded-lg" max-width="600" justify="center"> </v-card>
                <v-card-title>{{ menuItem.name }}</v-card-title>
                <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                <v-card-text>{{ menuItem.description }}</v-card-text>
                <v-card-text> Quantity <v-text-field></v-text-field> </v-card-text>
                <v-card-actions>
                    <v-btn color="blue-darken-">Order</v-btn>
                </v-card-actions>
                    
            </v-col>
        </v-row>
    </v-container>
</template>