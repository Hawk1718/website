<template>
  <div>
    <main-sec />
    <our-family />
    <limitless />
    <trailblazing />
    <wishlist>
      <h2 class="sec-title main-form__title">
        Start trading with <span>true freedom</span> and <br /><span
          >unlimited</span
        >
        <br /><span>possibilities</span>
      </h2>
    </wishlist>
  </div>
</template>

<script>
import MainSec from '~/components/partials/index/main-sec'
import OurFamily from '~/components/partials/common/our-family'
import Limitless from '~/components/partials/index/limitless'
import Trailblazing from '~/components/partials/index/trailblazing'
import Wishlist from '~/components/partials/common/wishlist'

export default {
  components: {
    Wishlist,
    MainSec,
    OurFamily,
    Limitless,
    Trailblazing,
  },
}
</script>
