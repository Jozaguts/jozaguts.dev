<template>
  <v-app-bar dense elevate-on-scroll extension-height="40" app>
    <v-app-bar-nav-icon @click="changeDrawerStatus" color="primary"></v-app-bar-nav-icon>
    
    <v-toolbar-title v-ripple="{ center: true }" class="pr-5">
      <router-link  to="/" class="primary--text text-center font-weight-bold  text-decoration-none">Jozaguts</router-link>
    </v-toolbar-title>
    <template v-slot:extension> 
      <v-tabs fixed-tabs centered>
        <v-tab class="accent--text font-weight-bold" to="/resume" ripple dark>Resume</v-tab>
        <v-tab class="accent--text font-weight-bold"  to="/resume" ripple dark>Blog</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      changeDrawerStatus: 'global/toggleDrawerStatus'
    })
  }
};
</script>

<style  lang="sass">
a
  text-decoration: none
  

</style>
