<template>
  <main class="main">
    <!-- hero section -->
    <div class="wrapper__hero">
      <b-container class="main__hero">
        <h1 class="mb-5">Завод металлоконструкций<br> ООО “ЛУКВИС”</h1>
        <div class="main__hero-wrapper-title mt-5 pb-5">
          <div class='main__hero-wrapper-title-span'>Любая сложность.<br>Индивидуальный подход</div>
        </div>
        <div class="main__hero-anchor pb-5 d-flex">
          <a href="#" class="main__hero-anchor-link">ОТПРАВИТЬ ЗАЯВКУ
            <i class="icon-req ml-3"></i>
          </a>
        </div>
      </b-container>
    </div>
    <!-- central section -->
    <section class="main__central">
        <!-- catalog -->
      <b-container >
        <h2 class="main__central-h2">Изготовление товаров<br> любой сложности</h2>
        <l-loader
          class="loader"
          v-if="loaderProducts"
        />
        <l-catalog
          :catalog_data="GET_PRODUCTS_TO_STATE"
          v-else
        />
      </b-container>
      <!-- services -->
      <b-container>
        <h2 class="main__central-h2">Наша компания предлагает<br> широкий спектр услуг</h2>
        <l-loader
          class="loader"
          v-if="loaderServices"
        />
        <l-services
          :services_data="GET_SERVICES_TO_STATE"
          v-else
        />
      </b-container>
      <!-- icons -->
      <b-container>
        <b-row>
          <b-col cols="7">
          <h2 class="main__central-h2">
            Обеспечим высокое качество<br> и быстрое выполнение задач
          </h2>
          <b-row class="mb-5">
            <b-col cols="6">
              <b-row>
                <b-col cols="6">
                  <img class="main__icon" src="../assets/img/1-1.svg" alt="check">
                </b-col>
                <b-col cols="6" class="d-flex align-items-center">
                  <p><span class="main__icon-strong">14 лет</span> на рынке</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="6">
              <b-row>
                <b-col cols="6">
                  <img class="main__icon ml-2" src="../assets/img/2.svg" alt="city">
                </b-col>
                <b-col cols="6" class="d-flex align-items-center">
                  <p><span class="main__icon-strong">15 городов<br></span> из России и СНГ</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col cols="6">
              <b-row>
                <b-col cols="6">
                  <img class="main__icon" src="../assets/img/3.svg" alt="check">
                </b-col>
                <b-col cols="6" class="d-flex align-items-center">
                  <p><span class="main__icon-strong">100+<br></span> реализованных проектов</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="6">
              <b-row>
                <b-col cols="6">
                  <img class="main__icon ml-2" src="../assets/img/4.svg" alt="city">
                </b-col>
                <b-col cols="6" class="d-flex align-items-center">
                  <p><span class="main__icon-strong">1000+<br></span> довольных клиентов</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="5">
          <img class="img-fluid mt-5" src="../assets/img/towerGreen.jpg" alt="tower">
        </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
import lCatalog from '@/components/l-catalog.vue';
import lServices from '@/components/l-services.vue';
import lLoader from '@/components/layouts/l-loader.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'l-main',
  components: {
    lCatalog,
    lServices,
    lLoader,
  },
  data() {
    return {
      loaderProducts: true,
      loaderServices: true,
    };
  },
  methods: {
    ...mapActions(['GET_PRODUCTS', 'GET_SERVICES']),
  },
  mounted() {
    this.GET_PRODUCTS().then((response) => {
      if (response.data) {
        this.loaderProducts = false;
      }
    });
    this.GET_SERVICES().then((response) => {
      if (response.data) {
        this.loaderServices = false;
      }
    });
  },
  computed: {
    ...mapGetters(['GET_PRODUCTS_TO_STATE', 'GET_SERVICES_TO_STATE']),
  },
};
</script>

<style lang="scss" >
.col-e {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.main__icon{
  height: 93px;

  &-strong{
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    color: #4F4F4F;
  }
}
.loader {
  margin-left: 50%;
}
</style>
