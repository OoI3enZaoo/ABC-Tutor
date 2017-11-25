<template>
  <div>
 <v-container grid-list-lg>
   <div class="text-xs-center">
     <p class="headline">เกี่ยวกับเรา</p>
     <p>รายชื่อผู้พัฒนาโครงการ</p><br>
   </div>
   <v-layout row justify-space-between>
     <v-flex xs5>
       <v-card>
         <v-card-media :src="au" height="60vh"></v-card-media>
         <v-card-text>
           <div class="text-xs-center">
             <h6>นายรัตนพล เปียแก้ว</h6>
             <p style="font-style: italic; display:inline;">Back-End Developer</p>
          </div>
       </v-card-text>
       </v-card>
    </v-flex>
    <v-flex xs5>
      <v-card>
        <v-card-media :src="ben" height="60vh"></v-card-media>
        <v-card-text>
          <div class="text-xs-center">
            <h6>นายธีระภัทร วิจิตรภู</h6>
            <p style="font-style: italic; display:inline;">Front-End Developer</p>
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
