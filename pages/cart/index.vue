<template>
  <div>
    <app-header />
    <cart />
  </div>
</template>

<script>
import header from '@/components/cart/header.vue'

import cart from '@/components/cart/cart.vue'

export default {
  components: {
    'app-header': header,
    cart
  }
}
</script>

