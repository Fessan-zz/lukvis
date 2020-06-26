<template>
  <div>
    <l-scroll-to-top>
      <div class="btn">
        <i class="icon-up"></i>
      </div>
    </l-scroll-to-top>
  </div>
</template>

<script>

import lScrollToTop from './l-scroll-to-top.vue';

export default {
  components: {
    lScrollToTop,
  },
};
</script>

<style lang="scss" >
.btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid #FFD600;
  padding-top: 10px;
  color: #FFD600;
  font-size: 26px;
  font-weight: 300;
  &:hover{
    background-color: #FFD600;
    color: white;
  }
}

</style>
