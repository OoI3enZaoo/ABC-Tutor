<template>
<div class="base64-upload">
  sdsd
  <img :src="src"
    :style="imageStyle"/>
  <input type="file"
    accept="image/*"
    @change="onChange" />
</div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    imageStyle: Object
  },
  data() {
    return {
      src: this.imageSrc
    }
  },
  methods: {
    onChange(event) {
      if (event.target.files && event.target.files[0]) {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.addEventListener('load', e => {
          this.src = e.target.result
          let [, base64] = this.src.split(',')
          this.$emit('change', {
            size: file.size,
            type: file.type,
            name: file.name,
            base64: base64
          })
        })
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style scoped>
.base64-upload {
  position: relative;
  cursor: pointer;
}
img {
  width: 100%;
  height: 100%;
  margin-left:80px;
  text-align: center;
}
input {
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left:80px;
  text-align: center;
  top: 0;
  right:0;
  opacity: 0;
}
</style>
