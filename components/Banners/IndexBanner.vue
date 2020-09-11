<template>
  <v-row no-gutters class="my-10" id="banner">
    <v-col cols="12" class="d-flex align-center justify-center">
      <v-skeleton-loader
        class="mx-auto"
        type="image"
        width="100%"
        transition="scale-transition"
        v-if="loading"
      ></v-skeleton-loader>
      <v-banner v-else class="container" max-width="900" ripple>
        <v-row class=" d-flex">
          <v-col cols="6" md="4" lg="4" class="order-2 order-md-1 order-lg-1">
            <v-tooltip max-width="190" left>
              <template v-slot:activator="{ on, attrs }">
                <v-skeleton-loader
                  class="mx-auto"
                  height="300"
                  type="image"
                  v-if="loading"
                ></v-skeleton-loader>
                <v-img v-else :src="bannerImage" v-bind="attrs" v-on="on" contain class="rick-image"
                       alt="rick drinking 'coffee'"
                       height="250"
                       transition="scale-transition"
                       
                />
              </template>
              
              <span v-html="this.$i18n.t('rickPhrase')" />
            </v-tooltip>
          </v-col>
        
          <v-col v-if="!loading" cols="12" md="4" lg="4" class="main-banner-content align-self-center text-center order-1 order-md-2 order-lg-2">
            <h1 class="ma-4 primary--text">Hi!, I'm Sagit</h1>
            <h2 class="ma-4 ">I'm a Web developer</h2>
            <p class="mx-4">Here you'll get my Ideas, projects and experience</p>
          </v-col>

          <v-col cols="6" md="4" lg="4" class=" d-sm-flex order-3">
            <v-img
              :src="technologies"
              alt="technologies than I use"
              transition="scale-transition"
              height="250"
              contain
            >
            </v-img>
          </v-col>
        </v-row>
      </v-banner>
    </v-col>
  </v-row>
</template>

<script>
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
  }
}
</script>
<style lang="sass" >
.main-banner-content
  & h1, h2, p
    line-height: 1.2

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
