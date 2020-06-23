<template>
  <div class="services">
    <b-row>
     <l-services-item
       v-for="(item, index) of services_data"
      :key="index"
      :services_item="item"
      />
    </b-row>
  </div>
</template>

<script>
import lServicesItem from '@/components/l-services-item.vue';

export default {
  name: 'services',
  components: {
    lServicesItem,
  },
  props: {
    services_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">

</style>
