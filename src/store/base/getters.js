import { convertArrayToTree } from '@/utils/collection';

const getChildMenuByIndex = (menus = [], index = 0) => {
  if (!menus.length) return [];
  return menus[parseInt(index, 10)].children;
};

export default {
  treeMenu(state, getters) {
    const convertMenu = state.menu.menuList.map(item => {
      item.alias = item.url || '/';
      return item;
    });
    return convertArrayToTree(convertMenu, 'menuCode', 'parentId');
  },
  // childMenus(state, getters) {
  //   const convertMenu = state.menu.menuList.map(item => {
  //     item.alias = item.url || '/';
  //     return item;
  //   });
  //   const treeMenu = convertArrayToTree(convertMenu, 'menuCode', 'parentId');
  //   return getChildMenuByIndex(treeMenu, state.menu.selectedFirstLevelIndex);
  // },
};