<template>
  <v-row>
    <v-col>
      <v-parallax
        :src="bannerImage"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h2 class="main-title font-weight-bold mb-4 black--text primary d-inline text-caption">Blog</h2>
            <h4 class="subheading accent--text font-weight-bold ">let's to talk!</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "BlogBanner",
  data(){
    return{
      bannerImage: require("~/assets/img/banner.svg"),
    }
  }
}
</script>

<style lang="sass">
.main-title
  font-size: 2.5rem

@media (min-width: 600px)
  .main-title
    font-size: 4rem

</style>
