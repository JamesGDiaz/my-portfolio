<template>
  <main-layout>
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
              Hi there!
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
              <font-awesome-icon icon="envelope" />
              <font-awesome-icon :icon="['fab', 'github']" />
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
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
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

import 'tachyons/css/tachyons.css';

export default {
  components: MainLayout,
};
</script>