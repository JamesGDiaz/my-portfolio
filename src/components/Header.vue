<template>
  <header>
    <div class="cover bg-left bg-center-l">
      <div class="pb0">
        <nav class="pa1 pa3-ns">
          <a class="link dim light b f6 f5-ns dib mr4" href="#" title="Home">Franco Giordani</a>
          <a class="link dim light hover-white f6 f5-ns dib mr4" href="#" title="Home">My Work</a>
          <a class="link dim light hover-white f6 f5-ns dib mr4" href="#" title="About">What I Know</a>
          <a class="link dim light hover-white f6 f5-ns dib mr4" href="#" title="Store">Experience</a>
          <a class="f6 fw4 hover-white no-underline white-70 dib ml4 pv2 ph3 ba" href="/">
            <font-awesome-icon icon="language" class="w5" />
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import 'tachyons/css/tachyons.css';

export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
header {
  background: $foreground;
}
</style>