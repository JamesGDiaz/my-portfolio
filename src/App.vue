<template>
  <div id="app" class="w-100 h-100">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import 'tachyons/css/tachyons.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  font-family: $lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $background;
  height: 100vh;
}
</style>
