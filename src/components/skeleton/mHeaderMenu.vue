<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    class="el-menu-demo"
  >
    <el-menu-item
      :index="menu.menuCode"
      v-for="(menu, index) in menus"
      :key="menu.menuCode"
      @click="handleSelect(menu.menuCode, index)"
    >{{menu.name}}</el-menu-item>
  </el-menu>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'mHeaderMenu',
  data() {
    return {
      activeIndex: '0',
    };
  },
  computed: {
    ...mapGetters({
      menus: 'base/treeMenu',
    }),
  },
  methods: {
    ...mapActions([
      'base/login',
      'base/localLogin',
    ]),
    ...mapMutations([
      'base/SET_SELECTED_FIRST_LEVEL_INDEX'
    ]),
    getMenuList() {
      const params4query = {
        username: '80457547',
        password: 'Azxs1234',
      };
      // this['base/login'](params4query);
      this['base/localLogin'](params4query);
    },
    handleSelect(menuCode, index) {
      this['base/SET_SELECTED_FIRST_LEVEL_INDEX'](index);
      this.$emit('select', menuCode, index);
    },
  },
  created() {
    this.getMenuList();
  },
};
</script>

<style scoped lang="less">
.el-menu {
  &.el-menu--horizontal {
    border-bottom: none;
  }

  > .el-menu-item {
    height: 40px;
    line-height: 40px;
  }
}

</style>