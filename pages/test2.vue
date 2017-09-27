<template>
  <div>
    <!-- <v-btn primary> heoo</v-btn> -->
      <!-- <fileupload style=""target="http://localhost:4000/api/upload/77" action="POST" enctype="multipart/form-data" v-on:progress="progress" v-on:start="startUpload" v-on:finish="finishUpload"></fileupload> -->

<v-container>

  <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-button>

</v-container>
  </div>
</template>
<script>
// import FileUpload from 'vue-simple-upload/dist/FileUpload'
export default {
}
</script>
