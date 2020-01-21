<template>
  <ul class="flex">
    <li
      @scrollToElement="scrollToElement('exchange')"
      :class="[...$options.classes, 'pr-8']"
    >
      {{ $t('navigation.exchange') }}
    </li>
    <li
      @scrollToElement="scrollToElement('team')"
      :class="[...$options.classes, 'pr-8']"
    >
      {{ $t('navigation.team') }}
    </li>
    <li
      @scrollToElement="scrollToElement('contact')"
      :class="[...$options.classes, 'pr-8']"
    >
      {{ $t('navigation.contact') }}
    </li>
    <li :class="$options.classes">
      <a href="https://docsend.com/view/zdj4n2d">
        {{ $t('navigation.whitepaper') }}
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
    'font-bold',
    'uppercase',
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
