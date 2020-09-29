<template>
  <div>
    <v-top />
    <our-family />
    <limitless />
    <trailblazing />
    <waitlist />
  </div>
</template>

<script>
import Top from '~/components/partials/index/top'
import OurFamily from '~/components/partials/common/our-family'
import Limitless from '~/components/partials/index/limitless'
import Trailblazing from '~/components/partials/index/trailblazing'
import Waitlist from '~/components/partials/index/waitlist'

export default {
  components: {
    Waitlist,
    'v-top': Top,
    OurFamily,
    Limitless,
    Trailblazing,
  },
}
</script>
