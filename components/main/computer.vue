<template>
  <section class="py-24">
    <div class="container">
      <div class="w-full lg:w-2/3 lg:mx-auto">
        <h2 class="font-bold text-3xl">
          Most Secure Trading Platform on the Market
        </h2>
        <div class="mt-6 w-full lg:w-1/2">
          <p class="text-blue-200">
            Your keys, your coins. From order discovery all the way to
            settlement, we are end-to-end decentralized.
          </p>
          <p class="mt-4 text-blue-200">
            You are protected by the network from hacks, trade manipulations,
            exit scams, and front-running.
          </p>
        </div>
      </div>
    </div>
    <pc />
  </section>
</template>

<script>
import pc from './partials/pc'

export default {
  components: {
    pc
  }
}
</script>
