<template>
  <div id="index">
    <v-head></v-head>
    <v-main></v-main>
  </div>
</template>

<script>
import vHead from "../views/head";
import vMain from "../views/main";
export default {
  components: {
    vHead,
    vMain,
  }
};
</script>

<style scoped lang="stylus">
#index{
  width 100vw
  height 100vh
  display: flex;
  flex-direction: column;
}
</style>
