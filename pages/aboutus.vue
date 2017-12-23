<template>
  <div>
 <v-container grid-list-lg>
   <div class="text-xs-center">
     <h5>เกี่ยวกับเรา</h5>
     <h6>รายชื่อนักพัฒนาโครงการ ABC-Tutor</h6><br>
   </div>
   <v-layout row wrap justify-space-between>
     <v-flex xs12 md5>
       <v-card>
         <v-card-media :src="au" height="60vh"></v-card-media>
         <v-card-text>
           <div class="text-xs-center">
             <h6>นายรัตนพล เปียแก้ว</h6>
             <p style="font-style: italic; display:inline;">Back-End Developer</p>
          </div>
          <br>
          <v-icon large>fa-facebook-square</v-icon>&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://www.facebook.com/rattanapol.piakaew">https://fb.com/rattanapol.piakaew</a><br>
          <div class="mt-3">
            <v-icon large>fa-google-plus-square</v-icon>&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=makejack4@gmail.com">makejack4@gmail.com</a>
          </div>
       </v-card-text>
       </v-card>
    </v-flex>
    <v-flex xs12 md5>
      <v-card>
        <v-card-media :src="ben" height="60vh"></v-card-media>
        <v-card-text>
          <div class="text-xs-center">
            <h6>นายธีระภัทร วิจิตรภู</h6>
            <p style="font-style: italic; display:inline;">Front-End Developer</p>
         </div>
         <br>
         <v-icon large>fa-facebook-square</v-icon>&nbsp;&nbsp;&nbsp;<a target="_blank"href="https://www.facebook.com/BA.BLEND">https://fb.com/BA.BLEND</a><br>
         <div class="mt-3">
           <v-icon large>fa-google-plus-square</v-icon>&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=Blend.Theerapat@gmail.com">Blend.Theerapat@gmail.com</a>
         </div>
      </v-card-text>
      </v-card>
   </v-flex>
   </v-layout>

  </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      au: require('../static/about/au.jpg'),
      ben: require('../static/about/ben.jpg'),
    }
  }
}
</script>
