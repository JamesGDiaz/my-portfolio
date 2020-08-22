
<template>
  <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
    <small class="f6 db tc mb1">
      Made with
      <span class="mh1">
        <font-awesome-icon icon="heart" />
      </span>using
      <span class="mh1">
        <font-awesome-icon :icon="['fab', 'vuejs']" />
      </span>
      <br />
    </small>
    <small class="f6 db tc">
      © 2020
      <b class="tu">Franco Giordani</b>., All Rights Reserved
    </small>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
footer {
  background: $background;
  .fa-vuejs{
    color:#4fc08d;
  }
  .fa-heart{
    color:$attention;
  }
}
</style>