<template>
 <div class="add" @click.self="cancel">
     <div class="box"  >
         <div class="title"><span class="sp1">添加&nbsp;|&nbsp;修改管理员</span><span class="sp2" @click.self="cancel">X</span></div>
         <div class="check"><span class="sp1">账号</span><el-input  placeholder="请输入账号" v-model="user.name"></el-input></div>
         <div class="check"><span class="sp1">密码</span><el-input v-model="user.pass" placeholder="请输入密码"  show-password></el-input></div>
         <div class="check"><span class="sp1">描述</span><el-input  placeholder="描述" v-model="user.des"></el-input></div>
         <div class="check"><span class="sp1">时间</span><el-date-picker
            v-model="user.time"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp"  style="flex:1;margin-left:-7px">
            </el-date-picker></div>
         
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
    props:['ids'],
    data(){
        return{
            user:{
                name:'',
                pass:'',
                time:'',
            },
            id:'',
        }
    },
    methods: {
        cancel() {
            this.$store.dispatch('managestate0_')
            
        },
        add(){
             this.$axios({
                 method:'post',
                 url: API.updateManage,
                 data: this.ids,
             }).then(res=>{
                 console.log(res)
                 if(res.data.isok){
                      this.$message(res.data.info);
                      this.$store.dispatch('managestate0_')
                 }else{
                    this.$message(res.data.info); 
                 }
             }).catch(error=>{console.log(error)})
        },
    },
     mounted () {
        console.log(this.ids)
     },
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.add{
    width 100%
    height 100vh
    position absolute
    left -30px
    top -10px
    z-index 2
    background-color rgba(0,0,0,0.5)
}
.box{
    width 800px
    height 450px
    background-color #fff
    border-radius 3px
    position absolute
    left 50%
    top:100px 
    transform translateX(-50%)
    
}
.title{
    width 80%
    margin 20px  auto 
    overflow hidden
    .sp1{
       float left
       color $head 
    }
    .sp2{
        float right
        color #cccccc
        cursor pointer
    }
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
.btn{
    position absolute
    right 20px
    bottom 15px
}
.check{
    width 90%
    margin 10px auto 
    overflow hidden
    display flex
    .sp1{
        box-sizing border-box
        padding-top 7px
        text-align center
        display inline-block
        width 80px
        color:$zhi
    }
    &>input{
        flex 1
        height 30px
        border  1px solid #cccccc
        border-radius 5px
    }
}
</style>