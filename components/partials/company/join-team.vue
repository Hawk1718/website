<template>
  <section class="main-form">
    <!-- eslint-disable vue/no-v-html -->
    <div v-scroll-reveal class="container">
      <div class="main-form__wrap">
        <h2
          class="sec-title main-form__title main-form__title_parts"
          v-html="$t('company.heading')"
        ></h2>
        <a
          href="https://angel.co/company/injective-protocol/jobs"
          target="_blank"
          rel="noreferrer"
          class="btn btn_l btn_black main-form__link"
        >
          {{ $t('company.see_open_roles') }}
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
        </a>
      </div>
    </div>
  </section>
</template>
