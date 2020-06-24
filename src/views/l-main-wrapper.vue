<template>
  <div class="main-wrapper" >
    <l-nav-bar />
    <keep-alive>
      <router-view/>
    </keep-alive>
    <l-footer/>
  </div>
</template>

<script>
import lNavBar from '../components/layouts/l-nav-bar.vue';
import lFooter from '../components/layouts/l-footer.vue';

export default {
  name: 'main-wrapper',
  components: {
    lNavBar,
    lFooter,
  },
};
</script>

<style lang="scss">

</style>
