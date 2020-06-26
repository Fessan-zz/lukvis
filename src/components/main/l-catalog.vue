<template>
  <div class="catalog">
    <b-row>
      <l-catalog-item
        v-for="(item, index)  of catalog_data"
        :key="index"
        :item_data="item"
      />
    </b-row>
  </div>
</template>

<script>
import lCatalogItem from '@/components/main/l-catalog-item.vue';

export default {
  name: 'catalog',
  components: {
    lCatalogItem,
  },
  props: {
    catalog_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.row{
  margin-left: -5px !important;
}
</style>
