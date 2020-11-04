<template>
  <div>
    <v-btn
      v-show="$vuetify.breakpoint.smAndDown"
      class="mx-0 menu-btn"
      fab
      dark
      color="#333"
      @click="mobileMenu = !mobileMenu"
      ripple
      v-if="!mobileMenu"
    >
      <v-icon> fas fa-ellipsis-v</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-show="$vuetify.breakpoint.smAndDown"
      v-model="mobileMenu"
      bottom
      app
    >
      <v-list>
        <v-list-item
          dark
          v-for="(route, index) in routes"
          :key="index.to"
          :to="route.to"
          class=" my-2 "
        >
          <v-list-item-title
            class="primary--text font-weight-bold text-center"
            ripple
            >{{ route.value }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item dark class="my-2" @click="turnOn">
          <v-list-item-title
            class="primary--text font-weight-bold text-center"
            ripple
          >
            <v-btn tile text ripple class="text-center">
              <v-icon color="primary">far fa-lightbulb</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            block
            class="primary--text font-weight-bold text-center"
            ripple
            @click="mobileMenu = !mobileMenu"
            >Close</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "MobileMenu",
  data() {
    return {
      mobileMenu: false,
    };
  },
  computed: {
    routes() {
      return this.$i18n.locale === "en"
        ? this.$store.getters["global/getLinksData"].en
        : this.$store.getters["global/getLinksData"].es;
    }
  },
  methods: {
    turnOn() {
      return (this.$vuetify.theme.dark = !this.$vuetify.theme.dark);
    }
  }
};
</script>
<style lang="sass" scoped>
.menu-btn
  z-index: 99999
</style>
