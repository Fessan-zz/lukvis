<template>
  <div class="scroll-claim">
    <l-icon-claim>
      <div class="btn">
        <i class="icon-req"></i>
      </div>
    </l-icon-claim>
  </div>
</template>

<script>
import lIconClaim from './l-icon-claim.vue';

export default {
  name: 'l-scroll-claim',
  components: {
    lIconClaim,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid #2760CE;
  padding-top: 6px;
  color: #2760CE;
  font-size: 26px;
  font-weight: 300;
  &:hover{
    background-color: #2760CE;
    color: white;
  }
}
</style>
