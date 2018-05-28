# vue_upload_clip

> vue图片上传压缩插件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 参数配置

## 实例
首先在项目的入口文件（main.js）中引入
```
import uplodaImg from 'vue_upload_clip'
Vue.use(uplodaImg)
```

然后使用该组件
```
<uplodaImg :sliders="sliders"  />
```

```
      sliders: {
        maxWidth: 600, // 最大宽度
        maxHeight: 700, // 最大高度
        url: 'upload.php', // 上传地址 Post请求
        success: this.upImgSucess, // 上传成功回调
        error: this.upImgError, // 上传失败回调
        onProgress: this.imgUpOnprogess, //  进度回调
        NoImgType: this.NoImgType, // 图片类型错误回调
      }
```



