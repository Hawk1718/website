<template>
  <section class="core">
    <div v-scroll-reveal class="container">
      <h2 class="sec-title core__title">{{ $t('ecosystem.heading') }}</h2>
      <div class="core__wrap">
        <div class="core-item">
          <div class="core-item__icn">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 20L24 22M24 22L20 20M24 22V27M40 14L36 16M40 14L36 12M40 14V19M28 8L24 6L20 8M8 14L12 12M8 14L12 16M8 14V19M24 42L20 40M24 42L28 40M24 42V37M12 36L8 34V29M36 36L40 34V29"
                stroke="#319795"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 class="core-item__title">
            {{ $t('ecosystem.injective_chain') }}
          </h3>
          <p>
            <strong>{{ $t('ecosystem.injective_chain_text') }} </strong>
          </p>
          <p>{{ $t('ecosystem.injective_chain_text2') }}</p>
        </div>

        <div class="core-item">
          <div class="core-item__icn">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 14H42M42 14V30M42 14L26 30L18 22L6 34"
                stroke="#3182CE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 class="core-item__title">
            {{ $t('ecosystem.injective_futures') }}
          </h3>
          <p>
            <strong>{{ $t('ecosystem.injective_futures_text') }}</strong>
          </p>
          <p>
            {{ $t('ecosystem.injective_futures_text2') }}
          </p>
        </div>

        <div class="core-item">
          <div class="core-item__icn">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 34L16 26M16 14H40H16ZM40 14L32 6L40 14ZM40 14L32 22L40 14ZM32 34H8H32ZM8 34L16 42L8 34Z"
                stroke="#5A67D8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 class="core-item__title">
            {{ $t('ecosystem.injective_exchange') }}
          </h3>
          <p>
            <strong>{{ $t('ecosystem.injective_exchange_text') }}</strong>
          </p>
          <p>{{ $t('ecosystem.injective_exchange_text2') }}</p>
        </div>

        <div class="core-item">
          <div class="core-item__icn">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L12 14M12 14L6 32C7.7314 33.2981 9.83703 33.9998 12.001 33.9998C14.165 33.9998 16.2706 33.2981 18.002 32L12 14ZM12 14L18 32M12 14L24 10M24 10L36 14M24 10V6M24 10V42M36 14L42 12M36 14L30 32C31.7314 33.2981 33.837 33.9998 36.001 33.9998C38.165 33.9998 40.2706 33.2981 42.002 32L36 14ZM24 42H18M24 42H30"
                stroke="#805AD5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 class="core-item__title">
            {{ $t('ecosystem.injective_governance') }}
          </h3>
          <p>
            <strong>{{ $t('ecosystem.injective_governance_text') }}</strong>
          </p>
          <p>
            {{ $t('ecosystem.injective_governance_text2') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
