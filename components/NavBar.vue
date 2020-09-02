<template>
<!--  <v-app-bar  dense elevate-on-scroll extension-height="40" height="60" app>-->
<!--    <v-toolbar-title v-ripple="{ center: true }" class="d-flex align-center justify-center ml-0 ml-md-10">-->
<!--      <v-img-->
<!--        @click="changeDrawerStatus"-->
<!--        color="primary"-->
<!--        :src='require("assets/img/logo.svg")'-->
<!--        max-width="40"-->
<!--        alt="logo jozaguts"-->
<!--        class="ml-0 ml-md-10"-->
<!--      >-->
<!--      </v-img>-->
<!--      <router-link to="/" class="primary&#45;&#45;text text-center font-weight-bold ml-2  text-decoration-none">Jz</router-link>-->
<!--    </v-toolbar-title>-->
<!--    <template v-slot:extension>-->
<!--      <v-tabs fixed-tabs centered>-->
<!--        <v-tab class="accent&#45;&#45;text font-weight-bold" exact to="/" ripple>Jozaguts</v-tab>-->
<!--        <v-tab class="accent&#45;&#45;text font-weight-bold" exact to="resume" ripple>Resume</v-tab>-->
<!--        <v-tab class="accent&#45;&#45;text font-weight-bold" exact to="blog" ripple>Blog</v-tab>-->
<!--      </v-tabs>-->
<!--    </template>-->
<!--  </v-app-bar>-->
    <v-app-bar  dense elevate-on-scroll  height="80" app>
      
        <v-tabs fixed-tabs centered>
          <v-tab class="accent--text font-weight-bold" exact to="/" ripple>
            <v-toolbar-title v-ripple="{ center: true }" class="d-flex align-center justify-center ">
              <v-icon  size="40" left  v-html="'$vuetify.icons.logo'" />
              Jozaguts
            </v-toolbar-title>
          </v-tab>
          <v-tab class="accent--text font-weight-bold" exact to="resume" ripple>Resume</v-tab>
          <v-tab class="accent--text font-weight-bold" exact to="blog" ripple>Blog</v-tab>
        </v-tabs>
<!--      <template v-slot:extension>-->
<!--      </template>-->
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
  },
  mounted(){
    console.log(this.$vuetify.icons.logo)
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
