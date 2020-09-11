<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      v-if="$vuetify.breakpoint.mdAndUp"
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
            <a v-scroll-to="icon.value">
              <v-icon color="white">
                {{ icon.icon }}
              </v-icon>
            </a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <nav-bar/>
    <v-content>
      <nuxt/>
      <v-menu offset-y left top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn  v-show="$vuetify.breakpoint.smAndDown" 
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
            v-for="(route, index) in routes"
            :key="index.to"
            @click="$router.push(route.to)"
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
      routes:[
        {
          to:'/',
          value:'home'
        },
        {
          to:'/about-me',
          value:'About'
        },
        {
          to:'/blog',
          value:'Blog'
        }
      ],
      drawer:true,
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
