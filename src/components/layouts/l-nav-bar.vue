<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg">
      <b-navbar-brand to="/">
        <img src="@/assets/img/logo.png" alt="logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- left block -->
        <b-navbar-nav class="nav-bar_links">
          <b-nav-item
            class="ml-5"
            active-class="active"
            to="/about"
          >О компании</b-nav-item>
          <b-nav-item
            class="ml-5"
            v-scroll-to="'#catalog'"
          >
            Каталог
          </b-nav-item>
          <b-nav-item
            v-scroll-to="'#services'"
            class="ml-5"
          >Наши работы</b-nav-item>
          <b-nav-item class="ml-5">Партнеры</b-nav-item>
          <b-nav-item class="ml-5">Контакты</b-nav-item>
        </b-navbar-nav>

        <!-- Righ items -->
        <b-navbar-nav class="ml-auto nav-bar_links">
          <b-nav-item class="nav-bar_right_item">
            <div class="mt-3">
              <span class="fz-11">(3822)
              </span><span class="blue"> 90-56-78, 22-65-02</span>
            </div>
            <p class="fsz-13 mt-2">uzorluk@mail.ru lukvis@mail.ru</p>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.nav-bar{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .nav-bar_links{
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #464646;
  }
}
.blue {
  color: #2760CE;
  font-size: 18px !important;
  font-weight: bold;
  letter-spacing: 0.05em;
}
.fz-11{
  font-size: 11px !important;
  font-weight: bold;
}
.fsz-13{
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-align: center;
}

.active {
  color: #185FBF !important;
}
</style>
