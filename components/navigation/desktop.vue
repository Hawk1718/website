<template>
  <ul class="flex">
    <li
      @click.stop="scrollToElement('exchange')"
      :class="[...$options.classes, 'pr-8']"
    >
      {{ $t('navigation.exchange') }}
    </li>
    <li
      @click.stop="scrollToElement('team')"
      :class="[...$options.classes, 'pr-8']"
    >
      {{ $t('navigation.team') }}
    </li>
    <li
      @click.stop="scrollToElement('contact')"
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
      // eslint-disable-next-line no-console
      console.log('x')
      scrollIt(document.getElementById(elementId))
    }
  }
}
</script>
