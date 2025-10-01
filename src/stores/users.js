import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {
 
     const users = {
        0:{
            name: 'Jamleck Kemoli',
            email: 'kemolijamleck@gmail.com',
            phone: 254113268956,
            deliveryAddress: '123, Madaraka',
            password: 'kemoli254',
            usertype: 'Customer',
            activeAccount: true

        
        },
        1:{
            name: 'Jake Kemoli',
            email: 'kemolijake@gmail.com',
            phone: 254117279636,
            deliveryAddress: '123, Kilimani',
            password: 'kemoli255',
            usertype: 'Customer',
            activeAccount: true

        },
       2:{
            name: 'Jamleck Jake',
            email: 'jakejamleck@gmail.com',
            phone: 254111234567,
            deliveryAddress: '123, Utawala',
            password: 'kemoli256',
            usertype: 'Customer',
            activeAccount: true

        },
        3:{
            name: 'Jake Jam',
            email: 'jakejam254@gmail.com',
            phone: 254113268957,
            deliveryAddress: '123, kasarani',
            password: 'kemoli257',
            usertype: 'Admin',
            activeAccount: true

        },
       4:{
            name: 'Jam Kemoli',
            email: 'kemolijam254@gmail.com',
            phone: 254113268958,
            deliveryAddress: '123, Ngong',
            password: 'kemoli258',
            usertype: 'Customer',
            activeAccount: false

        },
        5:{
            name: 'Jamleck Jam',
            email: 'jamleckjam@gmail.com',
            phone: 254113268959,
            deliveryAddress: '123, uasin gishu',
            password: 'kemoli259',
            usertype: 'Customer',
            activeAccount: true

        }

     }

        return { users }
    },
    actions: {
    }
   
})
