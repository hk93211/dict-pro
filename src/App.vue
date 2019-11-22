<template>
  <div id="app">
    <el-header>
      <m-app-id />
      <m-header-menu @select="selectHeaderMenu" />
    </el-header>
    <div class="body-wrapper">
      <div class="aside-menu-panel" :class="{'is-fold': isFold}">
        <div class="aside-menu-wrapper">
          <el-aside width="auto">
            <m-aside-menu @select="handleAsideMenuSelected" />
          </el-aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mAppId from '@/components/mAppId';
import mHeaderMenu from '@/components/mHeaderMenu';
import mAsideMenu from '@/components/mAsideMenu';

export default {
  components: {
    mAppId,
    mHeaderMenu,
    mAsideMenu,
  },
  data() {
    return {
      isFold: false,
    };
  },
  methods: {
    selectHeaderMenu(code, index) {
      console.log(code, index);
    },
  },
};
</script>

<style scoped lang="less">
@import './assets/styles/colors.less';

#app {
  .el-header {
    height: 40px!important;
    position: absolute;
    display: flex;
    width: 100%;
    padding: 0;
    background-color: @gray-1;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 9;
  }
  .body-wrapper {
    position: absolute;
    width: 100%;
    top: 40px;
    bottom: 0;
    .aside-menu-panel {
      width: 240px;
      height: 100%;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
      position: relative;
      z-index: 999;
      transition: width 0.5s;
      &.is-fold {
        width: 65px;
        .aside-menu-wrapper {
          width: 82px;
        }
      }
      .aside-menu-wrapper {
        width: 240px;
        height: 100%;
        .el-menu.vertical-menu:not(.el-menu--collapse) {
          width: 240px !important;
        }
        .el-submenu__icon-arrow {
          transform: rotate(-90deg);
          transition: 0.2s;
        }
        .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
          transform: rotate(-180deg);
        }
        .el-submenu {
          border-left: 3px solid transparent;
        }
        .is-active.is-opened {
          border-left: 3px solid @theme-color;
          &>.el-submenu__title {
            color: @theme-color;
          }
          &>.el-submenu__title i.el-icon-arrow-down {
            color: @theme-color;
          }
        }
        .el-submenu .el-menu-item,
        .el-menu-item,
        .el-submenu__title {
          height: 40px;
          line-height: 40px;
        }
        .el-menu-item.is-active {
          color: @theme-color !important;
        }
        .el-submenu__title i.el-icon-arrow-down:before {
          // content: '\e60a';
        }
      }
    }
  }
}
</style>
