<template>
  <div class="hero__info">
    <div class="flex items-center">
      <span
        class="bg-yellow-500 text-gray-900 px-3 text-sm font-bold py-1 mr-1"
      >
        Backed by
      </span>
      <img alt="Binance" src="/images/binance.png" class="w-auto h-10 mr-2" />
      <img
        alt="StartX"
        src="/images/startx.png"
        class="w-auto h-6 -mt-3 -ml-4"
      />
    </div>
    <h2 class="text-4xl leading-tight mt-4">
      Fast, Secure, and Fully Decentralized Trading
    </h2>
    <p class="text-sm text-blue-200 mt-6 w-full lg:w-3/4">
      Injective is the first front-running resistant, layer-2 exchange protocol
      that unlocks the full potential of borderless finance by supporting margin
      trading, derivatives, and futures.
    </p>
    <form class="mt-6 w-full lg:w-3/4" method="POST" netlify="netlify">
      <div class="form__block">
        <div class="">
          <label
            for="input-hero-email"
            class="text-sm text-white font-semibold leading-tight"
            >Sign up for our testnet waitlist
          </label>
          <div class="flex items-center mt-1">
            <input
              id="input-hero-email"
              v-model="form.email"
              class="flex-1 shadow text-gray-700 text-sm h-10 px-4"
              placeholder="email@example.com"
              type="email"
              required="required"
            />
            <button
              class="bg-blue-400 h-10 px-4 flex flex-col items-center justify-center"
              type="button"
            >
              <svg
                class="fill-current text-blue-200"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="16"
                viewBox="0 0 10 16"
              >
                <path
                  fill="#FFF"
                  fill-rule="nonzero"
                  d="M.098 13.362l1.795 1.795 7.264-7.264L1.893.63.098 2.424l5.469 5.47z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: ''
    }
  })
}
</script>
