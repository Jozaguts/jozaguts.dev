<template>
  <v-app-bar dense elevate-on-scroll height="80" app>
    <router-link class="d-flex align-center" to="/">
      <img src="~/assets/img/logo.svg" alt="logo" width="50" class="mr-2">
      <h1 class="d-none d-md-flex d-lg-flex">Jozaguts</h1>
    </router-link>
    <v-spacer></v-spacer>
    <v-list width="auto" class="d-none d-lg-flex d-md-flex justify-center align-center">
      <v-list-item class="accent--text font-weight-bold" exact to="about-me" ripple>
        <v-list-content class="text-center mx-auto">
          About me
        </v-list-content>
      </v-list-item>

      <v-list-item class="accent--text font-weight-bold" exact to="blog" ripple>
        <v-list-content class="text-center mx-auto">
          blog
        </v-list-content>
      </v-list-item>

      <v-list-item class="accent--text font-weight-bold" exact to="resume" ripple>
        <v-list-content class="text-center mx-auto">
          Resume
        </v-list-content>
      </v-list-item>

      <v-list-item class="accent--text font-weight-bold" exact @click="turnOn" ripple>
        <v-list-content>
          <v-btn >
            <v-icon color="primary">far fa-lightbulb</v-icon>
          </v-btn>
        </v-list-content>
      </v-list-item>
      
    </v-list>
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
