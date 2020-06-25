<template>
  <div class="claim">
    <h2 class="main__central-h2 margin-left-claim">Отправьте заявку</h2>
      <b-container class="main__claim-wrapper mt-3">
        <p class="">Получите профессиональную консультацию</p>
        <form  class="claim__form mx-5">
          <b-row class="justify-content-between">
            <b-col cols="3" class="pt-4">
               <!-- for name ФИО -->
              <div
                class="form-group"
              >
                <label for="name" class="claim__form-label">Ввeдите ФИО</label>
                <input
                  class="claim__form-input"
                  type="text"
                  name="name"
                  placeholder="Ввeдите ФИО"
                  v-model.trim="formInfo.name"
                >
                <span class="claim__form-error">Поле обязательно для заполнения</span>
              </div>
              <!-- for phone -->
              <div
                class="form-group"
              >
                <label for="phone" class="claim__form-label">
                  Введите номер телефона для связи</label>
                <input-facade
                  class="claim__form-input"
                  placeholder="+7 (999) 999 - 999"
                  name="phone"
                  mask="+7(###) ### - ####"
                  v-model.trim="formInfo.phone"
                  :masked="masked"
                  />
                <span class="claim__form-error">Поле обязательно для заполнения</span>
              </div>
            </b-col>
            <b-col cols="3">
              2
            </b-col>
            <b-col cols="4">
              3
            </b-col>
          </b-row>
        </form>
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
.claim__form{
  margin-top: 100px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &-label{
    font-style: italic;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #4F4F4F;
  }
  &-input{
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #4F4F4F;
    width: 254px;
    height: 26px;
    padding: 10px;
  }
  &-error{
    font-style: italic;
    font-weight: 250;
    font-size: 9px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #EB5757;
  }
}
</style>
