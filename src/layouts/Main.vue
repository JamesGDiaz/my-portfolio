<template>
  <div class="container">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
    name:'MainLayout',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 15px 30px;
  background: #f9f7f5;
}
</style>
