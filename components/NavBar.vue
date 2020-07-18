<template>
  <v-app-bar class="bg-main-color" :hide-on-scroll="true" app>
    <v-app-bar-nav-icon @click="changeDrawerStatus" dark></v-app-bar-nav-icon>
    <v-toolbar-title>Jozaguts</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data() {
    return {};
  },
  methods:{
   ...mapMutations({
     changeDrawerStatus: 'NavBar/toggleDrawerStatus'
   }) 
  }
};
</script>

<style>
</style>
