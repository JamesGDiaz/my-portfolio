<template>
  <header>
    <div class="cover bg-left bg-center-l">
      <div class="pb0">
        <nav class="pa1 pa3-ns">
          <router-link to="/" class="link dim light b f6 f5-ns dib mr4">Franco Giordani</router-link>
          <router-link to="/projects" class="link dim light hover-white f6 f5-ns dib mr4">My Work</router-link>
          <router-link
            to="/knowledge"
            class="link dim light hover-white f6 f5-ns dib mr4"
          >What I Know</router-link>
          <router-link
            to="/experience"
            class="link dim light hover-white f6 f5-ns dib mr4"
          >Experience</router-link>
          <a
            v-on:click="changeLocale"
            class="hover-white white-70 dib ml4 pv1 ph2 ba"
            href="#"
          >
            <font-awesome-icon icon="language" class="fa-2x" />
          </a>
          <select
            v-model="$i18n.locale"
            class="f6 fw4 hover-white no-underline white-70 dib ml4 pv2 ph3 ba"
          >
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
          </select>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return { langs: ['es', 'en', 'fr', 'ja', 'ru'] };
  },
  methods: {
    changeLocale: function (event) {
      this.$i18n.locale = 'ja';
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: $primary;
}
</style>