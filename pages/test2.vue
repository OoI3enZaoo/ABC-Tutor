<template>
  <div>
    <!-- <v-btn primary> heoo</v-btn> -->
      <!-- <fileupload style=""target="http://localhost:4000/api/upload/77" action="POST" enctype="multipart/form-data" v-on:progress="progress" v-on:start="startUpload" v-on:finish="finishUpload"></fileupload> -->

<v-container>
  <div class="text-xs-center">
    <form method="POST" :action="'http://localhost:4000/api/upload/'+id" onsubmit="" enctype="multipart/form-data">
          <input type="file" name="file"><br><br>
          <!-- <input type="submit" value="Upload"><br> -->
          <v-layout>
            <v-flex xs6 ml-5 offset-xs6>
              <v-text-field solo label="กรอกไอดี(ชื่อโฟลเดอร์)" v-model="id"></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-btn type="submit" primary :disabled="!isId"> upload</v-btn>
            </v-flex>
          </v-layout>
      </form>
  </div>
</v-container>
  </div>
</template>
<script>
// import FileUpload from 'vue-simple-upload/dist/FileUpload'
export default {
  data () {
    return {
      id: ''
    }
  },
  computed: {
    isId () {
      return this.id !== ''
    }
  }
}
</script>
