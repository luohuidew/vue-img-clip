# vue-img-clip

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
**data**：传入一个数组，包含一个或多个对象，每个对象包含图片地址和链接跳转地址，必选<br>
**interval**：轮播动画时间，可选（默认3000ms）<br>
**target**：链接跳转方式，可选（默认_self）<br>
**width**：轮播图宽度，可选（默认800px）<br>
**height**：轮播图高度，可选（默认400px）<br>
**name**：轮播图切换动画模式，有左右滑动（move）和淡入淡出（fade）两种动画切换模式，可选（默认move）<br>

## 实例
首先在项目的入口文件（main.js）中引入
```
import uplodaImg from 'vue-img-clip'
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



