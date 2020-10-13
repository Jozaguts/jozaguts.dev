<template>
  <v-row no-gutters class="my-10" id="banner">
    <v-col cols="12" class="d-flex align-start justify-start">
      <v-skeleton-loader
        class="mx-auto"
        type="image"
        width="100%"
        transition="scale-transition"
        v-if="loading"
      ></v-skeleton-loader>
      <v-card>
        <v-row class=" d-flex">
          <v-col v-if="!loading" cols="12" md="6" lg="6" class="main-banner-content align-self-center text-center">
            <h1 class="ma-4 primary--text">Hi!, I'm Sagit</h1>
            <h2 class="ma-4 ">I'm a Web developer</h2>
            <p class="mx-4">Here you'll get my Ideas, projects and experience</p>
          </v-col>

          <v-col cols="12" md="6" lg="6">
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
      </v-card>
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
