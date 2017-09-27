<template>
  <div>
    <v-container>
      <v-card>
        <v-card-text>
          <p class="headline">เพิ่มรายละเอียดของคอร์ส</p>
          <quill></quill>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import quill from '../quill.vue'
export default {
  components: {
    quill
  }
}
</script>
