<template>
  <section class="questions">
    <div class="container">
      <div class="questions__wrap">
        <div class="questions__main">
          <div v-scroll-reveal class="questions__section">
            <div>
              <h2 class="sec-title questions__title">
                <span>What problem does</span> <br /><span
                  >Injective solve?</span
                >
              </h2>
              <p>
                <strong
                  >Injective brings power back to the people by enabling truly
                  free and decentralized trading for everyone.</strong
                >
              </p>
              <p>
                Many DEXs today claim to be decentralized but are actually
                centralized in most aspects besides custody. From restricting
                access to certain user demographics, retaining proprietary
                control over exchange infrastructure, to even requiring KYC in
                some cases, every central limit orderbook DEX that we have seen
                has centralized components that allow traders to be subject to
                the will of a some omnipotent authority. This is the fundamental
                problem that Injective solves.
              </p>
              <p>
                The common rationale against full decentralization is that
                efficiency and user experience are sacrificed. We at Injective
                reject this notion and have committed ourselves to turning the
                vision of a highly performant, permissionless, and
                fully-decentralized exchange protocol into reality.
              </p>
            </div>
          </div>
          <div v-scroll-reveal class="questions__section">
            <div>
              <h2 class="sec-title questions__title">
                <span>How is</span> <br /><span>Injective Different?</span>
              </h2>
              <p><strong>Pioneering a new decentralized economy.</strong></p>
              <p>
                The biggest fundamental difference between Injective Protocol
                and other exchanges is that we make exchange a decentralized
                public utility which gives our users and community the resultant
                value capture from our exchange protocol.
              </p>
              <p>
                Our technology brings an order of magnitude speedup by scaling
                trade execution and settlement on layer-2 all while being fully
                decentralized. Injective’s fully decentralized nature uniquely
                allows individuals to permissionlessly create and trade
                derivative markets that even centralized exchanges cannot
                support.
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
