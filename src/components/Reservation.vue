<script setup>

//imports
import { ref } from 'vue'

 const showMenu = ref(false)

 //models
 const name = ref(nullull)
 const phone = ref(null)
    const noOfPeople = ref(null)
    const reservationDate = ref(null)
    const reservationTime = ref(null)
    const location = ref(null)

//functions
//make reservaition - add reservation details to local storage
function makeReservation(){
    const reservation={
        name:name.value,
        phone:phone.value,
        noOfPeople:noOfPeople.value,
        date:reservationDate.value,
        time:reservationTime.value,
        location:location.value
    }
    try{
        //save databon browser
        localStorage.setItem(
            'reservation',
            JSON.stringify(reservation))

        //to do: send to the backend 
    }catch(err){
        console.log('reservation failed',err)}
}
 </script>


<template>
    <h1>Reservation</h1>
<v-container fluid class="d-flex fill-height" align="center">
        <v-row>
            <v-col>
                <v-card class="pa-6 rounded-lg" max-width="600" justify="center">
                    <v-row>
                        <p class="text-h5">Make a Reservation</p>
                    </v-row>
                    <v-row>
                        <v-col md="4">Name</v-col>
                        <v-col md="8">
                            <v-text-field label="name" type="name" v-model="name" ></v-text-field>
                        </v-col>
                    </v-row>
                   <v-row>
                        <v-col md="4">Phone</v-col>
                        <v-col md="8">
                            <v-text-field label="number" v-model="number" ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">NoOfPeople</v-col>
                        <v-col md="8">
                            <v-text-field label="NoOfPeople"  v-model="noOfPeople"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">Date</v-col>
                        <v-col md="8">
                            <v-date-input></v-date-input>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">Time</v-col>
                        <v-col md="8">
                            <v-text-field :model-value="reservationTime"label="Picker in menu"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly  v-model="time">
                        </v-text-field>
                        </v-col>
                        <v-row>
                        <v-col md="4">Location</v-col>
                        <v-col md="8">
                            <v-radio-group v-model="location" in line>
                            <v-row>
                                <v-col md="4">
                                    <v-radio label="Madaraka" value="Madaraka"></v-radio>
                                </v-col>
                                <v-col md="4">
                                    <v-radio label="Karen" value="Karen"></v-radio>
                                </v-col>
                                <v-col md="4">
                                    <v-radio label="Utawala" value="Utawala"></v-radio>
                                </v-col>
                            </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    </v-row>
                    <v-row>
                        <v-col align="center">
                            <v-btn @click="makeReservation()" >Make Reservation</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
</template>