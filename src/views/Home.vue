<template>
  <div class="home">
    <div>This is home page</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'home',
  components: {
  },
  computed: {
    ...mapState({
      userInfo: state => state.base.userInfo,
    }),
  },
  methods: {
    ...mapActions([
      'base/login',
    ]),
  },
  created() {
    const params4query = {
      username: '80457547',
      password: 'Azxs1234',
    };
    // this['base/login'](params4query);
    setTimeout(() => {
      console.log(this.userInfo);
    }, 6000);
  },
};
</script>
