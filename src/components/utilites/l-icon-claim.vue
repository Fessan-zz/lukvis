<template>
  <div class="icon-claim">
    <a
      v-show="visible"
      class="icon"
      v-scroll-to="'#claim'"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'l-icon-claim',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollListener() {
      this.visible = window.scrollY > 700;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.icon {
  position: fixed;
  bottom: 100px;
  right: 39px;
  cursor: pointer;
}
</style>
