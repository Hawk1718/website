<template>
  <section class="main-sec">
    <div class="bg bg_1">
      <client-only>
        <!-- <waves /> -->
        <v-video />
      </client-only>
    </div>
    <div class="container">
      <div class="main-sec__wrap">
        <h1 class="main-sec__title">
          {{ $t('home.hero_title') }}
        </h1>
        <p class="main-sec__txt">
          {{ $t('home.hero_subtitle') }}
        </p>

        <client-only>
          <waitlist
            v-scroll-reveal
            form-class="row-form main-sec-form"
            input-class="main-sec-form__input"
            btn-class="btn btn_l btn_green row-form__submit main-sec-form__submit"
          />
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
import Waves from './waves'
import Video from './video'
import Waitlist from '~/components/partials/common/waitlist'

export default {
  components: {
    Waitlist,
    // eslint-disable-next-line vue/no-unused-components
    Waves,
    'v-video': Video,
  },
}
</script>
