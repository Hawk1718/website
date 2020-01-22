<template>
  <section id="team" class="py-24 bg-gradient-team">
    <div class="container">
      <div class="w-full lg:w-2/3 lg:mx-auto">
        <h2 class="font-bold text-3xl">
          The Team behind Injective Protocol
        </h2>
      </div>
      <div class="flex flex-wrap items-center -mx-8 mt-12">
        <member
          v-for="member in members"
          :key="`member-${member.name}`"
          :member="member"
        />
      </div>
    </div>
  </section>
</template>

<script>
import member from './partials/member'
import members from '~/data/members'

export default {
  components: {
    member
  },

  data: () => ({
    members
  })
}
</script>
