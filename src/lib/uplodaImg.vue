<template>
  <div>
    <label for="file" class="labelFile">选择图片</label>
    <input id="file" type="file" ref="files" class="imgfile">
    <!--<img v-for="item in imgdata" :src="item" alt=""/>-->
  </div>
</template>

<script>
export default {
  props: {
    sliders: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      maxWidth: this.sliders.maxWidth,
      maxHeight: this.sliders.maxHeight,
      url: this.sliders.url,
      imgdata: [],
    }
  },
  computed: {
    prevIndex () {
    },
  },
  methods: {

  },
  mounted () {
    const eleFile  = this.$refs.files;

// 压缩图片需要的一些元素和对象
    var reader = new FileReader(), img = new Image();
    var url = this.url;
    var widthinput = this.maxWidth;
    var heightinput = this.maxHeight;
    var errorFc = this.sliders.error;
    var successFc = this.sliders.success;
    var onProgressFc = this.sliders.onProgress;
    var NoImgTypeFc = this.sliders.NoImgType;
    var selefimgdata = this.imgdata;
// 选择的文件对象
    var file = null;

// 缩放图片需要的canvas
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

// base64地址图片加载完毕后
    img.onload = function () {
      // 图片原始尺寸
      var originWidth = this.width;
      var originHeight = this.height;
      // 最大尺寸限制
      var maxWidth = widthinput || 400, maxHeight = heightinput || 400;
      // 目标尺寸
      var targetWidth = originWidth, targetHeight = originHeight;
      // 图片尺寸超过400x400的限制
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
          // 更宽，按照宽度限定尺寸
          targetWidth = maxWidth;
          targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
          targetHeight = maxHeight;
          targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
      }

      // canvas对图片进行缩放
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      // 清除画布
      context.clearRect(0, 0, targetWidth, targetHeight);
      // 图片压缩
      context.drawImage(img, 0, 0, targetWidth, targetHeight);
      // canvas转为blob并上传
      canvas.toBlob(function (blob) {
        // 图片ajax上传
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
          // 上传中
          xhr.upload.addEventListener("progress", function (e) {
            onProgressFc(file, e.loaded, e.total);
          }, false);
        }
        // 文件上传成功
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              successFc(xhr.responseText, file)
            } else {
              errorFc(file)
            }
          }
        };
        // 开始上传
        xhr.open("POST", url, true);
        xhr.send(blob);
      }, file.type || 'image/png');
    };

// 文件base64化，以便获知图片原始尺寸
    reader.onload = function(e) {
      img.src = e.target.result;
      selefimgdata.push(e.target.result)
    };
    eleFile.addEventListener('change', function (event) {
      file = event.target.files[0];
      // 选择的文件是图片
      if (file.type.indexOf("image") == 0) {
        reader.readAsDataURL(file);
      } else {
        NoImgTypeFc(file)
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imgfile {display: none}
  .labelFile{
    display: inline-block;
    padding: 12px 20px;
    background-color: cornflowerblue;
    color: #fff;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background-color: #409eff;
    border-color: #409eff;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
  }
</style>
