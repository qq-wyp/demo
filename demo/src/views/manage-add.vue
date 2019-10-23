<template>
 <div class="add" @click.self="cancel">
     <div class="box"  >
         <div class="title"><span class="sp1">添加&nbsp;|&nbsp;修改管理员</span><span class="sp2" @click.self="cancel">X</span></div>
         <div class="check"><span class="sp1">名称</span><el-input  placeholder="请输入账号" v-model="user.name"></el-input></div>
         <div class="check"><span class="sp1">密码</span><el-input v-model="user.pass" placeholder="请输入密码"  show-password></el-input></div>
         <div class="check"><span class="sp1">确认密码</span><el-input placeholder="确认密码"  show-password v-model="user.pass2"></el-input></div>
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
    data(){
        return{
            value1: '',
            value2: '',
            value3: '',
            user:{
                /* 必填： name 账号 pass 密码 time 时间 (时间戳) des 描述 返回字段： { isok: true、false, */
                name:'',
                pass:'',
                time:'',
                des:'',
            },
            pass2:'',
        }
    },
    methods: {
        cancel() {
            this.$store.dispatch('managestate0')
            
        },
        add(){
            // this.$store.dispatch('managestate0')
            // this.$emit('tianjia',this.user)
             this.$axios({
                 method:'post',
                 url: API.addManage,
                 data: this.user,
             }).then(res=>{
                 if(res.data.isok){
                      this.$message(res.data.info);
                      this.$store.dispatch('managestate0')
                 }else{
                    this.$message(res.data.info); 
                 }
             }).catch(error=>{console.log(error)})
        },
    },
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.add{
    width 100vw
    height 100vh
    position absolute
    left -30px
    top -10px
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