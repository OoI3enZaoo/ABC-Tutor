<template>
  <div>
    <template v-for="data in $store.getters.COURSE_VOTE_FROM_COURSE_ID(courseId)">
      <template v-for="(star, index) in 5">
          <template v-if="data.avg.toFixed(0) > index" >
            <v-icon>star</v-icon>
          </template>
          <template v-else>
              <v-icon>star_border</v-icon>
          </template>
      </template>
       <span>{{data.avg.toFixed(1)}}</span><br>
      <span class="grey--text">คนโหวตทั้งหมด {{data.length}} คน</span>
    </template>
  </div>
</template>
<script>
export default {
  props: ['courseId']
}
</script>
