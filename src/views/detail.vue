<template>
  <div class="detail">
    <el-upload
      class="upload-demo"
      action
      :on-preview="handlePreview"
      :on-success="handleAvatarSuccess"
      :http-request="uploadFiles"
      :on-remove="handleRemove"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      console.log("删除");
    },
    handlePreview(file) {
      console.log(file);
      console.log("预览");
    },
    handleAvatarSuccess(file, fileList) {
      console.log("success");
      console.log(file, fileList);
    },
    uploadFiles(file) {
      console.log(file, "...........");
    }
  }
};
</script>
<style scoped>
.detail {
  height: 50px;
  width: 100%;
}
</style>
