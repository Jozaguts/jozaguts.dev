<template>
  <v-app>
    <v-navigation-drawer :mini-variant.sync="mini" width="56px" app>
      <v-list class="mt-10 pt-10">
        <v-list-item
          v-for="icon in socialMedia"
          :key="icon.icon"
          :href="icon.value"
          target="_blank"
        >
          <v-list-item-content class="text-center">
            <v-icon>
              {{ icon.icon }}
            </v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <InsideNavigation :navigation-references="drawerNavigation" />
    </v-navigation-drawer>
    <nav-bar />
    <v-content>
      <nuxt />
      <MobileMenu />
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
import InsideNavigation from "@/components/Commons/InsideNavigation";

export default {
  components: { NavBar, Footer, MobileMenu, InsideNavigation },
  data() {
    return {
      routes: [
        {
          to: "/",
          value: "Home"
        },
        {
          to: "/about-me",
          value: "About me "
        },
        {
          to: "/blog",
          value: "Blog"
        }
      ],
      drawer: true,
      mini: true,
      socialMedia: [
        {
          icon: "fab fa-linkedin-in",
          value: "https://www.linkedin.com/in/jozaguts/"
        },
        {
          icon: "fab fa-behance",
          value: "https://www.behance.net/jozaguts88a8"
        },
        {
          icon: "fab fa-twitter",
          value: "https://twitter.com/Jozaguts"
        },
        {
          icon: "fab fa-facebook",
          value: "https://www.facebook.com/Jozaguts.dev"
        },
        {
          icon: "fab fa-instagram",
          value: "https://www.instagram.com/jozagutsdev"
        },
        {
          icon: "fab fa-github",
          value: "https://www.github.com/jozaguts"
        }
      ]
    };
  },
  computed: {
    drawerNavigation() {
      return this.$store.getters["global/getInsideNavigationPage"];
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://jozaguts/dev' + this.$route.path
        }
      ]
    }
  }
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
