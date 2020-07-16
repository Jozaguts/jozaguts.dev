<template>
  <v-app-bar class="bg-main-color" app>
    <v-app-bar-nav-icon @click="changeDrawerStatus" dark></v-app-bar-nav-icon>
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
