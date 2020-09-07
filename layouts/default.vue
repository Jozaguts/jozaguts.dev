<template>
  <v-app>
    <nav-bar/>
    <v-content>
        <nuxt/>
    </v-content>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script>
import UserInfoCard from "~/components/Profile/UserInfoCard";
import NavBar from "~/components/NavBar";
import {mapGetters} from "vuex";

export default {
  components: {UserInfoCard, NavBar},
  data() {
    return {
      items: [
        {title: "Home", icon: "mdi-home-city"},
        {title: "My Account", icon: "mdi-account"},
        {title: "Users", icon: "mdi-account-group-outline"},
      ],
      mini: true,
      showDrawer: true,
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
  }
};
</script>

<style lang="sass">
.main-banner-content
  & h1, h2, p
    line-height: 1.2

.rick-image:before
  content: 'coffee lover'
  font-size: 20px
  position: absolute
  bottom: 15%
  display: inline-block
  background: #333
  padding: 10px
  font-weight: bold
  left: 15%
  color: #5e8cc2
  transform: rotate(-15deg)

.bg-main-color
  background-color: var(--v-primary-base) !important

.bg-accent-main-color
  background-color: var(--v-accent-base) !important

#app
  font-family: 'Ubuntu', sans-serif

</style>
