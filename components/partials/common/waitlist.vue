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
        <div ref="form-success" class="form-success">
          <span class="icn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707V8.707Z"
                fill="#91FAEF"
              />
            </svg>
          </span>
          Thank you! Your submission has been received.
        </div>
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

  mounted() {
    //
  },

  methods: {
    onSubmit() {
      this.$refs['form-success'].classList.add('show')

      // Reset the form
      this.email = ''

      // Wait until the models are updated in the UI
      this.$nextTick(() => {
        this.$refs.form.reset()
      })

      setTimeout(() => {
        this.$refs['form-success'].classList.remove('show')
      }, 1500)
    },
  },
}
</script>