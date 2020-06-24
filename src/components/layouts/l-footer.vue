<template>
  <footer class="footer" id="footer">
    <b-container class="pt-5">
      <b-row class="justify-content-between">
        <b-col cols="6">
          <p>
            <span class="footer__text-span">Почтовый адрес:</span>
             634063, г. Томск, ул. С. Лазо, дом 27/1- 57
          </p>
          <p>
            <span class="footer__text-span">Фактический адрес:</span>
             634058, г. Томск, ул. Кузовлевский тракт, д. 6/1
          </p>
          <p>
            <span class="footer__text-span">тел/факс: </span>
            (3822) 90-56-78, 22-65-02
          </p>
          <p>
            <span class="footer__text-span">e-mail</span>
             uzorluk@mail.ru lukvis@mail.ru
          </p>
        </b-col>
        <b-col cols="5">
          <img src="../../assets/img/map2.jpg" class="img-fluid" alt="map_footer">
        </b-col>
        <b-col cols="1">
           <a href="google.com" class="footer__a">
              <i class="icon-5"></i>
            </a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.footer__a{
  display: block;
  font-size: 25px;
  width: 25px;
  height: 25px;
  color: #F5F5F5;
  &:hover{
    color: #FFD600;
  }
}
.footer{
  background: linear-gradient(254.31deg, #2C9FAE -5.17%,
  rgba(31, 177, 186, 0) 125.7%), #2760CE;
  font-size: 13px;
  line-height: 40px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  &__text-span{
    font-weight: bold;
  }

}
</style>
