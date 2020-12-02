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
            <h1 class="main-title font-weight-bold mb-4 black--text primary d-inline">Blog</h1>
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

<style scoped>

</style>
