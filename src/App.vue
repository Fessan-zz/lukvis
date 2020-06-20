<template>
  <div id="app">
    <t-main-wrapper />
  </div>
</template>

<script>
import tMainWrapper from './views/l-main-wrapper.vue';

export default {
  name: 'app',
  components: {
    tMainWrapper,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'MullerRegular';
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

}
</style>
