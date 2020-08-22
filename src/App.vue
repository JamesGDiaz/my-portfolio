<template>
  <div id="app" class="w-100 h-100">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home,
  },
};
</script>

<style lang="scss">

</style>
