<template>
  <div class="page_upload">
    <el-dialog
      title="上传附件"
      :visible.sync="uploadVisible"
      class="uploadForm"
      @close="closeDialog"
      width="48%"
    >
      <el-row style="margin-bottom:10px">
        <el-col :span="14">
          <el-col :span="4" style="padding-top:6px;font-size:12px"
            ><span>附件上传:</span></el-col
          >
          <el-col :span="20">
            <el-upload
              ref="upload"
              action
              multiple
              :http-request="uploadFiles"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary"
                >选择文件</el-button
              >
              <el-button
                style="margin-left: 10px;"
                size="small"
                type="success"
                @click="submitUpload()"
                >上传附件</el-button
              >
            </el-upload>
          </el-col>
        </el-col>
      </el-row>
      <el-table
        :data="attachments"
        style="width: 100%;font-size:12px"
        border
        :header-cell-style="{ background: '#F5F7FA' }"
      >
        <el-table-column label="序号" align="center" width="100">
          <template slot-scope="props">
            <span>{{ props.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="fileName"
          label="文件名称"
          align="center"
          width="200"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="creationDate"
          label="上传时间"
          width="180"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="props">
            <el-button
              @click="down(props.row)"
              plain
              style="
                font-size: 12px;
                color:#3dc8c8;
                padding: 5px 10px !important;
                border:1px solid #0cbbbb;
                border-radius:0px !important;
                text-align: center;
              "
              >下载</el-button
            >
            <el-button
              @click="delFile(props.row)"
              plain
              style="
                font-size: 12px;
                color:#3dc8c8;
                padding: 5px 10px !important;
                border:1px solid #0cbbbb;
                border-radius:0px !important;
                text-align: center;
              "
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      uploadVisible:true,
      attachments: [],
      icp: "",
      periodId: "",
      type: "",
      file: []
    };
  },
  mounted() {
    console.log('111222')
  },
  filters: {},
  methods: {
    closeDialog() {
      this.file = [];
      this.$refs.upload.clearFiles();
    },
    //上传
    submitUpload() {
      let singleSize;
      let totalSize = 0;
      this._loading_ = true;
      let fd = new FormData(); // FormData 对象
      this.$refs.upload.submit();
      this.file.forEach(function(file) {
        singleSize = file.size / 1024 / 1024 < 100;
        if (!singleSize) {
          alert("上传文件大小不能超过 100MB");
          return false;
        }
        totalSize += singleSize;
        if (totalSize > 200) {
          alert("请求大小不能超过 200MB");
          return false;
        }
        fd.append("files", file);
      });
      fd.append("icp", this.icp);
      fd.append("periodId", this.periodId);
      fd.append("type", this.type);
      // let url = Config.serverHost() + "Epu/uploadEpuAccessory";
      // let config = {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // };
      // this.$http.post(url, fd, config).then(function(res) {
      //   if (res.data.isSucceed) {
      //     this._loading_ = false;
      //     this.$alert("上传成功", "Success", {
      //       confirmButtonText: "确定",
      //       type: "success"
      //     });
      //     this.file = [];
      //     this.$refs.upload.clearFiles();
      //     this.getAttachments(this.icp, this.periodId, this.type);
      //   } else {
      //     this.file = [];
      //     this._loading_ = false;
      //     this.$alert("上传失败", "提示", {
      //       confirmButtonText: "确定",
      //       type: "error"
      //     });
      //   }
      // });
    },
    uploadFiles(param) {
      this.file.push(param.file);
      console.log(param, "......");
      console.log(this.file, "file");
    }
    // getAttachments(icp, periodId, type) {
    //   console.log("hello world 6666");
    //   this.$http
    //     .get(
    //       Config.serverHost() +
    //         "Epu/getAccessory?icp=" +
    //         icp +
    //         "&periodId=" +
    //         periodId +
    //         "&type=" +
    //         type
    //     )
    //     .then(res => {
    //       if (res.data.isSucceed) {
    //         console.log(res.data.data, "....");
    //         this.attachments = res.data.data;
    //       } else {
    //         that.$alert("获取附件列表失败", "提示", {
    //           confirmButtonText: "确定",
    //           type: "error"
    //         });
    //       }
    //     });
    // },
    // down(item) {
    //   console.log(item, "item");
    //   let downloadElement = document.createElement("a"); // 新建一个DOM节点
    //   downloadElement.href = item.fileUrl;
    //   downloadElement.download = item.fileName; // 下载后文件名
    //   downloadElement.click(); // 点击下载
    // },
    // delFile(item) {
    //   this.$confirm("确认删除此文件吗?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       this.$http
    //         .get(Config.serverHost() + "Epu/delAccessory?fileId=" + item.fileId)
    //         .then(function(res) {
    //           if (res.data.isSucceed) {
    //             this.$message({
    //               type: "success",
    //               message: "删除成功!"
    //             });
    //             this.getAttachments(this.icp, this.periodId, this.type);
    //           } else {
    //             this.$alert("失败", "提示", {
    //               confirmButtonText: "确定",
    //               type: "error"
    //             });
    //           }
    //         });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
    // }
  }
};
</script>

<style scoped lang="scss">
.page_upload /deep/ .el-dialog__body {
  padding: 20px 40px 30px 40px !important;
}
</style>
