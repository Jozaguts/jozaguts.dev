<template>
  <!-- App.vue -->
  <v-app>
    <nav-bar />
    <v-navigation-drawer width="300" v-model="showDrawer" temporary app>
     
    </v-navigation-drawer>

    <v-content>

        <nuxt />
    
    </v-content>

    <footer-component app/>
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar";
import { mapGetters } from "vuex";
export default {
  components: {  
    NavBar,
    FooterComponent:()=> import('~/components/Footer.vue'),
  },
  data() {
    return {
      mini: true,
      showDrawer: false,
      path: require("~/assets/img/perfil.png"),
      userName: "Sagit Gutiérrez",
      infoSocialMedia: [
        {
          iconColor: undefined,
          icon: "fab fa-linkedin-in",
          url: "https://www.linkedin.com/in/jozaguts/",
        },
        {
          iconColor: undefined,
          icon: "fab fa-behance",
          url: "https://www.behance.net/jozaguts88a8",
        },
        {
          iconColor: undefined,
          icon: "fab fa-twitter",
          url: "https://twitter.com/Jozaguts",
        },
        {
          iconColor: undefined,
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/Jozaguts.dev",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getDrawerStatus: "global/drawer",
    }),
  },
  watch: {
    getDrawerStatus() {
      this.showDrawer = !this.showDrawer;
    },
  },
};
</script>

<style>
.bg-main-color {
  background-color: var(--v-primary-base) !important;
}
.bg-accent-main-color {
  background-color: var(--v-accent-base) !important;
}
#app {
  font-family: 'Ubuntu', sans-serif;
}
</style>
