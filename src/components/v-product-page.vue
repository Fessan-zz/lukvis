<template>
  <div class="v-product-page">
    <img class="v-catalog-item__image"
    v-if="product.image"
    :src="require(`../../assets/img/${product.image}`)" alt="img">
    <p>Product Name: {{product.name}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'v-product-page',
  computed: {
    ...mapGetters(['PRODUCTS']),
    product() {
      let result = {};
      this.PRODUCTS.map((item) => {
        if (item.article === this.$route.query.product) {
          result = item;
        }
        return result;
      });
      return result;
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss" >
.v-product-page{
  padding-top: 300px;
}
</style>
