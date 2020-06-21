<template>
  <div class="services">
    <b-row>
      <l-services-item
        v-for="servis of GET_SERVICES_TO_STATE"
        :key="servis.name"
        :services_data="servis"
      />
    </b-row>
  </div>
</template>

<script>
import lServicesItem from '@/components/l-services-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'services',
  components: {
    lServicesItem,
  },
  computed: {
    ...mapGetters(['GET_SERVICES_TO_STATE']),
  },
  methods: {
    ...mapActions(['GET_SERVICES']),
  },
  mounted() {
    this.GET_SERVICES();
  },
};
</script>

<style lang="scss">

</style>
