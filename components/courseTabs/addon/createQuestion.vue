<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-btn primary dark slot="activator">{{title}}</v-btn>
      <v-card>
        <v-toolbar dark class="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{this.title}}</v-toolbar-title>
        </v-toolbar>
        <template v-if="type==1">
            <v-container>
              <br><br>
              <v-text-field v-model="content.title" solo label="พิมพ์หัวข้อคำถาม">
              </v-text-field>
              <br>
              <quill v-model="content.description"></quill>
            <div class="text-xs-right">
              <v-btn primary :disabled="!isDataNotNull" @click.native="createQuestion(1)">ตั้งคำถาม</v-btn>
            </div>
            </v-container>
        </template>
        <template v-else>
            <v-container>
              <br><br>
              <p class="headline">การประกาศของเจ้าของคอร์ส</p>
              <br>
               <quill v-model="content.description"></quill>
            <div class="text-xs-right">
              <v-btn primary :disabled="!isDataNotNull" @click.native="createQuestion(2)">ตั้งคำถาม</v-btn>
            </div>
            </v-container>
        </template>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  import quill from '../../quill'
  export default {
    props: ['title', 'type'],
    components: {
      quill
    },
    data () {
      return {
        dialog: false,
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
      createQuestion (type) {
        this.$emit('result', this.content)
      }
    },
    computed: {
      isDataNotNull () {
        if (this.type === '1') {
          return this.content.title !== '' && this.content.description !== ''
        } else {
          return this.content.description !== ''
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
