<template>
 <div class='content'>
     <div class="title">{{$route.name}}</div>
     <router-view></router-view>
 </div>
</template>
<script>
export default {
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.content{
    flex 1
    background-color $content
}
.title{
    font-size 35px
    font-family "宋体"
    font-weight bold
    color $head
    padding-top 10px
    padding-left 35px
}
</style>