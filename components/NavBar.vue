<template>
    <v-app-bar  dense elevate-on-scroll  height="80" app>
        <v-toolbar-title v-ripple="{ center: true }" @click="$router.push('/')" class="d-flex align-center pa-2 primary--text justify-center ">
          <v-icon  size="80" left  v-html="'$vuetify.icons.logo'" />
          Jozaguts
        </v-toolbar-title>
 
      <v-tabs right>
        <v-tab class="accent--text font-weight-bold" exact to="resume" ripple>Resume</v-tab>
        <v-tab class="accent--text font-weight-bold" exact to="blog" ripple>Blog</v-tab>
      </v-tabs>
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

<style lang="sass">
a
  text-decoration: none

.active-tab
  height: 2px
  left: 0px
  width: 207px

</style>
