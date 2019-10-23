<template>
  <div class="tianjia" @click.self="cancel">
    <div class="box">
      <p class="p" style="text-align:left">添加家教排行</p>
      <div class="div">
        <span style="margin-left:30px;">图片</span>
        <input type="text" placeholder="图片路径" v-model="user.img"  class="inp"/>
      </div>
       <div class="div">
        <span>机构图片</span>
        <input type="text" placeholder="机构图片路径" v-model="user.teacherImg"  class="inp"/>
      </div>
      <div class="div">
        <span>报名人数</span>
        <input type="text" placeholder="描述" v-model="user.num"   class="inp"/>
      </div>
      <el-row class="btn">
        <el-button class="qx" @click="cancel">取消</el-button>
        <el-button class="tj" @click="add">添加</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
import API from '../common/js/API'
export default {
    data(){
        return {
           user:{
             img:'',
             num:'',
             teacherImg :''
           }
        }
    },
    methods: {
        cancel() {
            this.$store.dispatch('changeState3_')
        },
        add(){
            this.$axios({
                method:'get',
                url: API.addTeacherTop,
                params: this.user,
            }).then(res=>{
                if(res.data.isok){
                  this.$store.dispatch('changeState3_')
                  this.user={}
                }else{
                  this.user.img=res.data.info;
                }
            }).catch(error=>{console.log(error)})
        }
    },
};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.tianjia {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  
}

.box {
  width: 45%;
  height: 330px;
  position: absolute;
  left: 50%;
  top: 23%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 5px;
  text-align center
 .inp{
   margin-left -20px
   width 70%
   display inline
  
 }
}

.p {
  color: $head;
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom 20px
}
.div{
    margin-bottom 20px
    text-align center
    span{
        color $zhi
        display inline-block
        margin-right 30px
    }
    input{
        width 80%
        height 30px
        border-radius 5px
        border 1px solid #ccc
    }
}
.btn{
    position absolute 
    bottom 20px
    right 20px
}
.tj{
    border 1px solid #ccc
    background-color $huanglv
    &:hover{
        background-color $left
       border 1px solid $left 
    }
}
.qx{
    border 1px solid #ccc
    background-color #fff
    &:hover{
        background-color $left
        border 1px solid $left 
    }
}
</style>