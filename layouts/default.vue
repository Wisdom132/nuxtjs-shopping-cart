<template>
  <div>
    <nav-bar />
    <nuxt />
    <app-footer />
  </div>
</template>
<script>
import navbar from '@/components/partials/navbar'
import footer from '@/components/partials/footer'

export default {
  components: {
    'nav-bar': navbar,
    'app-footer': footer
  }
}
</script>

