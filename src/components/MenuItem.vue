<script setup> 
import { useMenuStore } from '../stores/Menu';   
const menuStore = useMenuStore();
const menuItem = menuStore.selectedMenuItem;

</script> 
<template>
    <v-container fluid class="d-flex fill-height">
        <v-row>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" max-width="600" justify="center"> 
                   <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card  class="pa-6 rounded-lg" max-width="600" justify="center" color="orange-darken-1"> 
                <v-card-title>{{ menuItem.name }}</v-card-title>
                <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                <v-card-text>{{ menuItem.longdescription }}</v-card-text>
                <v-row>
                <v-col md="2"> Quantity. </v-col>
                <v-col md="4">
                    <v-number-input
                        control-variant="split"
                        density="compact"
                        :min="1"
                        :max="10">
                    </v-number-input>
                </v-col>
                </v-row>
                <v-card-actions>
                    <v-btn color="blue-darken-4" variant="elevated">Order</v-btn>
                </v-card-actions>
               
                </v-card>
                <v-card class="pa-6 rounded-lg mt-4 rounded-lg " max-width="600" justify="center" color='orange-darken-4'>
                    <v-row>
                        <v-col md="6">
                            <v-card-title>Reviews</v-card-title>
                        </v-col>
                        <v-col md="6" class="text-right">
                            <v-btn color="blue-darken-4" outlined>Write a Review</v-btn>
                            <v-rating
                                   hover
                                  :length="5"
                                  :size="32"
                                  :model-value="3"
                                  active-color="blue-darken-4"/>
                        </v-col>
                    </v-row>
                </v-card>
                 </v-col>
                </v-row>
                </v-container>

</template>