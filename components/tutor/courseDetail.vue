<template>
  <div>
    <v-container>
      <v-card>
        <v-card-text>
    <v-layout>
    <v-flex xs11>
      <v-text-field @keyup.enter="addTargetStudent" v-model="targetStudentModel" label="เนื้อหาเรียน" hint="เช่น เนื้อหาวิชาบทที่ 1 เรื่องคอมพิวเตอร์เบื้องต้น"></v-text-field>
    </v-flex>
    <v-flex xs1>
      <div class="mt-2 text-xs-right">
        <v-btn outline @click.native="addTargetStudent"><v-icon>add_box</v-icon>&nbsp;เพิ่ม</v-btn>
      </div>
     </v-flex>
     </v-layout>

           <template v-for="(data,index) in targetStudents">
             <v-layout :key="index">
               <v-flex xs11>
                 <!-- <v-text-field disabled :value="data" label="สิ่งที่ผู้เรียนจะได้รับ" hint="เช่น เนื้อหาวิชาบทที่ 1 เรื่องคอมพิวเตอร์เบื้องต้น"></v-text-field> -->
                 <ul>
                   <li><v-card flat>{{data}}</v-card></li>
                 </ul>
               </v-flex>
               <v-flex xs1>
                 <div class="mt-2">
                   <v-btn icon @click.native="targetStudents.splice(index, 1)"><v-icon >delete</v-icon></v-btn>
                 </div>
               </v-flex>
             </v-layout>
           </template>
           <br><br>
           <v-layout>
             <v-flex xs11>
               <v-text-field v-model="courseForModel" @keyup.enter="addCourseFor" label="เนื้อหาสำหรับ" hint="เช่น ผู้ที่ต้องสอบกลางภาควิชาAA"></v-text-field>
             </v-flex>
             <v-flex xs1>
               <div class="mt-2">
               <v-btn outline @click.native="addCourseFor"><v-icon>add_box</v-icon>&nbsp;เพิ่ม</v-btn>
               </div>
             </v-flex>
           </v-layout>
           <template v-for="(data,index) in courseFor">
             <v-layout :key="index">
               <v-flex xs11>
                 <!-- <v-text-field disabled :value="data" label="สิ่งที่ผู้เรียนจะได้รับ" hint="เช่น เนื้อหาวิชาบทที่ 1 เรื่องคอมพิวเตอร์เบื้องต้น"></v-text-field> -->
                 <ul>
                   <li><v-card flat>{{data}}</v-card></li>
                 </ul>
               </v-flex>
               <v-flex xs1>
                 <div class="mt-2">
                   <v-btn icon @click.native="courseFor.splice(index, 1)"><v-icon >delete</v-icon></v-btn>
                 </div>
               </v-flex>
             </v-layout>
           </template>


        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  methods: {
    addTargetStudent () {
      if (this.targetStudentModel !== '' && this.targetStudents.length < 5) {
        this.targetStudents.push(this.targetStudentModel)
        this.targetStudentModel = ''
      }
    },
    addCourseFor () {
      if (this.courseForModel !== '' && this.courseFor.length < 5) {
        this.courseFor.push(this.courseForModel)
        this.courseForModel = ''
      }
    }
  },
  data () {
    return {
      targetStudentModel: '',
      targetStudents: [],
      courseForModel: '',
      courseFor: []
    }
  }
}
</script>
