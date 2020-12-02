<template>
      <v-parallax dark :src="technologies" >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12"  ref="box">
            <h1
              class="main-title font-weight-bold mb-4 black--text primary d-inline"
              ref="title"
            >
             {{$t('indexBanner.h1')}}
            </h1>
            <h4 class="subheading accent--text" ref="name"> {{$t('indexBanner.h2')}}</h4>
          </v-col>
        </v-row>
      </v-parallax>
   
</template>

<script>


import {gsap} from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);


export default {
  name: "Main",
  data() {
    return {
      bannerImage: require("~/assets/img/coffe.png"),
      technologies: require("~/assets/img/bigBanner.svg"),
    };
  },
  mounted() {
    const { box, title, name } = this.$refs
    const timeline = new gsap.timeline();

    timeline
      .from(box, { scale: 0 }, "-=.4")
      .from(title, { scale: 0 }, "-=.5")
      .fromTo(
        name,
        { scale: 0.5 },
        { scale: 1, ease: "elastic.out(2.5, 0.5)" },
        "-=.3"
      );
    
  }
};
</script>
<style lang="sass">
.main-title
  font-size: 2.5rem

@media (min-width: 600px)
  .main-title
    font-size: 4rem

</style>
