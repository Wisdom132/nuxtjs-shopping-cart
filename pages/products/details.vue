<template>
  <div>
    <app-header />
    <app-details />
  </div>
</template>

<script>
import header from '@/components/category/header.vue'

import details from '@/components/category/details.vue'
export default {
  components: {
    'app-header': header,
    'app-details': details
  }
}
</script>

