<template>
  <div class="claim">
    <b-container>
      <b-row>
        <b-col>
        </b-col>
        <b-col>2</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'l-claim',
  data() {
    return {
      formInfo: {
        name: '',
        phone: NaN,
      },
    };
  },
  mounted() {
    console.log(this.formInfo);
  },
};
</script>

<style lang="scss" scoped>

</style>
