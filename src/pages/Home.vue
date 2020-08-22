<template>
  <div>
    <div class="flex flex-column center pa3">
      <div class="w-100 h4 mt3 mt2-m">
        <div class="f-4-s f-5-m f-6-l name primary">Franco Giordani</div>
      </div>
    </div>
    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <div class="fl w-100 w-50-ns pa2">
          <div class="pv4 pl3-l pr4-l pl2-m pr2-m">
            <p class="f3 tj lh-copy primary">
              {{ $t("message.hello") }}
              <br />I'm almost a Mechanical Engineer and a programmer.
              <br />
              <br />I'm also interested in finance, enjoy playing music, and
              <br />speak fluent English, good enough French and just a
              <br />little bit of Russian and Japanese.
              <br />
              <br />
              <br />Always learning something, always trying to be free.
            </p>
            <div class="social-icons">
              <font-awesome-icon icon="envelope" class="mh4 fa-3x"/>
              <font-awesome-icon :icon="['fab', 'github']" class="mh4 fa-3x"/>
              <font-awesome-icon :icon="['fab', 'linkedin-in']" class="mh4 fa-3x"/>
            </div>
            <div class="flex items-center justify-center mt4 location v-mid">
              <img src="~@/assets/mexico-flag-round-icon-64.png" alt="México" class="mw-100 w3" />
              <div class="dib v-mid tc h3">Mexico City</div>
            </div>
          </div>
        </div>
        <div class="fl w-100 w-50-ns pa2">
          <div class="pv4 ph4">
            <p class="f2">
              Click here to see some
              of the things I've done
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.social-icons{
  .fa-linkedin-in{
    color:$blue1
  }
  .fa-github{
    color:#24292e;
  }
  .fa-envelope{
    color:$primary;
  }
}
</style>