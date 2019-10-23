<template>
  <div class="banner">
    <v-add @click.native="add" class="add" v-show="true"></v-add>
    <table class="table1"  >
      <thead>
        <td>序号</td>
        <td>图片</td>
        <td>描述</td>
        <td>操作</td>
        <td class="tiao" style="width:13px">&nbsp;</td>
      </thead>
    </table>
    <div class="wrap">
      <table class="table2">
        <tr v-for="(item,i) in banner" :key="item.id">
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
    <v-bannertianjia v-show="$store.state.bannerstate"></v-bannertianjia>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      banner: []
    };
  },
  methods: {
    init() {
      this.$axios({
        method: "get",
        url: API.banner,
        params: {}
      }).then(res => {
        this.banner = res.data.data;
      });
    },
    add() {
      this.$store.dispatch("bannerstate1");
    },
    open(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "get",
            url: API.delBanner,
            params: {
              id: id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init();
            }
          });

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
  }
};
</script>

<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.banner >>>.el-tabs__item.is-active {
  color: $head;
}

.banner >>> .el-tabs__active-bar {
  background-color: $head;
}

.banner >>>.el-tabs__item {
  font-size: 17px;
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
  margin-left: 40px;
  margin-top: 10px;
}


// ----------
table{
     border-collapse:collapse
}
td{
    border 1px solid #cccccc
    font-size 14px
    text-indent 12px
}
.table1{
    width 80%
    margin 0 auto;
    td{
        color #cccccc
        width 300px
        height 50px
    }
}
.table2{
     td{
        color $zhi
        width 280px
        height 70px
        img{
          height 70px
        }
    }
    .btn{
        button:hover{
            background-color $left
            border 1px solid $left 
        }
    }
}
.wrap{
  width 80%
  height 100px
  overflow-y scroll
  margin 0 auto 
  height 200px
}

</style>

