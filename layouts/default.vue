<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar class="bg-main-color" app></v-app-bar>
    <v-navigation-drawer app>
      <user-info-card
        :imgPath="path"
        :userName="userName"
        :infoSocialMedia="infoSocialMedia"
      ></user-info-card>
    </v-navigation-drawer>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
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
export default {
  data() {
    return {
      path: require("~/assets/img/perfil.png"),
      userName: "Sagit Gutiérrez",
      infoSocialMedia: [
        {
          iconColor: undefined,
          icon: "fab fa-linkedin-in",
          url: "https://www.linkedin.com/in/jozaguts/"
        },
        {
          iconColor: undefined,
          icon: "fab fa-behance",
          url: "https://www.behance.net/jozaguts88a8"
        },
        {
          iconColor: undefined,
          icon: "fab fa-twitter",
          url: "https://twitter.com/Jozaguts"
        },
        {
          iconColor: undefined,
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/Jozaguts.dev"
        }
      ]
    };
  },
  components: { UserInfoCard }
};
</script>

<style>
.bg-main-color {
  background-color: var(--v-primary-base) !important;
}
.bg-accent-main-color {
  background-color: var(--v-accent-base) !important;
}
</style>
