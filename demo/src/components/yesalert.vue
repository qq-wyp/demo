<template>
  <el-button type="danger" @click="open2">删除</el-button>
</template>
<script>
import API from "../common/js/API";
export default {
  props: ["idss"],
  methods: {
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "get",
            url: API.delHomeWorker,
            params: {
              id: this.idss
            }
          }).then(res => {
            if (res.data.data.isok) {
              this.$emit("chushihua");
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {});
    }
  }
};
</script>
