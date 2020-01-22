<template>
  <ul class="flex justify-end">
    <li id="contact" :class="[...$options.classes, 'pr-8']">
      <a href="mailto:contact@injectiveprotocol.com">
        contact@injectiveprotocol.com
      </a>
    </li>
    <li :class="[...$options.classes, 'pr-8']">
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
export default {
  classes: [
    'cursor-pointer',
    'text-nav',
    'font-semibold',
    'text-blue-200',
    'hover:text-blue-300'
  ]
}
</script>
