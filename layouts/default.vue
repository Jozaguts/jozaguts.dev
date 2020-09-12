<template>
  <v-app>
      <v-navigation-drawer
        :mini-variant.sync="mini"
        width="56px"
        app>
        <v-list class="mt-10 pt-10">
          <v-list-item v-for="icon in socialMedia" :key="icon.icon">
            <v-list-item-content class="text-center">
              <a :href="icon.value" target="_blank">
                <v-icon color="white">
                  {{ icon.icon }}
                </v-icon>
              </a>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer></v-spacer>
        <v-list class="mt-10 pt-10">
          <v-list-item v-for="icon in drawerNavigation" :key="icon.icon">
            <v-list-item-content class="text-center">
             <v-icon>
                 {{icon.icon}}
             </v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <nav-bar/>
    
    <v-content>
      <nuxt/>
      <v-menu offset-x left top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-show="$vuetify.breakpoint.smAndDown"
                 class="mx-2 menu-btn"
                 fab
                 dark
                 color="#333"
                 v-bind="attrs"
                 v-on="on"
                 ripple
          >
            <v-icon> fas fa-ellipsis-v</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            :dark="false"
            v-for="(route, index) in routes"
            :key="index.to"
            @click="$router.push(route.to)"
            class="grey darken-3 my-2 "
          >
            <v-list-item-title class="primary--text font-weight-bold" ripple>{{ route.value }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-content>
    <Footer/>
  </v-app>
</template>
<script>

import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

export default {
  components: {NavBar, Footer},
  data() {
    return {
      routes: [
        {
          to: '/',
          value: 'HOME'
        },
        {
          to: '/about-me',
          value: 'ABOUT'
        },
        {
          to: '/blog',
          value: 'BLOG'
        }
      ],
      drawer: true,
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
      drawerNavigation: [
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

.menu-btn
  position: fixed
  right: 16px
  bottom: 60px
</style>
