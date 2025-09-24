<script setup> 
const menu = [
    {
        name: 'Pizza',
        image: "/images/menu/pizza-pepperoni-with-lentil-vegetable-soups.jpg",
        price: 899,
        description: "Delicious cheese pizza with fresh ingredients.",
        category: "main course"
    },
    {
        name: "Fast Food Meal",
        image: "/images/menu/high-angle-fast-food-white-table.jpg",
        price: 1069,
        description: "A hearty fast food meal with fries and crispy chicken.",
        category: "main course"
    },
    {
        name: "Pizza Chicken BBQ Fried Potatoes with Cheese Rolls",
        image: "/images/menu/pizzas-chicken-bbq-fried-potatoes-cheese-rolls-wooden-table.jpg",
        price: 999,
        description: "A delightful combo of pizza, BBQ chicken, fried potatoes, and cheesy rolls.",
        category: "main course"
    },
    {
       name:"Pizza lunch",
       image:"public/images/menu/bunch-food-lunch.jpg",
       price:1299,
       description:"Tasty pizza for lunch ",
       category:"main course"
    },
    {
      name:"coffee",
      image:"public/images/menu/coffee.png",
      price:150,
      description:"hot cappuccino",
      category:"beverage"
    }
];
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
                     <v-card-actions>
                       <v-card-title>{{ item.price }}</v-card-title> 
                       <v-btn>order</v-btn>
                     </v-card-actions>
                 </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>