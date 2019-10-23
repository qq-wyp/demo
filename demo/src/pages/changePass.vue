<template>
  <div class="pass">
    <div class="box">
      <span class="sp1">账号</span>
      <el-input v-model="user.name" disabled></el-input>
    </div>
    <div class="box">
      <span class="sp1">原始密码</span>
      <el-input placeholder="请输入密码" v-model="user.oldpass" show-password></el-input>
    </div>
    <div class="box">
      <span class="sp1">新密码</span>
      <el-input placeholder="请输入密码" v-model="user.newpass" show-password></el-input>
    </div>
    <div class="box">
      <span class="sp1">确认密码</span>
      <el-input placeholder="请输入密码" v-model="confirmpass" show-password></el-input>
    </div>
    <el-button class="btn" @click="xiug">修改</el-button>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
        name: sessionStorage.getItem("username"),
        oldpass: "",
        newpass: ""
      },
      confirmpass: ""
    };
  },  
  methods: {
    xiug() {
      this.$axios({
        method: "post",
        url: API.changePassManage,
        data: this.user
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            type: "success",
            message: res.data.info
          });
          this.$router.push('/index')
        }
        this.$message({
          type: "success",
          message: res.data.info
        });
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.box {
  width: 95%;
  margin: 10px auto;
  display: flex;

  .sp1 {
    width: 250px;
    text-align: center;
    line-height: 40px;
    color: #cccccc;
  }

  &>>> .el-input__inner {
    flex: 1;
  }
}

.btn {
  display: block;
  margin: 10px auto;

  &:hover {
    background-color: $left;
    border: 1px solid $left;
  }
}
</style>