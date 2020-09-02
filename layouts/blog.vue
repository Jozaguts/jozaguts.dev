<template>
  <!-- App.vue -->
  <v-app>
    <nav-bar />
    <v-navigation-drawer width="300" v-model="showDrawer" temporary app>
      <user-info-card :imgPath="path" :userName="userName" :infoSocialMedia="infoSocialMedia"></user-info-card>
    </v-navigation-drawer>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <v-parallax
          :src="bannerImage"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="text-center" cols="12">
              <h1 class="display-1 d-inline primary black--text font-weight-bold mb-4">Jozaguts/blog</h1>
              <h4 class="subheading accent--text font-weight-bold ">let's to talk!</h4>
            </v-col>
          </v-row>
        </v-parallax>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import UserInfoCard from "~/components/Profile/UserInfoCard";
import NavBar from "~/components/NavBar";
import { mapGetters } from "vuex";
export default {
  components: { UserInfoCard, NavBar },
  data() {
    return {
      mini: true,
      showDrawer: false,
      bannerImage: require("~/assets/img/banner.svg"),
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
