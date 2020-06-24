<template>
  <div class="scroll">
    <a @click="scrollTop" v-show="visible" class="bottom-right">
        <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'scrollToTop',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener() {
      this.visible = window.scrollY > 150;
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
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 39px;
  cursor: pointer;
}
</style>
