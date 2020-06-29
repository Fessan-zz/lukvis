<template>
  <div class="col-lg-12 metall">
    <b-container class="my-5">
          <b-row>
            <b-col class="col-lg-6 metall__left">
              <h2 class="main__central-h2 lefth2">{{GET_SERVICES_ITEM_TO_STATE.title}}</h2>
              <p>{{GET_SERVICES_ITEM_TO_STATE.description}}<br>
              Цена: {{GET_SERVICES_ITEM_TO_STATE.price}} руб.</p>
            </b-col>
            <b-col class="clo-lg-6 metall__right">
              <img
                v-if="imgS"
                :src="`https://peaceful-harbor-09047.herokuapp.com/${imgS[0].path_to}`" alt="">
            </b-col>
          </b-row>
          <p>Оставить заявку вы можете на
            <router-link to="/#claim">главной</router-link> странице</p>
        </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'serv',
  computed: {
    ...mapGetters(['GET_SERVICES_ITEM_TO_STATE']),
    imgS() {
      let str = '';
      if (this.GET_SERVICES_ITEM_TO_STATE.images_show) {
        // eslint-disable-next-line prefer-destructuring
        str = this.GET_SERVICES_ITEM_TO_STATE.images_show;
      } else {
        str = '';
      }
      return str;
    },
  },
  mounted() {
    this.setS();
  },
  watch: {
    $route() {
      this.setS();
    },
  },
  methods: {
    ...mapActions(['GET_SERVICES_ITEM']),
    setS() {
      this.GET_SERVICES_ITEM(this.$route.query.service);
    },
  },

};
</script>

<style lang="scss" scoped>
.lefth2{
  margin-left: 0 !important;
}
</style>
