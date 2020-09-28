<template>
  <!--   include ../modules/company-top.html
  include ../modules/our-family.html
  include ../modules/team.html
  include ../modules/main-form-3.html -->
  <div>
    <v-top />
    <our-family />
    <team />
    <join-team />
  </div>
</template>

<script>
import Top from '~/components/partials/company/top'
import Team from '~/components/partials/company/team'
import JoinTeam from '~/components/partials/company/join-team'
import OurFamily from '~/components/partials/common/our-family'

export default {
  components: {
    OurFamily,
    Team,
    JoinTeam,
    'v-top': Top,
  },
}
</script>
