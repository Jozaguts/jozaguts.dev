<template>
  <v-app-bar dense elevate-on-scroll height="80" app>
    <router-link class="d-flex align-center" :to="{ path: homeRoute }">
      <img src="~/assets/img/logoJz.svg" title="logo" alt="image logo of jozaguts " width="50" class="mr-2" />
      <h2 class="d-none d-md-flex d-lg-flex">Jozaguts</h2>
    </router-link>
    <v-spacer></v-spacer>
    <v-list
      dense
      class="d-none d-lg-flex d-md-flex justify-center align-center"
    >
      <v-list-item
        v-for="link in links"
        :key="link.to"
        class=" font-weight-bold"
        exact
        :to="link.to"
        nuxt
        ripple
        tag="a"
      >
        <v-list-item-content class="text-capitalize" v-text="link.value" />
      </v-list-item>
      <v-list-item
        class="accent--text text-center font-weight-bold"
        exact
        @click="turnOn"
        ripple
      >
        <v-list-item-content>
          <v-btn>
            <v-icon color="primary">far fa-lightbulb</v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    links() {
      return this.$i18n.locale === "en" ? this.$store.getters['global/getLinksData'].en : this.$store.getters['global/getLinksData'].es;
    },
    homeRoute() {
      return this.$i18n.locale === "en" ? "/" : "/es";
    }
  },
  methods: {
    ...mapMutations({
      changeDrawerStatus: "global/toggleDrawerStatus"
    }),
    turnOn() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style lang="sass" scoped>

a
  text-decoration: none

.v-list-item__content
  min-width: 100px
  text-align: center
  display: inline
</style>
