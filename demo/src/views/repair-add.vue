<template>
  <div class="add" @click.self="cancel">
    <div class="box">
      <div class="title">
        <span class="sp1">添加维修</span>
        <span class="sp2" @click.self="cancel">X</span>
      </div>
      <div class="check">
        <span class="sp1">名称</span>
        <input type="text" placeholder="名称" v-model="user.name" />
      </div>
      <div class="check">
        <span class="sp1">评分</span>
        <input type="number" placeholder="0-5分之间" v-model="user.score" />
      </div>
      <div class="check">
        <span class="sp1">类型</span>
        <input type="text" placeholder="维修类型" v-model="user.type" />
      </div>
      <div class="check">
        <span class="sp1">点赞数量</span>
        <input type="number" placeholder="点赞数量" v-model="user.likeNum" />
      </div>
      <div class="check">
        <span class="sp1">关注人数</span>
        <input type="number" placeholder="关注人数" v-model="user.readNum" />
      </div>
      <div class="check">
        <span class="sp1">商家地址</span>
        <input type="text" placeholder="商家地址" v-model="user.address" />
      </div>
      <div class="check">
        <span class="sp1">距离</span>
        <input type="text" placeholder="eg:4.2km" v-model="user.len" />
      </div>
      <div class="check">
        <span class="sp1">商家信息</span>
        <input type="text" placeholder="商家信息" v-model="user.info" />
      </div>
      <div class="check">
        <span class="sp1">电话</span>
        <input type="tel" placeholder="eg:400-100-1000" v-model="user.tel" />
      </div>
      <el-row class="btn">
        <el-button class="qx" @click="cancel">取消</el-button>
        <el-button class="tj" @click="add" v-show="!p">添加</el-button>
        <el-button class="tj" @click="xiugai" v-show="p">修改</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  props: ["p"],
  data() {
    return {
      /* 必填： name 名称 score 几颗星 type 电脑、手机、。。。 address 地址 tel 电话 len 距离 likeNum 好评人数 readNum 关注数 info 商家信息 */
      user: {
        name: "",
        score: "",
        type: "",
        info: "",
        likeNum: "",
        readNum: "",
        address: "",
        len: "",
        tel: ""
      },
      state: "",
    };
  },
  mounted() {
    this.Event.$on("chufa", e => {
      console.log("被触发了");
      console.log(e);
      this.user = e;
    });
    this.Event.$on('qingkong',()=>{
      this.user={};
    })
  },
  methods: {
    cancel() {
      this.$store.dispatch("reState0");
    },
    add() {
      this.$store.dispatch("reState0");
      this.$axios({
        method: "get",
        url: API.addRepair,
        params: this.user
      }).then(res => {
        if (res.data.isok) {
          this.$emit("selfMet");
          this.$message({
            type: "success",
            message: res.data.info
          });
        } else {
          this.$message({
            type: "error",
            message: res.data.info
          });
        }
      });
    },
    xiugai(){
       this.$axios({
        method:'get',
        url: API.updateRepair,
        params: this.user,
      }).then(res=>{
         this.$store.dispatch("reState0");
        if(res.data.isok){
         this.$message({
            type: "success",
            message: res.data.info
          });
        }
      })
    }
  },
  watch: {
    user: {
      handler() {
        if (this.user.score <= 0) {
          this.user.score = 0;
        }
        if (this.user.score >= 5) {
          this.user.score = 5;
        }
        if (this.user.count < 0) {
          this.user.count = 0;
        }
        if (this.user.likeNum < 0) {
          this.user.likeNum = 0;
        }
        if (this.user.readNum < 0) {
          this.user.readNum = 0;
        }
      },
      deep: true
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.add {
  width: 100vw;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0px;
  top: 0;
  z-index: 2;
}

.box {
  width: 700px;
  height: 70vh;
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

.btn {
  position: absolute;
  right: 20px;
  bottom: 15px;
}
</style>