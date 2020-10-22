<template>
  <v-row no-gutters class="row-banner-container" id="banner"  v-show="!loading" ref="banner">
    <v-col cols="12" lg="6" md="6" class="d-flex align-start justify-start">
      <v-card>
        <v-row class=" d-flex">
          <v-col cols="12" md="6" lg="6" class="main-banner-content align-self-center text-center" ref="box">
            <h1 class="ma-4 primary--text" ref="name">Hi!, I'm Sagit</h1>
            <h2 class="ma-4 ">I'm a Web developer</h2>
            <p class="mx-4">Here you'll get my Ideas, projects and experience</p>
          </v-col>

          <v-col cols="12" md="6" lg="6"  class="img-container" ref="img">
            <v-img
              :src="technologies"
              alt="technologies than I use"
              height="250"
              contain
             
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      
    </v-col>
  </v-row>
 
</template>

<script>
import {TimelineLite} from 'gsap'

export default {
  name: "Main",
  data() {
    return {
      bannerImage: require("~/assets/img/coffe.png"),
      technologies: require("~/assets/img/headline-blog.png"),
      loading: true
    }
  },
  mounted() {
    this.loading = false;
    const { box,banner, img,name } = this.$refs
    const timeline = new TimelineLite()
  
    timeline.from(banner,  {
      opacity:0,
      duration: .5,
      x: -500,
      ease: "circ.out",
    })
    .from(box,  {scale:0},  "-=.2"  )
    .from(img,{ scale:0}, "-=.5")
    .fromTo(name,{scale:.5},{scale:1,ease: "elastic.out(2.5, 0.5)"}, "-=.3" )
  }
}
</script>
<style lang="sass">
.row-banner-container
  height: 100vh
.rick-image:before
  content: 'coffee lover'
  font-size: 20px
  position: absolute
  bottom: 15%
  display: inline-block
  background: #333
  padding: 10px
  font-weight: bold
  left: 15%
  color: #5e8cc2
  transform: rotate(-15deg)

  .v-banner__text, .v-banner__content
    margin: auto auto !important
</style>
