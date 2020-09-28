<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="questions">
    <div class="container">
      <div class="questions__wrap">
        <div class="questions__main">
          <div v-scroll-reveal class="questions__section">
            <div>
              <h2
                class="sec-title questions__title"
                v-html="$t('ecosystem.questions_title')"
              ></h2>
              <p>
                <strong>{{ $t('ecosystem.question_1') }}</strong>
              </p>
              <p>{{ $t('ecosystem.question_2') }}</p>
              <p>
                {{ $t('ecosystem.question_3') }}
              </p>
            </div>
          </div>
          <div v-scroll-reveal class="questions__section">
            <div>
              <h2
                class="sec-title questions__title"
                v-html="$t('ecosystem.question_title_2')"
              ></h2>
              <p>
                <strong>{{ $t('ecosystem.question_4') }}</strong>
              </p>
              <p>
                {{ $t('ecosystem.question_5') }}
              </p>
              <p>
                {{ $t('ecosystem.question_6') }}
              </p>
            </div>
          </div>
        </div>
        <client-only>
          <learn />
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
import Learn from './learn'

export default {
  components: {
    Learn,
  },
}
</script>
