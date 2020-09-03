<template>
  <!-- App.vue -->
  <v-app>
    <!--    <v-navigation-drawer-->
    <!--      v-model="showDrawer"-->
    <!--      :mini-variant.sync="mini"-->
    <!--      absolute-->
    <!--      app-->
    <!--      expand-on-hover-->
    <!--     -->
    <!--    >-->
    <!--      <v-list-item class="px-2">-->
    <!--        <v-list-item-avatar>-->
    <!--          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>-->
    <!--        </v-list-item-avatar>-->

    <!--        <v-list-item-title>John Leider</v-list-item-title>-->

    <!--        <v-btn-->
    <!--          icon-->
    <!--          @click.stop="mini = !mini"-->
    <!--        >-->
    <!--          <v-icon>mdi-chevron-left</v-icon>-->
    <!--        </v-btn>-->
    <!--      </v-list-item>-->

    <!--      <v-divider></v-divider>-->

    <!--      <v-list dense>-->
    <!--        <v-list-item-->
    <!--          v-for="item in items"-->
    <!--          :key="item.title"-->
    <!--          link-->
    <!--        >-->
    <!--          <v-list-item-icon>-->
    <!--            <v-icon>{{ item.icon }}</v-icon>-->
    <!--          </v-list-item-icon>-->

    <!--          <v-list-item-content>-->
    <!--            <v-list-item-title>{{ item.title }}</v-list-item-title>-->
    <!--          </v-list-item-content>-->
    <!--        </v-list-item>-->
    <!--      </v-list>-->
    <!--    </v-navigation-drawer>-->
    <nav-bar/>

    <!--    <v-navigation-drawer width="250" clipped v-model="showDrawer"  app>-->
    <!--      <user-info-card :imgPath="path" :userName="userName" :infoSocialMedia="infoSocialMedia"></user-info-card>-->
    <!--    </v-navigation-drawer>-->

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <nuxt/>
        <v-btn @click="turnOn" fixed bottom right>
          <v-icon>far fa-lightbulb</v-icon>
        </v-btn>
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
  methods: {
    turnOn() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
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
