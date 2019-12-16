<template>
  <div>
    <app-header />
    <div class="container">
      <div class="row">
        <category />
        <product />
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/category/header.vue'
import category from '@/components/category/categories.vue'
import product from '@/components/category/products.vue'
export default {
  components: {
    'app-header': header,
    category,
    product
  }
}
</script>

