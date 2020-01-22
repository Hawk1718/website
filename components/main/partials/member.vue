<template>
  <div class="w-full md:w-1/2 lg:w-1/3 my-4">
    <div class="p-4">
      <div class="mx-auto relative w-48 h-48 bg-member z-10">
        <img :src="member.image" :alt="member.name" class="w-full mx-auto" />
      </div>
      <div class="pt-6 flex items-center">
        <h3 class="text-xl font-semibold">{{ member.name }}</h3>
        <span class="mx-2 text-sm">|</span>
        <p class="text-lg text-blue-200">{{ member.position }}</p>
      </div>
      <div class="mt-2">
        <p
          v-for="(info, index) in member.info"
          :key="`info-${member.name}-${index}`"
          class="opacity-75 text-blue-100 italic"
        >
          {{ info }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      required: true,
      type: Object
    }
  }
}
</script>
