<template>
  <div>
    <el-button type="danger">删除</el-button>
  </div>
</template>
<script>
import API from '../common/js/API';
export default {
  props: ['id'],
  data(){
    return {
      counts:0,
      d:[],
    }
  },
  methods: {
   /*  open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
          this.$axios({
            method: "get",
            url:API.delTeacherBanner ,
            params: {
              id: this.id
            }
          }).then(res => {
            if (res.data.isok) {
              this.init();
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(error => {});
    } */
    
    //   init() {
    //   this.$axios({
    //     method: "get",
    //     url: API.teacherBanner,
    //     params: {}
    //   }).then(res => {
    //     this.d = res.data.data;
    //     this.Event.$emit('getid',this.d);
    //   })
    // },
    

  /* mounted () {
    this.$on('shanchu',()=>{
      console.log('我被点击了')
       this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
          this.$axios({
            method: "get",
            url:API.delTeacherBanner ,
            params: {
              id: this.id
            }
          }).then(res => {
            if (res.data.isok) {
              console.log(res)
              // this.init();
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(error => {});
    })
  }, */
  mounted () {
    console.log('????')
    // this.counts=this.$store.state.count;
    // console.log(this.counts)
  },
  
}
}
</script>
<style lang='stylus' scoped>
@import '../common/stylus/index.styl';
</style>