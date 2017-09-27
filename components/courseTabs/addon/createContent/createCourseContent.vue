<template>

    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-btn primary dark slot="activator">สร้างหลักสูตรเพิ่ม</v-btn>
      <v-card>
        <v-toolbar dark class="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>สร้างหลักสูตรเพิ่มเติม</v-toolbar-title>
        </v-toolbar>
            <v-container>
              <br><br>
              <v-text-field v-model="content.title" solo label="พิมพ์หัวของหลักสูตร">
              </v-text-field>
              <br>
              <v-text-field v-model="content.description" solo label="พิมรายละเอียดเนื้อหาของหลักสูตร"></v-text-field>

            <br>

             <MultipleFileUploader @createcourse="createcourse" postURL="http://localhost:4000/api/upload/newwe/fd" successMessagePath="" errorMessagePath="">


             </MultipleFileUploader>
             <!-- <div class="text-xs-right">
               <v-btn primary :disabled="!isDataNotNull" @click.native="createQuestion(1)">สร้างหลักสูตร</v-btn>
             </div> -->
          </v-container>
      </v-card>
    </v-dialog>
  
</template>
<script>
  // import MultipleFileUploader from 'vue2-multi-uploader'

import MultipleFileUploader from './MultipleFileUploader.vue'
  export default {
    components: {
      MultipleFileUploader
    },
    data () {
      return {
        dialog: false,
        id: '',
        options: {
          // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
          target: '//localhost:4000/api/upload/newwe/fd',
          testChunks: false
        },
        content: {
          title: '',
          description: ''
        },
        editorOption: {
          // some quill options
          modules: {}
        }
      }
    },
    methods: {
      createcourse (data) {
        this.dialog = false
        console.log('data: ' + data)

        this.content.title = ''
        this.content.description = ''
      },
      createQuestion (type) {
        this.dialog = false
        this.content.title = ''
        this.content.description = ''
      }
    },
    computed: {
      isDataNotNull () {
        if (this.type === '1') {
          return this.content.title !== '' && this.content.description !== ''
        } else {
          return this.content.description !== ''
        }
      },
      postUrl () {
        return 'http://localhost:4000/api/upload/'+ this.id + '/55'
      }
    }
  }
</script>
