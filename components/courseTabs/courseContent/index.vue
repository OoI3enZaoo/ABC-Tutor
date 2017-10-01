<template>
  <div>
    <v-container grid-list-lg>
      <div class="text-xs-right">
        <createCourseContent @contentcourse = "contentcourse"></createCourseContent>
      </div>
      <br>
      <template v-for="data in courseContent">
          <expansion :title="data.content_title" :description="data.content_des" :files="data.files" :contentId="data.content_id"></expansion>
      <br>
      </template>
<br><br><br><br>


    </v-container>
  </div>
</template>
<script>

import createCourseContent from './addon/createCourseContent.vue'
import expansion from './addon/expansion.vue'
export default {
  components: {
    createCourseContent,
    expansion
  },
  computed: {
    courseContent () {
      return this.$store.getters.COURSE_CONTENT(this.$route.params.id)
    }
  },
  methods: {
    contentcourse (str) {
      let data = str
      data.course_id = this.$route.params.id
      this.$store.dispatch('ADD_COURSE_CONTENT', data)
    }
  }
}
</script>
