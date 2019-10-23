<template>
  <div class="ren" @click.self="cancel">
    <div class="box"  style="height:500px;overflow-y:auto;">
      <div class="title">
        <span class="sp1">添加维修</span>
        <span class="sp2" @click.self="cancel">X</span>
      </div>
      <div class="check">
        <span class="sp1">姓名</span>
        <input type="text" placeholder="姓名" v-model="user.name" />
      </div>
      <div class="check">
        <span class="sp1">年龄</span>
        <input type="number" placeholder="0-100之间" v-model="user.age" />
      </div>
      <div class="check">
        <span class="sp1">电话</span>
        <input type="text" placeholder="eg:13344445555" v-model="user.tel" />
      </div>
      <div class="check">
        <span class="sp1">资格认证</span>
        <div class="zige">
          <span>
            <label for="sf">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="身份证" id="sf" />
            <em>身份证</em>
          </span>
          <span>
            <label for="xw">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="学位证" id="xw" />
            <em>学位证</em>
          </span>
          <span>
            <label for="jk">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="健康证" id="jk" />
            <em>健康证</em>
          </span>
          <span>
            <label for="sg">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="上岗证" id="sg" />
            <em>上岗证</em>
          </span>
          <span>
            <label for="myhl">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="母婴护理师证" id="myhl" />
            <em>母婴护理师证</em>
          </span>
          <span>
            <label for="crs">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="催乳师证" id="crs" />
            <em>催乳师证</em>
          </span>
          <span>
            <label for="chhf">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="产后恢复师证" id="chhf" />
            <em>产后恢复师证</em>
          </span>
          <span>
            <label for="zljz">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="助理家政管理师" id="zljz" />
            <em>助理家政管理师</em>
          </span>
          <span>
            <label for="jzgl">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="家政管理师" id="jzgl" />
            <em>家政管理师</em>
          </span>
          <span>
            <label for="gjjzgl">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="高级家政管理师" id="gjjzgl" />
            <em>高级家政管理师</em>
          </span>
        </div>
      </div>
      <div class="check">
        <span class="sp1">服务项目</span>
        <div class="zige zige2">
          <span>
            <label for="bm">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="保姆" id="bm" />
            <em>保姆</em>
          </span>
          <span>
            <label for="yuesao">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="月嫂" id="yuesao" />
            <em>月嫂</em>
          </span>
          <span>
            <label for="zhongdian">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="钟点工" id="zhongdian" />
            <em>钟点工</em>
          </span>
          <span>
            <label for="baojie">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="保洁" id="baojie" />
            <em>保洁</em>
          </span>
          <span>
            <label for="jiadian">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="家电清洗" id="jiadian" />
            <em>家电清洗</em>
          </span>
          <span>
            <label for="xinju">
              <i @click="check"></i>
            </label>
            <input type="checkbox" v-model="msg" value="新居开荒" id="xinju" />
            <em>新居开荒</em>
          </span>
        </div>
      </div>
      <!-- --- -->
      <div class="check xueli">
        <span class="sp1">学历</span>
        <!--  -->
        <el-row class="demo-autocomplete">
          <el-col :span="24">
            <el-autocomplete
              class="inline-input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="请选择学历"
              @select="handleSelect"
            ></el-autocomplete>
          </el-col>
        </el-row>
      </div>
     <div class="check">
        <span class="sp1">工作年限</span>
        <input type="number" placeholder="工作年限" v-model="user.year" />
      </div>
       <div class="check">
        <span class="sp1">级别</span>
        <input type="text" placeholder="eg:v3" v-model="user.vNum" />
      </div>
      <div class="check">
        <span class="sp1">价格</span>
        <input type="text" placeholder="eg:30元/小时" v-model="user.price" />
      </div>
      <div class="check">
        <span class="sp1">城市</span>
        <input type="text" placeholder="eg:武汉" v-model="user.city" />
      </div>
      <div class="check">
        <span class="sp1">经验</span>
        <input type="text" placeholder="eg:3年" v-model="user.experience" />
      </div>
      <div class="check">
        <span class="sp1">点赞数量</span>
        <input type="number" placeholder="点赞数量" v-model="user.likeNum" />
      </div>
       <div class="check">
        <span class="sp1">关注人数</span>
        <input type="number" placeholder="关注人数" v-model="user.readNum " />
      </div>
       <div class="check">
        <span class="sp1">自我评价</span>
        <input  placeholder="eg:吃苦能干" v-model="user.info " />
      </div>
      <div class="check">
        <span class="sp1">免冠照片</span>
        <input  placeholder="照片路径" v-model="user.img " />
      </div>
      <!-- --- -->
       <el-row class="btn">
        <el-button class="qx" @click="cancel">取消</el-button>
        <el-button class="tj" @click="add">添加</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
          likeNum:'',
          experience:'',
          readNum :'',
          len:'' ,
          info :'',
        tel: "",
        img: "",
        name: "",
        age: "",
        edu: "",
        year: "",
        vNum: "",
        price: "",
        city: ""
      },
      msg: [],

      //   -------
      restaurants: [],
      state1: "",
      state2: ""
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    check(e) {
      let target = e.target;
      let tarinp = target.parentNode.parentNode.children[1];
      if (!tarinp.checked) {
        target.classList.add("bg");
      } else {
        target.classList.remove("bg");
      }
    },
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
      return [
        { value: "小学", },
        { value: "初中",    },
        { value: "高中",},
        { value: "本科", },
        { value: "研究生", },
        { value: "博士", },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    cancel() {
      this.$store.dispatch("renState0");
    },
    add() {
      this.$store.dispatch("renState0");
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.ren {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0px;
  top: 0;
  z-index: 2;
}

.box {
  width: 700px;
  height: 900px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
}

.title {
  overflow: hidden;
  width: 90%;
  margin: 10px auto;
  padding-bottom: 30px;

  .sp1 {
    color: $head;
    float: left;
  }

  .sp2 {
    float: right;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: $del;
    }
  }
}

.check {
  width: 90%;
  margin: 10px auto;
  overflow: hidden;
  display: flex;

  .sp1 {
    box-sizing: border-box;
    padding-top: 3px;
    text-align: center;
    display: inline-block;
    width: 80px;
    color: $zhi;
  }

  &>input {
    flex: 1;
    height: 30px;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }

  .zige {
    flex: 1;
    height: 40px;
    color: $zhi;

    span {
      margin-left: 5px;

      i {
        cursor: pointer;
        display: inline-block;
        font-style: normal;
        width: 14px;
        height: 14px;
        border: 1px solid #cccccc;
        margin-right: 3px;
      }

      em {
        font-style: normal;
        font-size: 13px;
        vertical-align: 2px;
      }
    }

    input {
      display: none;
    }
  }

  .zige2 {
    box-sizing: border-box;
    padding-top: 6px;
  }
}

.tj {
  border: 1px solid #ccc;
  background-color: $huanglv;

  &:hover {
    background-color: $left;
    border: 1px solid $left;
  }
}

.qx {
  border: 1px solid #ccc;
  background-color: #fff;

  &:hover {
    background-color: $left;
    border: 1px solid $left;
  }
}



.bg {
  background-color: yellowgreen;
}
// -----
.xueli>>>.el-input__inner{
    width 550px
    height 35px
    border-radius 5px
}
.btn{
  margin-left 500px
  margin-bottom 30px
}
</style>