<template>
  <div class="about">
    <el-button @click="showDialog">点击我</el-button>
    <span>{{ userInfo.name }}</span>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="15">
            <el-form-item label="活动名称">
              <el-input style="height:38px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2" :offset="2">
            <el-button style="padding:0px !important;width:100%;height:38px"
              >ICP</el-button
            >
          </el-col>
          <el-col :span="5">
            <el-input style="height:38px"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="15">
            <el-form-item label="活动名称">
              <el-input style="height:38px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2" :offset="2">
            <el-button style="padding:0px !important;width:100%;height:38px"
              >ICP</el-button
            >
          </el-col>
          <el-col :span="5">
            <el-input style="height:38px"></el-input>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      form: {},
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        }
      ],
      userInfo: {
        name: "zengpeng"
      },
      dialogTableVisible: false
    };
  },
  methods: {
    showDialog() {
      this.dialogTableVisible = true;
      this.$set(this.userInfo, "name", "hi");
    }
  }
};
</script>
<style scoped></style>
