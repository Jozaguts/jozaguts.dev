<template>
  <v-app-bar dense elevate-on-scroll height="80" app>
    <router-link class="d-flex align-center" to="/">
      <img src="~/assets/img/logo.svg" alt="logo" width="50" class="mr-2">
      <h1 class="d-none d-md-flex d-lg-flex">Jozaguts</h1> 
    </router-link>
    <v-tabs right class="d-none d-lg-block d-md-block" >
      <v-tab class="accent--text font-weight-bold" exact to="about-me" ripple>About me</v-tab>
      <v-tab class="accent--text font-weight-bold" exact to="blog" ripple>Blog</v-tab>
      <v-tab class="accent--text font-weight-bold" exact to="resume" ripple>Resume</v-tab>
      <v-tab class="accent--text font-weight-bold"   @click="turnOn" ripple>
        <v-btn fixed bottom right>
          <v-icon color="primary">far fa-lightbulb</v-icon>
        </v-btn>
      </v-tab>
    </v-tabs>
  </v-app-bar>

</template>

<script>
import {mapMutations} from 'vuex';

export default {
  methods: {
    ...mapMutations({
      changeDrawerStatus: 'global/toggleDrawerStatus'
    }),
    turnOn() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  }
};
</script>

<style lang="sass">
a
  text-decoration: none

.active-tab
  height: 2px
  left: 0px
  width: 207px

</style>
