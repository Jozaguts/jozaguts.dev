<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="mini"
      permanent
      app
    >
      <v-list class="mt-10 pt-10">
        <v-list-item v-for="icon in socialMedia" :key="icon.icon">
          <v-list-item-content class="text-center">
            <a :href="icon.value" target="_blank">
              <v-icon color="white">
               {{icon.icon}}
              </v-icon>
            </a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <v-list class="mt-10 pt-10">
        <v-list-item v-for="icon in drawerNavigation" :key="icon.icon">
          <v-list-item-content class="text-center">
            <a  v-scroll-to="icon.value" >
              <v-icon color="white">
                {{icon.icon}}
              </v-icon>
            </a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
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

import NavBar from "~/components/NavBar";
import {mapGetters} from "vuex";

export default {
  components: {NavBar},
  data() {
    return {
      items: [
        {title: "Home", icon: "mdi-home-city"},
        {title: "My Account", icon: "mdi-account"},
        {title: "Users", icon: "mdi-account-group-outline"},
      ],
      mini: true,
      socialMedia: [
        {
          icon: "fab fa-linkedin-in",
          value: "https://www.linkedin.com/in/jozaguts/",
        },
        {
          icon: "fab fa-behance",
          value: "https://www.behance.net/jozaguts88a8",
        },
        {
          icon: "fab fa-twitter",
          value: "https://twitter.com/Jozaguts",
        },
        {
          icon: "fab fa-facebook",
          value: "https://www.facebook.com/Jozaguts.dev",
        },
        {
          icon: "fab fa-instagram",
          value: "https://www.instagram.com/Jozaguts",
        },
      ],
      drawerNavigation:[
        {
          icon: 'fas fa-chevron-up',
          value: '#banner'
        },
        {
          icon: 'fas fa-grip-lines',
          value: '#projects'
        },
        {
          icon: 'fas fa-chevron-down',
          value: '#ContactForm'
        }
      ]
    };
  },
};
</script>

<style lang="sass">

.bg-main-color
  background-color: var(--v-primary-base) !important

.bg-accent-main-color
  background-color: var(--v-accent-base) !important

#app
  font-family: 'Ubuntu', sans-serif

</style>
