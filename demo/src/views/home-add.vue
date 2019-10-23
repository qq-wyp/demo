<template>
  <div class="add" @click.self="cancel">
    <div class="box" >
      <div class="biaoti">
        <span class="sp1">添加维修</span>
        <span class="sp2" @click.self="cancel">X</span>
      </div>
      <div class="title">
        <span class="sp1">图片</span>
        <input type="text" placeholder="添加图片路径" v-model="img" />
      </div>
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
      img: ""
    };
  },
  methods: {
    cancel() {
      this.$store.dispatch("homeState0");
    },
    add() {
      this.$store.dispatch("homeState0");
      this.$emit("tianjia", this.user);
      this.$axios({
        method: "get",
        url: API.addHomeBanner,
        params: {
          img: this.img
        }
      }).then(res => {
        if (res.data.info) {
          this.$message({
            type: "success",
            message: res.data.info
          });
        }
        if (res.data.isok) {
          this.$emit("work");
        }
      });
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.add {
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
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translateX(-50%);
}

.title {
  overflow: hidden;
  width: 90%;
  margin: 10px auto;
  margin-top: 70px;

  input {
    float: right;
    width: 88%;
    height: 30px;
    border: 1px solid #cccccc;
    border-radius: 3px;
  }

  .sp1 {
    width: 10%;
    float: left;
    text-align: center;
    margin-top: 5px;
    color: $zhi;
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

//---------
.biaoti {
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
</style>