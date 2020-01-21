<template>
  <ul class="flex justify-end">
    <li
      @scrollToElement="scrollToElement('exchange')"
      :class="[...$options.classes, 'pr-8']"
    >
      <a href="mailto:contact@injectiveprotocol.com">
        contact@injectiveprotocol.com
      </a>
    </li>
    <li
      @scrollToElement="scrollToElement('team')"
      :class="[...$options.classes, 'pr-8']"
    >
      <a href="https://t.me/joininjective">Telegram</a>
    </li>

    <li :class="$options.classes">
      <a href="https://www.reddit.com/r/injective/">
        Reddit
      </a>
    </li>
  </ul>
</template>

<script>
import { scrollIt } from '~/utils'

export default {
  classes: [
    'cursor-pointer',
    'text-nav',
    'font-semibold',
    'text-blue-200',
    'hover:text-blue-300'
  ],

  methods: {
    scrollToElement(elementId) {
      scrollIt(document.getElementById(elementId))
    }
  }
}
</script>
