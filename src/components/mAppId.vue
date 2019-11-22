<template>
  <div class="m-app-identify" :class="{in: isCollapse}">
    <el-badge :value="value" :hidden="!showBadge || isCollapse">
      <div class="logo-wrap" @click="gotoHome">
        <img class="logo-big" v-if="!isCollapse" src="@/assets/logo.png"/>
        <i class="logo" v-else></i>
      </div>
    </el-badge>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="less">
.m-app-identify {
  box-sizing: border-box;
  height: 40px;
  width: 240px;
  padding: 5px 45px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  /*text-align: center;*/
  background: bule;
  color: white;
  transition: width 0.5s;
  &.in {
    width: 65px;
  }
  .logo-wrap {
    display: flex;
    .logo-big {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .logo {
      display: block;
      width: 30px;
      height: 30px;
      margin-top: 7px;
      margin-right: 10px;
      background: url('../assets/logo.png') no-repeat;
      background-size: contain;
    }
    .app-name {
      line-height: 30px;
    }
  }
}
</style>