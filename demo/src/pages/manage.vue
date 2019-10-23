<template>
  <div>
    <v-add @click.native="add" v-show="true" class="add"></v-add>
    <table class="table1">
      <thead>
        <td>序号</td>
        <td>姓名</td>
        <td>属性</td>
        <td>时间</td>
        <td>操作</td>
        <td style="width:16px">&nbsp;</td>
      </thead>
    </table>
    <div class="wrap">
      <table class="table2">
        <tr v-for="(item, i) in d" :key="item.id">
          <td>{{i+1}}</td>
          <td >{{item.name}}</td>
          <td>{{item.des}}</td>
          <td>{{item.time|formatDate}}</td>
          <td class="btn">
            <el-button @click="look(item.id)">查看</el-button>
            <el-button type="danger" @click="del(item.id)">删除</el-button>
          </td>
        </tr>
      </table>
    </div>
    <!-- ------------- -->
    <v-manageadd v-show="$store.state.managestate"></v-manageadd>
    <v-manageadd2 v-if="$store.state.managestate_" :ids="idd"></v-manageadd2>
  </div>
</template>
<script>
import vManageadd from "../views/manage-add";
import vManageadd2 from "../views/manage-add2";
import API from "../common/js/API";
export default {
  data() {
    return {
      d: [],
      idd: ""
    };
  },
  methods: {
    init() {
      this.$axios({
        method: "post",
        url: API.findManage,
        data: {}
      }).then(res => {
        this.d = res.data.data;
      });
    },
    add() {
      this.$store.dispatch("managestate1");
    },
    del(id) {
      this.$confirm("确认要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: API.delManage,
            data: {
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
        .catch(() => {});
    },
    look(id) {
      this.$store.dispatch("managestate1_");
      this.idd = id;
      //   this.Event.$emit("fasong", id);
    }
  },
  mounted() {
    this.init();

    if (this.$route.path.includes("manage")) {
      this.$store.dispatch("xianshistate0");
    }
  },
  components: {
    vManageadd,
    vManageadd2
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

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
  width 1000px
  margin: 0 auto;

  td {
    color: #cccccc;
    width: 20%;
    height: 50px;
  }
}

.wrap {
  width 1000px
  margin: 0 auto;
  max-height: 400px;
  overflow-y: scroll;
}

.table2 {
  td {
    color: $zhi;
    width 200px
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
.add {
  margin: 10px;
  margin-left: 30px;
}
</style>