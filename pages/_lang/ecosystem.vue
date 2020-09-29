<template>
  <div>
    <v-top />
    <core />
    <questions />
    <waitlist />
  </div>
</template>

<script>
import Top from '~/components/partials/ecosystem/top'
import Core from '~/components/partials/ecosystem/core'
import Questions from '~/components/partials/ecosystem/questions'
import Waitlist from '~/components/partials/ecosystem/waitlist'

export default {
  components: {
    'v-top': Top,
    Core,
    Questions,
    Waitlist,
  },
}
</script>
