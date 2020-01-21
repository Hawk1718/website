<template>
  <div
    class="font-sans bg-gradient-main w-full min-h-screen tracking-wide text-blue-100"
  >
    <header class="py-8">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <img src="/images/logo.png" alt="Injective Protocol" class="h-10" />
          </div>
          <nav-desktop />
        </div>
      </div>
    </header>
    <main>
      <nuxt />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="flex justify-between">
          <div class="flex items-center">
            <img
              src="/images/logo.png"
              alt="Injective Protocol"
              class="h-8 mr-6"
            />
            <p class="text-sm text-blue-200">
              &copy; Injective Protocol Inc., 2019
            </p>
          </div>
          <div class="flex justify-end">
            <nav-footer />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import desktop from '~/components/navigation/desktop'
import footer from '~/components/navigation/desktop-footer'

export default {
  components: {
    'nav-desktop': desktop,
    'nav-footer': footer
  }
}
</script>
