<template>
  <b-container class="col-lg-12">
    <h1>{{product.title}}</h1>
    <p>{{product.description}}</p>
    <img
      alt=""
    >
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'catalog',
  // data() {
  //   return {
  //     product: {},
  //     pathImag: '',
  //   };
  // },
  props: {
    item__date: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCT_ITEM']),
  },
  computed: {
    ...mapGetters(['GET_PRODUCTS_TO_STATE']),
    product() {
      let result = {};
      this.GET_PRODUCTS_TO_STATE.map((item) => {
        result = item;
        console.log(result);
        return result;
      });
      return result;
    },
  },
  mounted() {
    console.log(this.product);
    const id = this.$route.query.product;
    this.GET_PRODUCT_ITEM(id);
    // .then((resp) => {
    //   // console.log(resp.data.product);
    //   this.product = resp.data.product;
    //   const img = resp.data.image[0].path_to;
    //   this.pathImag = img;
    // });
    // console.log(this.pathImag);
  },
};
</script>

<style lang="sass" >

</style>
