<template>
  <div class="Pagination">
    <p>111111111111111</p>
    <div><i class="iconfont icon-dakai"></i></div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="pageSizes"
      :current-page.sync="page"
      :page-size="limit"
      :layout="layout"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    msg: String,
    total: {
      required: true,
      type: Number
    },
    page: {
      required: true,
      type: Number,
      default: 1
    },
    limit: {
      required: true,
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40];
      }
    },
    layout: {
      type: String,
      default: ""
    }
  },
  computed: {},
  watch: {
    layout: function(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    }
  },
  methods: {
    handleSizeChange() {
      this.$emit("change");
    },
    handleCurrentChange() {
      this.$emit("change");
    }
  }
};
</script>
<style scoped>
.title {
  color: red;
}
.Pagination {
  height: 500px;
}
</style>
