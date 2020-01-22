<template>
  <main>
    <features />
    <platform />
    <computer />
    <team />
    <newsletter />
  </main>
</template>

<script>
import Features from '~/components/main/features'
import Platform from '~/components/main/platform'
import Computer from '~/components/main/computer'
import Team from '~/components/main/team'
import Newsletter from '~/components/main/newsletter'

export default {
  components: {
    Features,
    Platform,
    Computer,
    Team,
    Newsletter
  }
}
</script>
