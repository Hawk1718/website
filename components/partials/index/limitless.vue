<template>
  <section class="limitless">
    <!-- eslint-disable vue/no-v-html -->
    <div v-scroll-reveal class="container">
      <div class="limitless__wrap">
        <div class="limitless__header">
          <h2 class="limitless__title" v-html="$t('home.limitless_title')"></h2>
          <NuxtLink
            :to="$i18n.path('ecosystem')"
            class="btn btn_l btn_black limitless__btn"
          >
            {{ $t('ecosystem.learn_how') }}
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
          </NuxtLink>
        </div>
        <div class="limitless__main">
          <div class="faq">
            <div class="faq__item js-accordion-item open">
              <div class="faq__header js-accordion-btn open">
                <div class="faq__icn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10L12 11M12 11L10 10M12 11V13.5M20 7L18 8M20 7L18 6M20 7V9.5M14 4L12 3L10 4M4 7L6 6M4 7L6 8M4 7V9.5M12 21L10 20M12 21L14 20M12 21V18.5M6 18L4 17V14.5M18 18L20 17V14.5"
                      stroke="#1A202C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 class="faq__title">{{ $t('home.fully_decentralized') }}</h3>
                <div class="faq__arrow">
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
                      d="M5.29279 7.29296C5.48031 7.10549 5.73462 7.00017 5.99979 7.00017C6.26495 7.00017 6.51926 7.10549 6.70679 7.29296L9.99979 10.586L13.2928 7.29296C13.385 7.19745 13.4954 7.12127 13.6174 7.06886C13.7394 7.01645 13.8706 6.98886 14.0034 6.98771C14.1362 6.98655 14.2678 7.01186 14.3907 7.06214C14.5136 7.11242 14.6253 7.18667 14.7192 7.28056C14.8131 7.37446 14.8873 7.48611 14.9376 7.60901C14.9879 7.7319 15.0132 7.86358 15.012 7.99636C15.0109 8.12914 14.9833 8.26036 14.9309 8.38236C14.8785 8.50437 14.8023 8.61471 14.7068 8.70696L10.7068 12.707C10.5193 12.8944 10.265 12.9997 9.99979 12.9997C9.73462 12.9997 9.48031 12.8944 9.29279 12.707L5.29279 8.70696C5.10532 8.51943 5 8.26512 5 7.99996C5 7.73479 5.10532 7.48049 5.29279 7.29296Z"
                      fill="#1A202C"
                    />
                  </svg>
                </div>
              </div>
              <div class="faq__main js-accordion-hide" style="display: block">
                <p>
                  {{ $t('home.fully_decentralized_text') }}
                </p>
              </div>
            </div>

            <div class="faq__item js-accordion-item">
              <div class="faq__header js-accordion-btn">
                <div class="faq__icn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7V17C4 19.21 7.582 21 12 21C16.418 21 20 19.21 20 17V7M4 7C4 9.21 7.582 11 12 11C16.418 11 20 9.21 20 7M4 7C4 4.79 7.582 3 12 3C16.418 3 20 4.79 20 7M20 12C20 14.21 16.418 16 12 16C7.582 16 4 14.21 4 12"
                      stroke="#1A202C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 class="faq__title">{{ $t('home.layer2speed') }}</h3>
                <div class="faq__arrow">
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
                      d="M5.29279 7.29296C5.48031 7.10549 5.73462 7.00017 5.99979 7.00017C6.26495 7.00017 6.51926 7.10549 6.70679 7.29296L9.99979 10.586L13.2928 7.29296C13.385 7.19745 13.4954 7.12127 13.6174 7.06886C13.7394 7.01645 13.8706 6.98886 14.0034 6.98771C14.1362 6.98655 14.2678 7.01186 14.3907 7.06214C14.5136 7.11242 14.6253 7.18667 14.7192 7.28056C14.8131 7.37446 14.8873 7.48611 14.9376 7.60901C14.9879 7.7319 15.0132 7.86358 15.012 7.99636C15.0109 8.12914 14.9833 8.26036 14.9309 8.38236C14.8785 8.50437 14.8023 8.61471 14.7068 8.70696L10.7068 12.707C10.5193 12.8944 10.265 12.9997 9.99979 12.9997C9.73462 12.9997 9.48031 12.8944 9.29279 12.707L5.29279 8.70696C5.10532 8.51943 5 8.26512 5 7.99996C5 7.73479 5.10532 7.48049 5.29279 7.29296Z"
                      fill="#1A202C"
                    />
                  </svg>
                </div>
              </div>
              <div class="faq__main js-accordion-hide">
                <p>
                  {{ $t('home.layer2speed_text') }}
                </p>
              </div>
            </div>

            <div class="faq__item js-accordion-item">
              <div class="faq__header js-accordion-btn">
                <div class="faq__icn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8V16M12 11V16M8 14V16M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                      stroke="#1A202C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 class="faq__title">{{ $t('home.orderbook_model') }}</h3>
                <div class="faq__arrow">
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
                      d="M5.29279 7.29296C5.48031 7.10549 5.73462 7.00017 5.99979 7.00017C6.26495 7.00017 6.51926 7.10549 6.70679 7.29296L9.99979 10.586L13.2928 7.29296C13.385 7.19745 13.4954 7.12127 13.6174 7.06886C13.7394 7.01645 13.8706 6.98886 14.0034 6.98771C14.1362 6.98655 14.2678 7.01186 14.3907 7.06214C14.5136 7.11242 14.6253 7.18667 14.7192 7.28056C14.8131 7.37446 14.8873 7.48611 14.9376 7.60901C14.9879 7.7319 15.0132 7.86358 15.012 7.99636C15.0109 8.12914 14.9833 8.26036 14.9309 8.38236C14.8785 8.50437 14.8023 8.61471 14.7068 8.70696L10.7068 12.707C10.5193 12.8944 10.265 12.9997 9.99979 12.9997C9.73462 12.9997 9.48031 12.8944 9.29279 12.707L5.29279 8.70696C5.10532 8.51943 5 8.26512 5 7.99996C5 7.73479 5.10532 7.48049 5.29279 7.29296Z"
                      fill="#1A202C"
                    />
                  </svg>
                </div>
              </div>
              <div class="faq__main js-accordion-hide">
                <p>
                  {{ $t('home.orderbook_model_text') }}
                </p>
              </div>
            </div>

            <div class="faq__item js-accordion-item">
              <div class="faq__header js-accordion-btn">
                <div class="faq__icn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.055 11H5C5.53043 11 6.03914 11.2107 6.41421 11.5858C6.78929 11.9609 7 12.4696 7 13V14C7 14.5304 7.21071 15.0391 7.58579 15.4142C7.96086 15.7893 8.46957 16 9 16C9.53043 16 10.0391 16.2107 10.4142 16.5858C10.7893 16.9609 11 17.4696 11 18V20.945M8 3.935V5.5C8 6.16304 8.26339 6.79893 8.73223 7.26777C9.20107 7.73661 9.83696 8 10.5 8H11C11.5304 8 12.0391 8.21071 12.4142 8.58579C12.7893 8.96086 13 9.46957 13 10C13 10.5304 13.2107 11.0391 13.5858 11.4142C13.9609 11.7893 14.4696 12 15 12C15.5304 12 16.0391 11.7893 16.4142 11.4142C16.7893 11.0391 17 10.5304 17 10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8H20.064M15 20.488V18C15 17.4696 15.2107 16.9609 15.5858 16.5858C15.9609 16.2107 16.4696 16 17 16H20.064M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                      stroke="#1A202C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 class="faq__title">{{ $t('home.unlimited_markets') }}</h3>
                <div class="faq__arrow">
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
                      d="M5.29279 7.29296C5.48031 7.10549 5.73462 7.00017 5.99979 7.00017C6.26495 7.00017 6.51926 7.10549 6.70679 7.29296L9.99979 10.586L13.2928 7.29296C13.385 7.19745 13.4954 7.12127 13.6174 7.06886C13.7394 7.01645 13.8706 6.98886 14.0034 6.98771C14.1362 6.98655 14.2678 7.01186 14.3907 7.06214C14.5136 7.11242 14.6253 7.18667 14.7192 7.28056C14.8131 7.37446 14.8873 7.48611 14.9376 7.60901C14.9879 7.7319 15.0132 7.86358 15.012 7.99636C15.0109 8.12914 14.9833 8.26036 14.9309 8.38236C14.8785 8.50437 14.8023 8.61471 14.7068 8.70696L10.7068 12.707C10.5193 12.8944 10.265 12.9997 9.99979 12.9997C9.73462 12.9997 9.48031 12.8944 9.29279 12.707L5.29279 8.70696C5.10532 8.51943 5 8.26512 5 7.99996C5 7.73479 5.10532 7.48049 5.29279 7.29296Z"
                      fill="#1A202C"
                    />
                  </svg>
                </div>
              </div>
              <div class="faq__main js-accordion-hide">
                <p>
                  {{ $t('home.unlimited_markets_text') }}
                </p>
              </div>
            </div>

            <div class="faq__item js-accordion-item">
              <div class="faq__header js-accordion-btn">
                <div class="faq__icn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 13.0506 19.7931 14.0909 19.391 15.0615C18.989 16.0321 18.3997 16.914 17.6569 17.6569C16.914 18.3997 16.0321 18.989 15.0615 19.391C14.0909 19.7931 13.0506 20 12 20C10.9494 20 9.90914 19.7931 8.93853 19.391C7.96793 18.989 7.08601 18.3997 6.34315 17.6569C5.60028 16.914 5.011 16.0321 4.60896 15.0615C4.20693 14.0909 4 13.0506 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315ZM12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 13.3132 2.25866 14.6136 2.7612 15.8268C3.26375 17.0401 4.00035 18.1425 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C13.3132 22 14.6136 21.7413 15.8268 21.2388C17.0401 20.7362 18.1425 19.9997 19.0711 19.0711C19.9997 18.1425 20.7362 17.0401 21.2388 15.8268C21.7413 14.6136 22 13.3132 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM9.5 8C9.10218 8 8.72065 8.15803 8.43934 8.43934C8.15803 8.72065 8 9.10218 8 9.5C8 9.89782 8.15803 10.2794 8.43934 10.5607C8.72065 10.842 9.10218 11 9.5 11C9.89782 11 10.2794 10.842 10.5607 10.5607C10.842 10.2794 11 9.89782 11 9.5C11 9.10218 10.842 8.72065 10.5607 8.43934C10.2794 8.15803 9.89782 8 9.5 8ZM15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289ZM14.5 13C14.1022 13 13.7206 13.158 13.4393 13.4393C13.158 13.7206 13 14.1022 13 14.5C13 14.8978 13.158 15.2794 13.4393 15.5607C13.7206 15.842 14.1022 16 14.5 16C14.8978 16 15.2794 15.842 15.5607 15.5607C15.842 15.2794 16 14.8978 16 14.5C16 14.1022 15.842 13.7206 15.5607 13.4393C15.2794 13.158 14.8978 13 14.5 13Z"
                      fill="#1A202C"
                    />
                  </svg>
                </div>
                <h3 class="faq__title">{{ $t('home.zero_gas_fees') }}</h3>
                <div class="faq__arrow">
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
                      d="M5.29279 7.29296C5.48031 7.10549 5.73462 7.00017 5.99979 7.00017C6.26495 7.00017 6.51926 7.10549 6.70679 7.29296L9.99979 10.586L13.2928 7.29296C13.385 7.19745 13.4954 7.12127 13.6174 7.06886C13.7394 7.01645 13.8706 6.98886 14.0034 6.98771C14.1362 6.98655 14.2678 7.01186 14.3907 7.06214C14.5136 7.11242 14.6253 7.18667 14.7192 7.28056C14.8131 7.37446 14.8873 7.48611 14.9376 7.60901C14.9879 7.7319 15.0132 7.86358 15.012 7.99636C15.0109 8.12914 14.9833 8.26036 14.9309 8.38236C14.8785 8.50437 14.8023 8.61471 14.7068 8.70696L10.7068 12.707C10.5193 12.8944 10.265 12.9997 9.99979 12.9997C9.73462 12.9997 9.48031 12.8944 9.29279 12.707L5.29279 8.70696C5.10532 8.51943 5 8.26512 5 7.99996C5 7.73479 5.10532 7.48049 5.29279 7.29296Z"
                      fill="#1A202C"
                    />
                  </svg>
                </div>
              </div>
              <div class="faq__main js-accordion-hide">
                <p>{{ $t('home.zero_gas_fees_text') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    $('.js-accordion-btn').on('click', function () {
      if ($(this).hasClass('open')) {
        $(this).closest('.js-accordion-item').removeClass('open')
        $(this).removeClass('open').siblings('.js-accordion-hide').slideUp(250)
      } else {
        $('.js-accordion-item.open').removeClass('open')
        $('.js-accordion-btn.open')
          .removeClass('open')
          .siblings('.js-accordion-hide')
          .slideUp(250)
        $(this).addClass('open').siblings('.js-accordion-hide').slideDown(250)
        $(this).closest('.js-accordion-item').addClass('open')
      }
    })
  },
}
</script>
