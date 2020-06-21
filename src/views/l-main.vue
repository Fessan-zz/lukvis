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
      <b-container>
        <h2 class="main__central-h2">Изготовление товаров<br> любой сложности</h2>
          <l-catalog/>
      </b-container>
    </section>
  </main>
</template>

<script>
import lCatalog from '@/components/l-catalog.vue';

export default {
  name: 'main',
  components: {
    lCatalog,
  },
};
</script>

<style lang="scss" >

</style>
