import * as types from './mutation-types';

const mutations = {
  // 用户信息
  [types.SET_USER_INFO](state, userInfo) {
    state.userInfo = userInfo;
  },

  // 菜单信息
  [types.SET_MENU_LIST](state, menus) {
    state.menu.menuList = menus;
  },
  [types.SET_IS_TOP_MENU](state, isTop) {
    state.menu.isTop = isTop;
  },
  [types.SET_SELECTED_FIRST_LEVEL_INDEX](state, index) {
    state.menu.selectedFirstLevelIndex = index;
  },
};



export default mutations;
