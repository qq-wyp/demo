<template>
  <div class="water">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
      <el-tab-pane label="水站" name="first">
        <v-add @click.native="add" v-show="true"></v-add>
        <table class="table1">
          <thead>
            <td>序号</td>
            <td>水站名称</td>
            <td>电话</td>
            <td>价格</td>
            <td>操作</td>
          </thead>
        </table>
        <table class="table2">
          <tr v-for="(item, i) in d" :key="item.id">
            <td>{{i+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.tel}}</td>
            <td>{{item.price}}</td>
            <td class="btn">
              <el-button @click="look(item.id)">查看</el-button>
              <el-button type="danger" @click="del(item.id)">删除</el-button>
            </td>
          </tr>
        </table>
      </el-tab-pane>
      <!-- 分割线 -->
      <el-tab-pane label="水站评论" name="second">
        <el-select v-model="value" class="pinglun">
          <el-option label="全部" value></el-option>
          <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>

        <table class="table1">
          <thead>
            <td>序号</td>
            <td>用户名称</td>
            <td>评论内容</td>
            <td>时间</td>
            <td>操作</td>
          </thead>
        </table>
        <table class="table2">
          <tr v-for="(item, i) in com" :key="item.id">
            <td>{{i+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.content}}</td>
            <td>{{item.time|formatDate}}</td>
            <td class="btn">
              <el-button type="danger" @click="del2(item.id)">删除</el-button>
            </td>
          </tr>
        </table>
      </el-tab-pane>
    </el-tabs>
    <!-- 分割线 -->
    <v-wateradd :m="message" :p='istrue' :pp='idss' v-show="$store.state.waterstate" @tianjia="parentMethod"></v-wateradd>
  </div>
</template>
<script>
import vWateradd from "../views/water-add";
import API from "../common/js/API";
export default {
  data() {
    return {
      idss:'',
      istrue:true,
      message: {},
      activeName: "first",
      d: [],
      com: [],
      //   ---------
      options: [],
      value: "",
      
    };
  },
  methods: {
    handleClick(tab, event) {},
    init() {
      this.$axios({
        method: "get",
        url: API.findWater
      }).then(res => {
        if (res.data.isok) {
          this.d = res.data.data;
        }
      });
    },
    init2() {
      this.$axios({
        method: "get",
        url: API.findComment
      }).then(res => {
        this.com = res.data.data;
        this.options = res.data.data;
      });
    },
    add() {
      this.istrue=true;
      this.$store.dispatch("waterstate1");
    },
    del(id) {
      this.$confirm("确认要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "get",
            url: API.delWater,
            params: {
              id: id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    del2(id) {
      this.$confirm("确认要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "get",
            url: API.delComment,
            params: {
              id: id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init2();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {});
    },
    look(id) {
      this.istrue=false;
      this.$store.dispatch("waterstate1");
      this.$axios({
        method: "get",
        url: API.findWater,
        params: {
          id: id
        }
      }).then(res => {
        this.message = res.data.data[0];
        console.log(this.message);
        this.idss=id;
      });
    },
    parentMethod(e) {
      this.$axios({
        method: "get",
        url: API.addWater,
        params: e
      })
        .then(res => {
          if (res.data.isok) {
            this.$message(res.data.info);
            this.init();
          } else {
            this.$message(res.data.info);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getComment(params) {
      this.$axios({
        url: "/api/findComment",
        method: "get",
        params: params
      }).then(res => {
        this.options = res.data.data;
      });
    }
  },
  mounted() {
    this.init();
    this.getComment({})
  },
  watch: {
    activeName() {
      if (this.activeName == "second") {
        this.init2();
      }
    },
    value(){
      this.getComment({
        waterId:this.value
      })
    }
  },
  components: {
    vWateradd
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.el-tabs {
  width: 90%;
  margin: 0 auto;
}

.water>>>.el-tabs__item.is-active {
  color: $head;
}

.water>>>.el-tabs__active-bar {
  background-color: $head;
}

.water>>>.el-tabs__item {
  font-size: 16px;
}

// ----------
table {
  border-collapse: collapse;
}

td {
  border: 1px solid #cccccc;
  font-size: 14px;
  text-indent: 12px;
}

.table1 {
  width: 80%;
  margin: 0 auto;

  td {
    color: #cccccc;
    width: 20%;
    height: 50px;
  }
}

.table2 {
  width: 80%;
  margin: 0 auto;

  td {
    color: $zhi;
    width: 20%;
    height: 70px;
  }

  .btn {
    button:hover {
      background-color: $left;
      border: 1px solid $left;
    }
  }
}

// -----
.pinglun {
  width: 70%;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>