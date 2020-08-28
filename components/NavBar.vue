<template>
  <v-app-bar class="bg-main-color " :hide-on-scroll="true" app>
    <v-app-bar-nav-icon @click="changeDrawerStatus" dark></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/" class="white--text text-decoration-none">Jozaguts</router-link>
    </v-toolbar-title>
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
