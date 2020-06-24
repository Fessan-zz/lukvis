<template>
  <b-col class="catalog__item" cols="3">
     <h4 class="catalog__item-h4 my-4">{{services_item.name}}</h4>
    <div id="al-c">
      <div class="card--item">
        <ul class="effects">
        <li>
          <img :src="`https://safe-tundra-44761.herokuapp.com/${services_item.path_to}`" alt="Услуги">
          <div>
            <div class="catalog__item-p">
              <a
                href="#"
                v-for="item of services_item.service"
                :key="item.id"
                >- {{item.title}}
              </a>
            </div>
          </div>
        </li>
        </ul>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'services-item',
  props: {
    services_item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>

.catalog__item {
  margin-left: 11px;
  margin-right: 11px;
  width: 100%;
  max-width: 260px;
  & h4{
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: #333333;
    text-align: center;
    height: 60px;
  }
  &-p p{
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #FFFFFF;

  }
  &-p{
    padding: 20px;
  }
}
.card--item {
 vertical-align: middle;
 text-align: center;
}
.effects {
 list-style:none;
 margin: 0 auto;
 width: 100%;
 text-align: center;
 padding: 0;
}
.effects li {
 position: relative;
 display: inline-block;
 background-color: #fff;
 margin: 0;
 overflow: hidden;
 font-size: 14px;
}
@media (max-width:350px) {
 .effects li {
  font-size: 10px;
 }
}
.effects li img {
 display: block;
 position: relative;
 max-width:100%;
 height:auto;
 display: block;
}
.effects li > div {
 width: 100%;
 height: 100%;
 position: absolute;
}
.effects li:hover > div {
 position: absolute;
 overflow: hidden;
 top: 0;
 left: 0;
}

.effects li div {
 opacity: 0;
 background-color: rgba(0, 0, 0, 0.35);
 transition: all 0.4s ease-in-out;
 color: #fff;
}
.effects li img {
 transition: all 0.2s linear;
}
.effects li:hover img {
 transform: scale(1.3);
}
.effects li:hover div {
 opacity: 1;
}
</style>
