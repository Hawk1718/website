<template>
  <div class="wrapper">
    <!-- not needed -->
    <v-intro v-if="false" />
    <v-header
      :class="{ static: headerClassInverted }"
      @mobileMenuToggled="isMobileMenuOpen = true"
    />
    <v-mobile-header
      :is-open="isMobileMenuOpen"
      @closed="isMobileMenuOpen = false"
    />
    <main class="main">
      <Nuxt />
    </main>
    <v-footer />
  </div>
</template>

<script>
import Intro from '~/components/layout/intro.vue'
import Header from '~/components/layout/header.vue'
import MobileHeader from '~/components/layout/mobile-header.vue'
import Footer from '~/components/layout/footer.vue'

export default {
  components: {
    'v-intro': Intro,
    'v-header': Header,
    'v-footer': Footer,
    'v-mobile-header': MobileHeader,
  },

  data() {
    return {
      isMobileMenuOpen: false,
    }
  },

  computed: {
    headerClassInverted() {
      return (
        this.$route.fullPath.includes('privacy-policy') &&
        this.$route.fullPath.includes('terms-and-conditions')
      )
    },
  },
}
</script>
