<template>
  <v-app-bar dense elevate-on-scroll height="80" app>
    <router-link class="d-flex align-center" to="/">
      <img src="~/assets/img/logo.svg" alt="logo" width="50" class="mr-2">
      <h1 class="d-none d-md-flex d-lg-flex">Jozaguts</h1>
    </router-link>
    <v-spacer></v-spacer>
    <v-list   dense class="d-none d-lg-flex d-md-flex justify-center align-center" >
      <v-list-item v-for="link in links":key="link.to" class=" font-weight-bold" exact :to="link.to"  ripple>
        <v-list-item-content class="" v-text="link.value"/>
      </v-list-item>
      <v-list-item class="accent--text text-center font-weight-bold" exact @click="turnOn" ripple>
        <v-list-item-content>
          <v-btn>
            <v-icon color="primary">far fa-lightbulb</v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list-item>

    </v-list>
   
  </v-app-bar>

</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      links: [
        {
          to: 'about-me',
          value: 'About Me'
        },
        {
          to: 'blog',
          value: 'Blog'
        },
        {
          to: 'Resume',
          value: 'resume'
        }
      ]
    }
  },
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

<style lang="sass" scoped>

a
  text-decoration: none
  
.v-list-item__content
  min-width: 100px
  text-align: center
  display: inline


</style>
