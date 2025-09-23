<script setup> 

</script> 
<template>
 <!--carousel-->
    <v-container>
        <v-row>
            <v-carousel>
        <v-carousel-item src="/images/dan-gold-E6HjQaB7UEA-unsplash.jpg"></v-carousel-item>
        <v-carousel-item src="/images/daniel-xfr0GzylA7I-unsplash.jpg"></v-carousel-item>
        <v-carousel-item src="/images/heber-davis-lVUXRulrJyA-unsplash (1).jpg"></v-carousel-item>
        <v-carousel-item src="/images/nick-hillier-xBXF9pr6LQo-unsplash.jpg"></v-carousel-item>
        <v-carousel-item src="/images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg"></v-carousel-item>
        </v-carousel>
        </v-row>
    </v-container>
<!--about-->
    <v-container>
        <v-row>
            <v-card>
                <p class="text-h6">Welcome to Run ’n’ Eats, where great food meets a friendly, laid-back vibe. We’re all about serving fresh, flavorful meals that hit the spot, whether you’re in a rush or looking to sit back and enjoy. Every dish is made with care, bringing together taste and quality you can trust.</p>
                <p class="text-h6">Our menu blends familiar favorites with unique dishes that reflect our creativity and love for food. From hearty meals to lighter options, there’s something for everyone to enjoy.<br> Pair that with refreshing drinks and attentive service, and you’ll find a dining experience that feels both comfortable and special.</br>
</p>
                <p class="text-h6">More than just a place to eat, Run ’n’ Eats is about creating memories.<br> It’s where families share stories, friends laugh over meals, and guests always feel welcome. Every visit is a chance to relax, enjoy, and leave satisfied—ready to come back again.</br></p>
            </v-card>
        </v-row>
    </v-container>

<!--news-->
     <v-container>
        <v-row>
            <v-col md="4">
                <v-card color="blue-darken-4">
                    <v-img 
                    src="/images/alex-haney-CAhjZmVk5H4-unsplash.jpg"
                    class="align-end text-white"
                    height="400px"
                    cover>
                </v-img>
                <v-card-title><b><i>Karibu</i></b></v-card-title>
                
                <v-card-subtitle>sample subtitle</v-card-subtitle>
                <v-card-actions>
                    <v-btn>read more</v-btn>
                </v-card-actions>
                </v-card>
            </v-col> 
             <v-col md="4">
                <v-card color="blue-darken-4">
                    
                    <v-img 
                    src="/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
                    class="align-end text-white"
                    height="400px"
                    cover>
                </v-img>
                 <v-card-title><b><i> Karibu . we offer lots of african delicacies from north to south, East to west africa.</i></b></v-card-title>
                <v-card-subtitle>sample subtitle</v-card-subtitle>
                <v-card-actions>
                    <v-btn>read more</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
              <v-col md="4">
                <v-card color="blue-darken-4">
                    <v-img 
                    src="/images/spencer-davis-Ud6PcOtFuKU-unsplash.jpg"
                    class="align-end text-white"
                    height="400px"
                    cover>
                </v-img>
                <v-card-title><b><i>Karibu</i></b></v-card-title>
                <v-card-subtitle>sample subtitle</v-card-subtitle>
                <v-card-actions>
                    <v-btn>read more</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>

            </v-row>
    </v-container>
<!--footer -->
     <v-container>
        <v-row>
<v-footer class="text-center d-flex flex-column ga-2 py-4" color="blue-darken-4">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkepurple-lighten-1din'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-row>
    </v-container>
      </template>