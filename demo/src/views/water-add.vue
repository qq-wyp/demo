<template>
 <div class="add" @click.self="cancel">
     <div class="box" >
         <div class="title"><span class="sp1">添加水站</span ><span class="sp2" @click.self="cancel">X</span></div>
         <div class="check"><span class="sp1">名称</span><input type="text" placeholder="名称" v-model="user.name" ></div>
         <div class="check"><span class="sp1">评分</span><input type="number" placeholder="0-5分之间" v-model="user.score"></div>
         <div class="check"><span class="sp1">月售销量</span><input type="number" placeholder="月售销量" v-model="user.count"></div>
         <div class="check"><span class="sp1">点赞数量</span><input type="number" placeholder="点赞数量" v-model="user.likeNum" ></div>
         <div class="check"><span class="sp1">浏览量</span><input type="number" placeholder="浏览量" v-model="user.readNum"></div>
         <div class="check"><span class="sp1">商家地址</span><input type="text" placeholder="商家地址" v-model="user.address"></div>
         <div class="check"><span class="sp1">距离</span><input type="text" placeholder="eg:4.2km" v-model="user.len"></div>
         <div class="check"><span class="sp1">商家信息</span><input type="text" placeholder="商家信息" v-model="user.des"></div>
         <div class="check"><span class="sp1">电话</span><input type="tel" placeholder="eg:400-100-1000" v-model="user.tel"></div>
         <div class="check"><span class="sp1">价格</span><input type="text" placeholder="eg:58元/桶" v-model="user.price"></div>
         <div class="check"><span class="sp1">图片</span><input type="text" placeholder="url地址" v-model="user.img"></div>
         <el-row class="btn">
            <el-button class="qx" @click="cancel">取消</el-button>
            <el-button class="tj" @click="add">添加</el-button>
        </el-row>
     </div>
 </div>
</template>
<script>
export default {
    props:['m'],
    data(){
        return {
            user:{
                img:'',
                name:'',
                score:'',
                count:'',
                likeNum:'',
                readNum:'',
                address:'',
                len:'',
                des:'',
                tel:'',
                price:'',
            },
            state:'',
        }
    },
    methods: {
        cancel() {
            this.$store.dispatch('waterstate0')
            
        },
        add(){
            this.$store.dispatch('waterstate0')
            this.$emit('tianjia',this.user)
        },
    },
    watch: {
        user:{
            handler(){
                  /*  必填： img 图片路径 name 水站名称 score 水站评分 count 月销售量 likeNum 点赞人数 readNum 浏览量 address 地址 len 距离 des 商家信息 tel 电话 price 价格 */
               if(this.user.score<=0){
                   this.user.score=0;
               }
               if(this.user.score>=5){
                   this.user.score=5;
               }
               if(this.user.count<0){this.user.count=0}
               if(this.user.likeNum<0){this.user.likeNum=0}
               if(this.user.readNum<0){this.user.readNum=0}
               
            },
            deep:true,
        },
        
    },
   

    
   
   
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.add{
    width 100vw
    height 100vh
    background-color rgba(0,0,0,0.5)
    position absolute
    left 0px
    top 0
    z-index 2
}
.box{
    width 500px;
    height 88vh
    background-color #fff
    border-radius 10px
    position absolute
    left 50%
    top 80px
    transform translateX(-50%)
}
.title{
    overflow hidden
    width 90%
    margin 10px auto 
    padding-bottom 30px
    .sp1{
        color $head
        float left
    }
    .sp2{
        float right
        color #ccc
        cursor pointer
        &:hover{
            color $del
        }
    }
}
.check{
    width 90%
    margin 10px auto 
    overflow hidden
    display flex
    .sp1{
        box-sizing border-box
        padding-top 3px
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
</style>