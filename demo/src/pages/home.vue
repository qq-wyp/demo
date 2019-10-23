<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
      <el-tab-pane label="家教banner" name="first">
        <v-add @click.native="add"></v-add>
        <!-- 添加 -->
        <el-table :data="home" height="250" border style="width: 80%;margin:20px auto;">
          <el-table-column label="序号" width="180">
            <template slot-scope="scope">{{scope.$index}}</template>
          </el-table-column>
          <el-table-column label="图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.img" class="img" />
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 分割线 -->
      <el-tab-pane label="人员管理" name="second">
        <v-add @click.native="add2"></v-add>
        <!-- <el-select v-model="value" placeholder="请选择" class="title">
      
          <el-option label="全部" :value="value"></el-option>
          <el-option v-for="item in ???" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>-->
        <!--  -->
        <el-select v-model="value" placeholder="请选择" class="select">
          <!-- label-用户看的 value-自己看的-->
          <el-option label="全部" value></el-option>
          <el-option v-for="item in types" :key="item.value" :label="item.name" :value="item.id"></el-option>
        </el-select>

        <!--  -->
        <el-table
          :data="ren"
          height="250"
          border
          style="width: 80%;margin:20px auto;"
          class="table"
        >
          <el-table-column label="序号" width="180">
            <template slot-scope="scope">{{scope.$index}}</template>
          </el-table-column>
          <el-table-column label="名称" width="180">
            <template slot-scope="scope">{{scope.row.name}}</template>
          </el-table-column>
          <el-table-column label="电话" width="180">
            <template slot-scope="scope">{{scope.row.tel}}</template>
          </el-table-column>
          <el-table-column label="价格">
            <template slot-scope="scope">{{scope.row.price}}</template>
          </el-table-column>
          <el-table-column label="年龄">
            <template slot-scope="scope">{{scope.row.age}}</template>
          </el-table-column>
          <el-table-column label="学历">
            <template slot-scope="scope">{{scope.row.edu}}</template>
          </el-table-column>
          <el-table-column label="服务类型">
            <template slot-scope="scope">{{scope.row.type}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="look(scope.row.id)">查看</el-button>
              <el-button type="danger" @click="del2(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- -------- -->
    <v-homeadd v-show="$store.state.homeState" @work="parentMethod"></v-homeadd>
    <v-renyadd v-show="$store.state.renState"></v-renyadd>
  </div>
</template>
<script>
/* age: "1"
city: "1"
edu: "小学"
experience: "1"
id: "1571819259291277333"
img: "1"
info: "1"
len: "1"
likeNum: "1"
name: "aaaaaaaaaaaaaaaaaaaaaaaaa"
price: "1"
qualification: "身份证,学位证,健康证"
readNum: "1"
tel: "1"
type: "保姆,钟点工,保洁,新居开荒,月嫂"
vNum: "1"
year: "1" */
import vHomeadd from "../views/home-add";
import vRenyadd from "../views/reny-add";
import API from "../common/js/API";
export default {
  data() {
    return {
      activeName: "first",
      home: [],
      ren: [],
      value: "",
      types: []
    };
  },
  methods: {
    handleClick() {},
    init0(params) {
      this.$axios({
        method: "get",
        url: API.homeBanner,
        params: params
      }).then(res => {
        this.home = res.data.data;
      });
    },
    init2(params) {
      this.$axios({
        method: "get",
        url: API.findHomeWorker,
        params: params
      }).then(res => {
        this.ren = res.data.data;
      });
    },
    add() {
      this.$store.dispatch("homeState1");
    },
    add2() {
      this.$store.dispatch("renState1");
    },
    del(id) {
      this.$axios({
        method: "get",
        url: API.delHomeBanner,
        params: { id }
      }).then(res => {
        if (res.data.isok) {
          this.init0({});
        }
        this.$message({
          type: "success",
          message: res.data.info
        });
      });
    },
    parentMethod() {
      this.init0({});
    }
  },
  mounted() {
    this.init0({});
    this.init2({});
  },
  components: {
    vHomeadd,
    vRenyadd
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
.img {
  height: 70px;
  width: 50px;
}

// ----------
.select {
  width: 800px;
  display: block;
  margin: 0 auto;
}


</style>