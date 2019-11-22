<template>
  <div id="app">
    <!-- header -->
    <el-header>
      <m-app-id />
      <i class="collapse iconfont" :class="isCollapse ? 'm-icon-indent' : 'm-icon-outdent'" @click="collapse"></i>
      <m-header-menu @select="handleHeaderMenuSelect" />
    </el-header>
    <!-- body -->
    <div class="body-wrapper">
      <div class="aside-menu-panel" :class="{'is-fold': isFold}">
        <div class="aside-menu-wrapper">
          <el-aside width="auto">
            <m-aside-menu @select="handleAsideMenuSelect" />
          </el-aside>
        </div>
      </div>

      <div class="body-main-right" :class="{'is-fold': isFold}">
        <div class="body-main-right-panel">
          <div class="body-main-right-container">
            <div class="body-main-right-box app-container container-main-body" ref="appContainer">
              <transition name="fade-transverse">
                <router-view></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mAppId from '@/components/skeleton/mAppId';
import mHeaderMenu from '@/components/skeleton/mHeaderMenu';
import mAsideMenu from '@/components/skeleton/mAsideMenu';

export default {
  components: {
    mAppId,
    mHeaderMenu,
    mAsideMenu,
  },
  data() {
    return {
      isFold: false,
      isCollapse: false,
    };
  },
  methods: {
    collapse() {

    },
    handleHeaderMenuSelect(code, index) {
      console.log(code, index);
    },
    handleAsideMenuSelect(code, index) {
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
    .body-main-right {
      position: absolute;
      left: 240px;
      right: 0;
      bottom: 0;
      top: 0;
      background: @gray-3;
      transition: left 0.5s;
      &.is-fold {
        /*left: 65px;*/
        left: 0;
      }
      .body-main-right-panel {
        width: 100%;
        height: 100%;
        padding: 16px 16px 0 16px;
        .body-main-right-container {
          width: 100%;
          height: 100%;
          .body-main-right-box {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            &::-webkit-scrollbar {
              display: none !important;
            }
          }
        }
      }
    }
  }
}
</style>
