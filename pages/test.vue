<template>
  <div>
    <v-btn color="primary" @click.native="startRecordingg">Start Recording</v-btn>
    <button id="btn-stop-recording" disabled>Stop Recording</button><br>
    <video width="320" height="240" controls autoplay></video>
  </div>
</template>
<script>
// import RecordRTC from 'recordrtc
// import getScreenId from 'get-screen-id'
export default {
  created() {
    //do something after creating vue instance
    let a = []
    let str = "hello my name is ben"
    a[0] = {data1: str, 'data2': 'hello2'}

    console.log(a[0].data1)


  }
}
</script>
