<template>
  <div class="left">
    <router-link to='' active-class="active" v-show="!$store.state.xianshi">管理员管理</router-link>
    <router-link to="/index/banner" active-class="active" v-show="$store.state.xianshi">banner管理</router-link>
    <router-link to="/index/teacher" active-class="active" v-show="$store.state.xianshi">家教管理</router-link>
    <router-link to="/index/water" active-class="active" v-show="$store.state.xianshi">水站管理</router-link>
    <router-link to="/index/repair" active-class="active" v-show="$store.state.xianshi">维修管理</router-link>
    <router-link to="/index/home" active-class="active" v-show="$store.state.xianshi">家政管理</router-link>
    <router-link to="/index/changePass" active-class="active" v-show="$store.state.xianshi">修改密码</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';

.left {
  width: 12vw;
  background-color: $left;
  a{
      display block
      text-decoration none
      text-align center
      font-size 13px
      height 30px
      line-height 30px
      margin 10px 10px
  }
}
a:hover{
    color white
    background-color $head
}
.active{
    background-color $head
}
</style>