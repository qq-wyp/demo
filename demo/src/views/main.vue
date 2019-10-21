<template>
 <div class="main">
    <v-left></v-left>
    <v-content></v-content>
 </div>
</template>
<script>
import vLeft from './left'
import vContent from './content'
export default {
    components: {
        vLeft,
        vContent,
    },
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl'
.main{
    width 100vw
    height 89vh
    display flex 
}
</style>