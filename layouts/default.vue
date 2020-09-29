<template>
  <div class="wrapper">
    <!-- not needed -->
    <v-header
      :class="{ static: headerClassInverted }"
      @mobile-menu-toggled="isMobileMenuOpen = true"
      @popup-toggled="isPopupOpen = true"
    />
    <v-popup :is-open="isPopupOpen" @popup-closed="isPopupOpen = false" />
    <v-mobile-header
      :is-open="isMobileMenuOpen"
      @closed="isMobileMenuOpen = false"
    />
    <main class="main">
      <Nuxt @popup-toggled="isPopupOpen = true" />
    </main>
    <v-footer />
  </div>
</template>

<script>
import Header from '~/components/layout/header.vue'
import MobileHeader from '~/components/layout/mobile-header.vue'
import Footer from '~/components/layout/footer.vue'
import Popup from '~/components/layout/popup.vue'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-popup': Popup,
    'v-mobile-header': MobileHeader,
  },

  data() {
    return {
      isMobileMenuOpen: false,
      isPopupOpen: false,
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

  mounted() {
    this.$root.$on('popup-toggled', () => {
      this.isPopupOpen = true
    })
  },
}
</script>
