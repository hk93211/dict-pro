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
  computed: {
    ...mapState({
      selectedFirstLevelIndex: state => state.base.menu.selectedFirstLevelIndex,
    }),
    ...mapGetters({
      menus: 'base/treeMenu',
    }),
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

    handleSelect(index) {
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
          {this.renderChildrenMenu(h, this.getChildMenuByIndex(this.menus, this.selectedFirstLevelIndex))}
        </el-menu>
      </div>
    );
  },
};
</script>

<style>

</style>