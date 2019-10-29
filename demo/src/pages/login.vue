<template>
  <div class="login">
    <div class="box">
      <h2>登入</h2>
      <el-row class="demo-autocomplete">
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请选择角色"
          @select="handleSelect"
          clearable
        ></el-autocomplete>
      </el-row>
      <el-input v-model="name" placeholder="请输入账号" class="inp"></el-input>
      <el-input placeholder="请输入密码" v-model="pass" show-password class="inp"></el-input>
      <el-button class="dr" @click.native="dengru">登录</el-button>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      restaurants: [],
      state1: "",
      name: "",
      pass: "",
      type: "0"
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [{ value: "超级管理员" }, { value: "普通管理员" }];
    },
    handleSelect(item) {},
    dengru() {
      window.sessionStorage.setItem("username", this.name);
      if (this.state1 == "超级管理员") {
        this.type = "0";
        this.$axios({
          method: "post",
          url: API.login,
          data: {
            type: this.type,
            name: this.name,
            pass: this.pass
          }
        })
          .then(res => {
            if (res.data.isok) {
              window.sessionStorage.setItem("type", res.data.type);
              if (res.data.type == "0") {
                this.$router.push("/index/manage");
                this.$store.dispatch("xianshistate0");
              }
            } else {
              alert(res.data.info);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }

      if (this.state1 == "普通管理员") {
        this.type = "1";
        this.$axios({
          method: "post",
          url: API.login,
          data: {
            type: this.type,
            name: this.name,
            pass: this.pass
          }
        }).then(res => {
          if (res.data.isok) {
            window.sessionStorage.setItem("type", res.data.type);
            if (res.data.type == "1") {
              this.$router.push("/index");
              this.$store.dispatch("xianshistate1");
            }
          } else {
            alert(res.data.info);
          }
        });
      }
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: $left;

  h2 {
    color: $left;
    font-family: '宋体';
    font-weight: bold;
    font-size: 45px;
    margin: 5px auto;
  }
}

.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  background-color: $login;
  text-align: center;
}

.inline-input {
  width: 80%;
}

.inp {
  width: 80%;
  margin-top: 10px;
}

.dr {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  background-color: $huanglv;
  border: none;
  color: white;
  font-size: 16px;

  &:hover {
    background-color: $left;
    color: $head;
  }
}
</style>