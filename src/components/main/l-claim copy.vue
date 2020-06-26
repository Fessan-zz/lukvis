<template>
  <div class="claim">
    <b-container class="claim__cont">
      <b-row>
        <b-col cols="6">
          <h3 class="claim__cont-h3">Отправьте заявку</h3>
          <div class="claim__cont-wrapper-blue">
            <p class="claim__cont-wrapper-p pt-3">Получите профессиональную консультацию</p>
          </div>
        </b-col>
        <b-col cols="6">
          <form
            class="claim__form mt-3 p-5"
            @submit.prevent="submit"
          >
            <!-- for name ФИО -->
            <div
              class="form__group d-flex flex-column"
              :class="{ 'errorInput': ($v.name.$dirty && $v.name.$error)}"
            >
              <label
                for="fio"
                class="claim__form-label"
              >Ввeдите ФИО
              </label>
              <input
                class="claim__form-input"
                id="fio"
                type="text"
                placeholder="Ввeдите ФИО"
                v-model.trim="$v.name.$model"
              >
                <div
                  class="claim__form-error"
                  v-if="$v.name.$error"
                >
                  <template
                    v-if="!$v.name.required"
                  >
                    Поле обязательно для заполнения
                  </template>
                  <template
                    v-if="!$v.name.minLength || !$v.name.maxLength"
                  >
                    Поле должно содержать от 3 до 60 символов
                  </template>
                </div>
            </div>
            <!-- for phone  -->
            <div
              class="form-group mt-4 d-flex flex-column"
            >
              <label
                for="phone"
                class="claim__form-label"
              >
                Введите номер телефона для связи
              </label>
              <input-facade
                  class="claim__form-input"
                  placeholder="+7 (999) 999 - 999"
                  name="phone"
                  mask="+7(###) ### - ####"
                  v-model.trim="phone"
              />
              <span class="claim__form-error">Поле обязательно для заполнения</span>
            </div>
            <!-- for email -->
            <div class="form__group d-flex flex-column mt-3">
              <label
                for="email"
                class="claim__form-label"
              >
              Введите e-mail
              </label>
              <input
                class="claim__form-input"
                id="email"
                type="text"
                placeholder="email"
                v-model.trim="email"
              >
              <span class="claim__form-error">Поле обязательно для заполнения</span>
            </div>
            <!-- for category select -->
            <div class="form__group d-flex flex-column mt-4">
              <label
                for="category"
                class="claim__form-label"
              >
              Выберете категорию товара
              </label>
              <l-select
                :selected="selected"
                :options="categories"
                @select="optionSelected"
              >
              </l-select>
              <span class="claim__form-error">Поле обязательно для заполнения</span>
            </div>
            <!-- for text-area -->
            <div class="form__group d-flex flex-column mt-3">
              <label
                for="comments"
                class="claim__form-label"
              >
              Комментарий, краткое описание
              </label>
              <textarea
                id="comments"
                rows="3"
                v-model.trim="comments"
              >
              </textarea>
              <span class="claim__form-error">Поле обязательно для заполнения</span>
            </div>
            <!-- for file -->
            <div
              class="form-group mt-3"
            >
              <label
                for="file"
                class="claim__form-label"
              >
              Прикрепить документ
              </label>
              <input
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              />
            </div>
            <!-- for chekbox -->
            <div
                class="form-group mt-3"
            >
              <input
                type="checkbox"
                id="checkbox"
                v-model="checked"
              >
              <label
                for="checkbox"
                class="claim__form-label-checkbox ml-3"
              >
              Принимаю условия <a href="#" class="blue-span">пользовательского соглашения</a>
              </label>
            </div>
            <button
              type="submit"
              class="claim__btn"
              :disabled="$v.$invalid"
            >ОТПРАВИТЬ ЗАЯВКУ</button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import lSelect from '../utilites/l-select.vue';

export default {
  name: 'l-claim',
  components: {
    lSelect,
  },
  data() {
    return {
      name: '',
      phone: NaN,
      email: '',
      selected: 'Выберите категорию',
      comments: '',
      file: '',
      checked: false,
      categories: [
        { name: 'Металлоизделия', value: 'Металлоизделия' },
        { name: 'Элементы фундаментов', value: 'Элементы фундаментов' },
        { name: 'Котельное оборудование', value: 'Котельное оборудование' },
        { name: 'Работы по индивидуальным заказам', value: 'Работы по индивидуальным заказам' },
        { name: 'Плазменная резка', value: 'Плазменная резка' },
        { name: 'Металлопрокат', value: 'Металлопрокат' },
        { name: 'Гибка листового металла', value: 'Гибка листового металла' },
        { name: 'Резка на пиле', value: 'Резка на пиле' },
      ],
      errorInfo: '',
    };
  },
  mounted() {
    console.log(this.$v.name.$error);
  },
  validations: {
    name: {
      minLength: minLength(3),
      maxLength: maxLength(60),
      required,
    },
  },
  methods: {
    optionSelected(option) {
      this.selected = option.name;
    },
    submit() {
      console.log(this.formInfo);
    },
    handleFileUpload() {
      // eslint-disable-next-line prefer-destructuring
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group .claim__form-error {
  display: none;
}
.form-group  .errorInput {
  .claim__form-error {
    display: block;
  }
}

textarea{
  resize: none;
}
.claim {

  &__btn {
    font-weight: 500;
    font-size: 11px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #333333;
    background: #FFFFFF;
    border: 2px solid #FFD600;
    box-sizing: border-box;
    padding: 10px;
    margin-left: 35%;
  }
  &__cont{
    padding-top: 141px;
    padding-bottom: 250px;
    &-h3{
      font-weight: bold;
      font-size: 48px;
      line-height: 45px;
      color: #FFFFFF;
      margin-left: -5px;
    }
    &-wrapper-blue{
      background: linear-gradient(255.74deg, #2760CE -31.61%, rgba(31, 177, 186, 0.6) 74.55%);
      width: 100%;
      height: 118px;
      max-width: 668px;
      margin-left: -123px;
    }
    &-wrapper-p{
      font-weight: 500;
      font-size: 30px;
      line-height: 45px;
      color: #FFFFFF;
      margin-left: 90px;
      padding-top: 5px;
      }
  }
  &__form{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 540px;

    &-label{
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #4F4F4F;
    &-checkbox{
      font-style: italic;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #4F4F4F;
    }
  }
  &-input{
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #4F4F4F;
    padding-left: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  &-error{
    font-style: italic;
    font-weight: 250;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    letter-spacing: 0.05em;
    color: #EB5757;
    }
  }
}
</style>
