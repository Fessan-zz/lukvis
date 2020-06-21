<template>
  <div class="catalog">
    <b-row>
      <l-catalog-item
        v-for="item of GET_PRODUCTS_TO_STATE"
        :key="item.name"
        :item_data="item"
      />
    </b-row>
  </div>
</template>

<script>
import lCatalogItem from '@/components/l-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'catalog',
  components: {
    lCatalogItem,
  },
  methods: {
    ...mapActions(['GET_PRODUCTS']),
  },
  computed: {
    ...mapGetters(['GET_PRODUCTS_TO_STATE']),
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>

<style lang="scss">
.row{
  margin-left: -5px !important;
}
</style>
