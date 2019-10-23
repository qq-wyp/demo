<template>
  <div class="banner">
    <el-tabs v-model="activeName" class="tab">
      <v-add @click.native="add" class="add" v-show="isbanner"></v-add>
      <v-add @click.native="add1" v-show="istype"></v-add>
      <v-add @click.native='add2'  class="add" v-show="istop"></v-add>
      <el-tab-pane label="家教banner" name="first">
        <table>
          <thead>
            <td style="width:24.5%">序号</td>
            <td style="width:24.4%">图片</td>
            <td style="width:24.5%">描述</td>
            <td style="width:25.7%">操作</td>
          </thead>
        </table>
        <div class="tbody">
          <table>
            <tr v-for="(item,i) in d" :key="item.id">
              <td>{{i+1}}</td>
              <td>
                <img :src="item.img" alt />
              </td>
              <td>{{item.des}}</td>
              <td>
                <el-button type="danger" @click="open(item.id)">删除</el-button>
               
              </td>
            </tr>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="家教类型" name="second">
        <table>
          <thead>
            <td style="width:24.5%">序号</td>
            <td style="width:24.4%">图片</td>
            <td style="width:24.5%">类型</td>
            <td style="width:25.7%">操作</td>
          </thead>
        </table>
        <div class="tbody">
          <table>
            <tr v-for="(item,i) in ty" :key="item.id">
              <td>{{i+1}}</td>
              <td>
                <img :src="item.img" alt />
              </td>
              <td>{{item.type}}</td>
              <td>
                <el-button type="danger" @click="open(item.id)">删除</el-button>
              
              </td>
            </tr>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="家教排行" name="third">
        <table>
          <thead id="paihang">
            <td >序号</td>
            <td >图片</td>
            <td >报名人数</td>
            <td >授课机构</td>
            <td >操作</td>
            <td class="tiao"></td>
            <table></table>
          </thead>
        </table>
        <div class="tbody" id="phbody">
          <table>
            <tr v-for="(item,i) in top" :key="item.id">
              <td>{{i+1}}</td>
              <td>
                <img :src="item.img" alt />
              </td>
              <td>{{item.num}}</td>
               <td>
                <img :src="item.teacherImg" alt />
              </td>
              <td>
                <el-button type="danger" @click="open(item.id)">删除</el-button>
              </td>
            </tr>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <v-teachertianjia v-show="$store.state.istrue"></v-teachertianjia>
    <v-teachertianjia1 v-show="$store.state.teacher1"></v-teachertianjia1>
    <v-teachertianjia2 v-show="$store.state.teacher2"></v-teachertianjia2>
  
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import API from "../common/js/API";
export default {
  data() {
    return {
      activeName: "first",
      isbanner: true,
      istype: "",
      istop: "",
      d: [],
      ty: [],
      top: []
    };
  },
  methods: {
    init() {
      this.$axios({
        method: "get",
        url: API.teacherBanner,
        params: {}
      }).then(res => {
        this.d = res.data.data;
      });
    },
    // -----分割线------
    init2() {
      this.$axios({
        method: "get",
        url: API.teacherType ,
        params: {}
      }).then(res => {
        this.d = res.data.data;
      });
    },
    // -----分割线------
    init3() {
      this.$axios({
        method: "get",
        url: API.teacherTop,
        params: {}
      }).then(res => {
        this.d = res.data.data;
      });
    },
  
    add() {
      this.$store.dispatch("changeState1");
    },
    add1() {
      this.$store.dispatch("changeState2");
    },
    add2() {
      this.$store.dispatch("changeState3");
    },
    open(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
         
          if(this.activeName=='first'){
             this.$axios({
            method: "get",
            url: API.delTeacherBanner,
            params: {
              id: id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init();
            }
          });
          }
          //---------分割线-------
          if(this.activeName=='second'){
             this.$axios({
            method: "get",
            url: API.delTeacherType,
            params: {
              id: id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init2();
            }
          });
          }
          //---------分割线-------
          if(this.activeName=='third'){
             this.$axios({
            method: "get",
            url: API.delTeacherTop,
            params: {
              id: id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init3();
            }
          });
          }
        
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(error => {});
    }
   
  },
  mounted() {
    this.init();
  },
  watch: {
    activeName() {
      switch (this.activeName) {
        case "first":
          this.isbanner = true;
          this.istype = false;
          this.istop = false;
          break;
        case "second":
          this.isbanner = false;
          this.istype = true;
          this.istop = false;
          this.$axios({
            method: "get",
            url: API.teacherType,
            params: {}
          }).then(res => {
            this.ty = res.data.data;
          });
          break;
        case "third":
          this.isbanner = false;
          this.istype = false;
          this.istop = true;
          this.$axios({
            method: "get",
            url: API.teacherTop,
            params: {}
          }).then(res => {
            this.top = res.data.data;
          });
          break;
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.tab {
  width: 90%;
  margin: 0 auto;
}

._head {
  color: $head;
}

.banner >>>.el-tabs__item.is-active {
  color: $head;
}

.banner >>> .el-tabs__active-bar {
  background-color: $head;
}

.banner >>>.el-tabs__item {
  font-size: 17px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.tbody {
  max-height: 300px;
  overflow-y: scroll;

  img {
    width: 130px;
    height: 100%;
    margin: 10px 0;
  }

  td {
    height: 100px;
  }
}

td {
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-indent: 15px;
}

.el-button--danger {
  margin-left: 15px;
}

.el-button--danger:hover {
  background-color: $left;
  border-color: $left;
}

tr:hover {
  background-color: $xz;
}

.add {
  margin-bottom: 10px;
}
#paihang{
  td{
    width 250px
  }
  .tiao{
    width 16px
  }
}
#phbody{
  td{
    width 250px
  }
}
</style>