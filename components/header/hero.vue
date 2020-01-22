<template>
  <div class="container py-16">
    <div class="flex flex-wrap items-center -mx-8">
      <div class="w-1/2 px-8 hidden lg:block">
        <client-only>
          <globe />
        </client-only>
      </div>
      <div class="w-full px-8 lg:w-1/2">
        <info />
      </div>
    </div>
  </div>
</template>

<script>
import Globe from './globe'
import Info from './info'

export default {
  components: {
    Globe,
    Info
  }
}
</script>
