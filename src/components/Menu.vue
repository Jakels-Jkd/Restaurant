<script setup> 

import { useMenuStore } from '../stores/Menu';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuStore = useMenuStore();
const menu = menuStore.menu;

function view(menu) {
    menuStore.updateSelectedMenuItem(menu);//keepp track of selected item
    router.push('/menuitem');
}
</script> 
<template>
    <h1>menu</h1>
    <v-container>
        <v-row>
            <v-col md="6" v-for="item in menu" :key="item.name">
                <v-card color="blue-darken-4">
                     <v-img :src="item.image" height="200" cover></v-img>
                     <v-row>
                        <v-col md="6">
                        <v-card-title>{{ item.name }}</v-card-title>
                        </v-col>
                        <v-col md="6">
                            <v-chip>{{ item.category }}</v-chip>
                        </v-col>
                     </v-row>
                     <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                       <v-card-title>{{ item.price }}</v-card-title> 
                     <v-card-actions>
                        <v-btn @click="view(item)"> view</v-btn>
                       <v-btn>order</v-btn>
                     </v-card-actions>
                 </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>