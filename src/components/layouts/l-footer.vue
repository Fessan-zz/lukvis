<template>
  <footer class="footer container col-lg-12" id="footer">
    <b-container class="pt-5 pb-5">
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2198.341476010741!2d84.99515628565092!3d56.56518897365303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4326919c685ff4df%3A0x7183d64d017b0401!2z0JrRg9C30L7QstC70LXQstGB0LrQuNC5INGC0YDQsNC60YIsIDYsINCi0L7QvNGB0LosINCi0L7QvNGB0LrQsNGPINC-0LHQuy4sIDYzNDA1OA!5e0!3m2!1sru!2sru!4v1593094118617!5m2!1sru!2sru"
          width="445" height="197" frameborder="0"
          style="border:0;" allowfullscreen="" aria-hidden="false"
          tabindex="0"></iframe>
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
#footer{
  width: 100%;
  max-width: 1336px;
}
.footer{
  background: linear-gradient(254.31deg, #2C9FAE -5.17%,
  rgba(31, 177, 186, 0) 125.7%), #2760CE;
  font-size: 13px;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  &__text-span{
    font-weight: bold;
  }

}
</style>
