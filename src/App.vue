<template>
  <div>
    <uplodaImg :sliders="sliders"  />
  </div>
</template>

<script>
import uplodaImg from './lib/uplodaImg'
export default {
  name: 'app',
  data () {
    return {
      sliders: {
        maxWidth: 600, // 最大宽度
        maxHeight: 700, // 最大高度
        url: 'upload.php', // 上传地址 Post请求
        success: this.upImgSucess, // 上传成功回调
        error: this.upImgError, // 上传失败回调
        onProgress: this.imgUpOnprogess, //  进度回调
        NoImgType: this.NoImgType, // 图片类型错误回调
      }
    }
  },
  components: {
    uplodaImg
  },
  methods: {
    upImgSucess(res, file) {
      alert('上传成功')
    },
    upImgError(file) {
        alert('上传失败')
    },
    imgUpOnprogess(file, loaded,  total) {
    },
    NoImgType() {
      alert('必须是图片')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
