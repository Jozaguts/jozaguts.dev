<template>
  <v-row justify="center" align="center">
    <v-banner height="300">
      <v-row justify="center" align="center">
        <v-col cols="6" md="4" lg="4">
          <v-tooltip max-width="190" left>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="bannerImage" v-bind="attrs" v-on="on" contain class="rick-image"
                     alt="rick drinking 'coffee'"
                     height="250"/>
            </template>
            <span v-html="rickPhrase"/>
          </v-tooltip>
        </v-col>
        <v-col cols="6" md="4" lg="4 main-banner-content">
          <h1 class="ma-4 primary--text">Hi!, I'm Sagit</h1>
          <h2 class="ma-4 ">I'm a Web developer</h2>
          <p class="mx-4">Here you'll get my Ideas, projects and experience</p>
        </v-col>
        <v-col cols="0" md="4" lg="4" class="d-none d-sm-flex">
          <v-img
            :src="technologies"
            alt="technologies than I use"
            height="250"
            contain
          >
          </v-img>
        </v-col>
      </v-row>
    </v-banner>
  </v-row>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      bannerImage: require("~/assets/img/coffe.png"),
      technologies: require("~/assets/img/headline-blog.png"),
    }
  },
  computed: {
    rickPhrase() {
      return this.$i18n.locale == 'en'
        ? 'Nobody exists on purpose. Nobody belongs anywhere. Everybody\'s gonna die. <strong class="primary--text">let\'s  go to develop!</strong>'
        : 'Nadie existe a propósito. Nadie pertenece a ninguna parte. Todos vamos a morir. <strong class="primary--text">>¡ Vamos a desarrollar!</strong> '
    },
  }
}
</script>

<style scoped>

</style>
