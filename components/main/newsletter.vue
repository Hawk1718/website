<template>
  <section class="py-24">
    <div class="container">
      <div class="w-full lg:w-2/3 lg:mx-auto">
        <h2 class="font-bold text-3xl">
          Build with us the future of decentralized exchange.
        </h2>
      </div>
      <div class="flex flex-wrap items-center">
        <div class="w-full lg:w-2/3 mx-auto">
          <form class="mt-6 w-full lg:w-3/4" method="POST" netlify="netlify">
            <div class="form__block">
              <div class="">
                <label
                  for="input-newsletter-email"
                  class="text-sm text-white font-semibold leading-tight"
                  >Sign up for our testnet waitlist
                </label>
                <div class="flex items-center mt-1">
                  <input
                    id="input-newsletter-email"
                    v-model="form.email"
                    class="flex-1 shadow text-gray-700 text-sm h-10 px-4"
                    placeholder="email@example.com"
                    type="email"
                    required="required"
                  />
                  <button
                    class="bg-blue-400 h-10 px-4 flex flex-col items-center justify-center"
                    type="button"
                    aria-label="Submit"
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
      </div>
    </div>
  </section>
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
