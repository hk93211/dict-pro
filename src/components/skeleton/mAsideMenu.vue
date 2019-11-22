<script>
import { mapGetters, mapState } from 'vuex';

export default {
  props: {
    mode: {
      type: String,
      default: 'vertical',
      validator(value) {
        return ['vertical', 'horizontal'].includes(value);
      },
    },
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    ...mapState({
      menus: state => state.base.menu.menuList,
      selectedFirstLevelIndex: state => state.base.menu.selectedFirstLevelIndex,
    }),
    ...mapGetters({
      treeMenu: 'base/treeMenu',
    }),
    secondLevelMenu() {
      return this.getChildMenuByIndex(this.treeMenu, this.selectedFirstLevelIndex);
    },
  },
  watch: {
    selectedFirstLevelIndex: {
      handler(n, o) {
        console.log(n, o);
      },
    },
  },
  methods: {
    collapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit('collapse', this.isCollapse);
    },

    getMenuByIndex(index) {
      const menuIndex = index.split('-').map(i => parseInt(i, 10));
      return menuIndex.reduce((menus, i) => menus[i].children || menus[i], this.secondLevelMenu);
    },

    handleSelect(index, indexPath) {
      const { alias: path } = this.getMenuByIndex(index);
      this.$router.push({ path: path.replace('#', '') });
      this.$emit('select', index);
    },

    handleOpen(key, keyPath) {
      this.$emit('open', key, keyPath);
    },
    handleClose(key, keyPath) {
      this.$emit('close', key, keyPath);
    },
    getChildMenuByIndex(menus = [], index = 0) {
      if (!menus.length) return [];
      return menus[parseInt(index, 10)].children;
    },
    renderChildrenMenu(h, menus, menuId) {
      return menus.map((menu, index) => {
        const { icon, name, children } = menu;
        const menuIndex = `${menuId ? `${menuId}-` : ''}${index.toString()}`;
        return children ?
          (
            <el-submenu index={menuIndex}>
              <template slot="title">
                <i class={icon}></i>
                <span slot="title">{name}</span>
              </template>
              {this.renderChildrenMenu(h, children, menuIndex)}
            </el-submenu>
          ) :
          (
            <el-menu-item index={menuIndex}>
              <i class={icon}></i>
              <span slot="title">{name}</span>
            </el-menu-item>
          );
      });
    },
  },
  render(h) {
    return (
      <div>
        <el-menu
          mode={this.mode}
          class={this.mode === 'vertical' ? 'vertical-menu' : 'horizontal-menu'}
          unique-opened
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          onSelect={this.handleSelect}
        >
          {this.renderChildrenMenu(h, this.secondLevelMenu)}
        </el-menu>
      </div>
    );
  },
};
</script>

<style>

</style>