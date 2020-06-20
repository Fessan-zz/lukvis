<template>
  <div class="main-wrapper" >
    <t-nav-bar />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import tNavBar from '../components/layouts/l-nav-bar.vue';

export default {
  name: 'main-wrapper',
  components: {
    tNavBar,
  },
};
</script>

<style lang="scss">

</style>
