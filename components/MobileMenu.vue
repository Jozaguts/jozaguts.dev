<template>
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
        dark
        v-for="(route, index) in routes"
        :key="index.to"
        @click="$router.push(route.to)"
        class=" my-2 "
      >
        <v-list-item-title class="primary--text font-weight-bold text-center" ripple>{{
            route.value
          }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item dark class="my-2" @click="turnOn">
        <v-list-item-title>
          <v-btn tile text ripple>
            <v-icon color="primary">far fa-lightbulb</v-icon>
          </v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "MobileMenu",
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
    }
  },
  methods: {
    turnOn() {
      return this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped>

</style>
