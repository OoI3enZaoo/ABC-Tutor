<template>
  <div class="text-xs-center">
    <v-container>
      <h4 class="headline">กำลังลงชื่อออก...</h4>
    </v-container>
  </div>
</template>
<script>
export default {
  asyncData ({ store, redirect }) {
    store.commit('setIsLogin', false)
    redirect('/')
  }
}
</script>
