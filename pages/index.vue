<template>
  <div>
    <app-header />
    <about />
    <featured />
    <promo />
    <demoproduct />
    <moreproduct />
  </div>
</template>

<script>
import header from '@/components/home/header.vue'
import about from '@/components/home/about.vue'
import featured from '@/components/home/featured.vue'
import promo from '@/components/home/promo.vue'
import demoproduct from '@/components/home/demoproduct.vue'
import moreproduct from '@/components/home/moreproduct.vue'

export default {
  components: {
    'app-header': header,
    about,
    featured,
    promo,
    demoproduct,
    moreproduct
  }
}
</script>

