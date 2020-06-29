<template>
  <div class="col-lg-12 metall">
    <b-container class="my-5">
      <b-row>
        <b-col class="col-lg-6 metall__left">
          <h2 class="main__central-h2">{{GET_PRODUCT_ITEM_TO_STATE.title}}</h2>
          <p>{{GET_PRODUCT_ITEM_TO_STATE.description}}<br>Цена:
           {{GET_PRODUCT_ITEM_TO_STATE.price}}р.</p>
        </b-col>
        <b-col class="clo-lg-6 metall__right">
          <img
          v-if="img"
          :src="`https://peaceful-harbor-09047.herokuapp.com/${img[0].path_to}`" alt="">
        </b-col>
      </b-row>
      <p>Оставить заявку вы можете на
        <router-link to="/#claim">главной</router-link> странице странице</p>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'catalog',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(['GET_PRODUCT_ITEM_TO_STATE']),
    img() {
      let str = '';
      if (this.GET_PRODUCT_ITEM_TO_STATE.images_show) {
        // eslint-disable-next-line prefer-destructuring
        str = this.GET_PRODUCT_ITEM_TO_STATE.images_show;
      } else {
        str = '';
      }
      return str;
    },
  },
  mounted() {
    this.set();
  },
  watch: {
    $route() {
      this.set();
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCT_ITEM']),
    set() {
      this.GET_PRODUCT_ITEM(this.$route.query.product);
    },
  },

};
</script>

<style lang="sass" >

</style>
