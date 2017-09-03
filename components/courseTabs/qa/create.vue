<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-btn primary dark slot="activator">ตั้งคำถาม</v-btn>
      <v-card>
        <v-toolbar dark class="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>ตั้งคำถาม</v-toolbar-title>
        </v-toolbar>

        <v-container>
          <br><br>
          <v-text-field solo label="พิมพ์หัวข้อคำถาม">

          </v-text-field>
          <br>

          <div class="quill-editor"
             :content="content"
             v-quill:myQuillEditor="editorOption">
        </div>
        <div class="text-xs-right">
          <v-btn primary >ตั้งคำถาม</v-btn>
        </div>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        content: '',
        editorOption: {
          // some quill options
          modules: {}
        }
      }
    }
  }
</script>
<style scoped>
.quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
