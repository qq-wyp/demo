<template>
  <div class="repair">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
      <el-tab-pane label="维修" name="first">
        <v-add @click.native="add"></v-add>
        <!-- 添加 -->
        <el-table :data="repairs" height="250" border style="width: 80%;margin:20px auto;">
          <el-table-column label="序号" width="180">
            <template slot-scope="scope">{{scope.$index}}</template>
          </el-table-column>
          <el-table-column label="维修名称" width="180">
            <template slot-scope="scope">{{scope.row.name}}</template>
          </el-table-column>
          <el-table-column label="电话" width="180">
            <template slot-scope="scope">{{scope.row.tel}}</template>
          </el-table-column>
          <el-table-column label="类型">
            <template slot-scope="scope">{{scope.row.type}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="look(scope.row)">查看</el-button>
              <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 分割线 -->
      <el-tab-pane label="维修评论" name="second">
        <el-select v-model="value" placeholder="请选择" class="title">
          <!-- label-用户看的 value-自己看的-->
          <el-option label="全部" value></el-option>
          <el-option v-for="item in repairs" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>
        <el-table :data="tableData" height="250" border style="width: 80%;margin:20px auto;">
          <el-table-column label="序号" width="180">
            <template slot-scope="scope">{{scope.$index}}</template>
          </el-table-column>
          <el-table-column label="用户名称" width="180">
            <template slot-scope="scope">{{scope.row.name}}</template>
          </el-table-column>
          <el-table-column label="评论内容" width="180">
            <template slot-scope="scope">{{scope.row.content}}</template>
          </el-table-column>
          <el-table-column label="时间">
            <template slot-scope="scope">{{scope.row.time|formatDate}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" @click="del2(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- -------- -->
    <v-repairstate :p="pp" v-show="$store.state.reState" @selfMet="parentMethod"></v-repairstate>
  </div>
</template>
<script>
import API from "../common/js/API";
import vRepairstate from "../views/repair-add";
export default {
  data() {
    return {
      activeName: "first",
      repairs: [],
      value: "",
      tableData: [],
      addRep: [],
      pp: false
    };
  },
  mounted() {
    this.getComment({});
    this.init0();
  },
  methods: {
    handleClick(tab, event) {},
    init0() {
      this.$axios({
        url: API.findRepair
      }).then(res => {
        this.repairs = res.data.data;
      });
    },
    init() {
      this.$axios({
        method: "get",
        url: API.addRepair,
        params: this.addRep
      })
        .then(res => {
          if (res.data.code == "-1") {
            this.$message({
              type: "success",
              message: res.data.info
            });
          }
        })
        .catch(error => {});
    },

    getComment(params) {
      this.$axios({
        url: API.findRepairComment,
        method: "get",
        params: params
      }).then(res => {
        this.tableData = res.data.data;
      });
    },

    add() {
      this.$store.dispatch("reState1");
      this.init();
      this.pp = false;
      this.Event.$emit('qingkong')
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
            url: API.delRepair,
            params: {
              id: id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init0();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {});
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
            url: API.delRepairComment,
            params: {
              id: id
            }
          }).then(res => {
            console.log(res);
            if (res.data.isok) {
              getComment({});
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          });
        })
        .catch(() => {});
    },
    look(message) {
      this.$store.dispatch("reState1");
      this.pp = true;
      this.Event.$emit("chufa", message);
    },
    parentMethod() {
      this.init0();
    }
  },
  watch: {
    value() {
      this.getComment({
        id: this.value
      });
    }
  },
  components: {
    vRepairstate
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
.title {
  width: 65%;
  display: block;
  margin: 0 auto;
}
</style>