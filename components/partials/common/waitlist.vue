<template>
  <div class="container">
    <ValidationObserver
      v-slot="{ invalid }"
      ref="form"
      tag="div"
      class="main-form__wrap"
    >
      <slot></slot>
      <form :class="formClass" @submit.prevent="onSubmit">
        <validation-provider v-slot="{ errors }" rules="required|email">
          <label for="email" style="position: absolute; opacity: 0"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            name="email"
            class="input"
            :class="inputClass"
            :placeholder="$t('form.your_email')"
          />
          <p v-if="errors" class="input-error">
            {{ errors[0] }}
          </p>
        </validation-provider>

        <button :class="btnClass" :disabled="invalid">
          {{ $t('header.join_waitlist') }}
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292787 9.70701C0.105316 9.51948 0 9.26517 0 9.00001C0 8.73485 0.105316 8.48054 0.292787 8.29301L3.58579 5.00001L0.292787 1.70701C0.110629 1.51841 0.00983372 1.26581 0.0121121 1.00361C0.0143906 0.741413 0.11956 0.4906 0.304968 0.305192C0.490376 0.119784 0.741189 0.0146148 1.00339 0.0123364C1.26558 0.010058 1.51818 0.110853 1.70679 0.293011L5.70679 4.29301C5.89426 4.48054 5.99957 4.73485 5.99957 5.00001C5.99957 5.26517 5.89426 5.51948 5.70679 5.70701L1.70679 9.70701C1.51926 9.89448 1.26495 9.9998 0.999786 9.9998C0.734622 9.9998 0.480314 9.89448 0.292787 9.70701Z"
            />
          </svg>
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('email', {
  ...email,
  message: 'This field requires valid email',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  props: {
    formClass: {
      required: false,
      default: '',
      type: String,
    },

    inputClass: {
      required: false,
      default: '',
      type: String,
    },

    btnClass: {
      required: false,
      default: '',
      type: String,
    },
  },

  data() {
    return {
      email: '',
    }
  },

  methods: {
    onSubmit() {
      this.$axios
        .$get(process.env.MAILCHIMP_API_ENDPOINT, {
          params: {
            email: this.email,
          },
        })
        .then(() => {
          // Reset the form
          this.email = ''

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.form.reset()
          })

          this.$toast.success(this.$root.$t('form.thanks_waitlist'))
        })
        .catch((error) => {
          const { title } = error.response.data

          this.$toast.error(
            title === 'Member Exists'
              ? this.$root.$t('form.email_exists')
              : title
          )
        })
    },
  },
}
</script>
