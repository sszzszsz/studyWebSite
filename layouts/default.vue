<template>
  <div
    ref="wrap"
    class="l_wrap"
    :class="[
      {
        'is-ready': this.$store.state.global.loadingEnd === true,
      },
      this.$route.name,
    ]"
  >
    <Nuxt />
    <TheFooter class="l_footer" />
  </div>
</template>
<script>
import Vue from 'vue'
import TheFooter from '~/components/TheFooter'

export default Vue.extend({
  components: {
    TheFooter,
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    console.log('default')
  },
  methods: {
    // --------------------------------------
    // アドレスバーの高さ取得
    // --------------------------------------
    getVh() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
})
</script>

<style lang="scss"></style>
