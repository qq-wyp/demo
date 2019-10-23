<template>
 <div class="head">
     <router-link to="/login">
     <el-button  class="btn" v-show="$route.path.includes('manage')">退出登录</el-button>
     </router-link>
 </div>
</template>
<script>
export default {
}

</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.head{
    height 11vh
    background-color $head
}
.btn{
    float right
    margin-top 3vh
    margin-right 50px
    &:hover{
        background-color $left 
        border 1px solid $left 
    }
}
</style>