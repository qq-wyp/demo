<template>
 <div class="add">
     添加
 </div>
</template>
<script>
export default {
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.add{
    width 70px
    height 35px
    border-radius 5px
    border 1px solid #ccc
    line-height 30px
    font-size 16px
    color $zhi
    text-align center
    cursor pointer
    &:hover{
        background-color $left
        border-color $left
    }
}
</style>