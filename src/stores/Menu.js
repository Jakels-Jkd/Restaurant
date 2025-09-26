import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
       const menu = [
    {
        name: 'Pizza',
        image: "/images/menu/pizza-pepperoni-with-lentil-vegetable-soups.jpg",
        price: "Ksh 899",
        description: "Delicious cheese pizza with fresh ingredients.",
        longdescription: "This pizza is made with a crispy crust, topped with a rich tomato sauce, fresh mozzarella cheese, and a variety of toppings including pepperoni, bell peppers, onions, and olives. It's baked to perfection in a wood-fired oven to give it that authentic flavor.",
        category: "main course"
    },
    {
        name: "Fast Food Meal",
        image: "/images/menu/high-angle-fast-food-white-table.jpg",
        price: "Ksh 1069",
        description: "A hearty fast food meal with fries and crispy chicken.",
            longdescription:"This fast food meal includes a generous serving of crispy fried chicken, golden French fries, and a side of fresh coleslaw. Perfect for a quick and satisfying lunch or dinner.",
        category: "main course"
    },
    {
        name: "Pizza Chicken BBQ Fried Potatoes with Cheese Rolls",
        image: "/images/menu/pizzas-chicken-bbq-fried-potatoes-cheese-rolls-wooden-table.jpg",
        price: "Ksh 999",
        description: "A delightful combo of pizza, BBQ chicken, fried potatoes, and cheesy rolls.",
            longdescription:"This meal features a delicious pizza topped with a variety of fresh ingredients, accompanied by succulent BBQ chicken pieces, crispy fried potatoes, and warm cheese rolls. Perfect for sharing with friends or family.",
        category: "main course"
    },
    {
       name:"Pizza + tasty side dishes",
       image:"public/images/menu/bunch-food-lunch.jpg",
       price:" Ksh 1299",
       description:"Tasty pizza for lunch ",
         longdescription:"A delicious lunch option featuring a freshly baked pizza topped with a variety of ingredients including pepperoni, mushrooms, bell peppers, and olives. Served with a side of mixed greens and a refreshing beverage.",
       category:"main course"
    },
    {
      name:"Coffee",
      image:"public/images/menu/coffee.png",
      price:"Ksh 150",
      description:"hot cappuccino",
      longdescription:"A rich and creamy cappuccino made with freshly brewed espresso and steamed milk, topped with a light layer of froth. Perfect for a morning pick-me-up or an afternoon treat.",
      category:"beverage"
    },
    {
        name:"drinks",
        image:"public/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg",
        price:200,
        description:"Refreshing cold drinks",
        longdescription:"A refreshing cold drink made with a blend of fresh fruits and natural ingredients, served over ice. Perfect for quenching your thirst on a hot day.",
        category:"energy drinks + alcohols"
        },
];

        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})
