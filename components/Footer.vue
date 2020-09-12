<template>
  <v-footer
    :padless="true"
  >

    <v-row>
      <v-col class="d-flex justify-center text-center align-center">
        <v-spacer></v-spacer>
          <strong class="ml-8 ml-lg-0 ml-md-0">{{ new Date().getFullYear() }} — Jozaguts</strong>
        <v-spacer></v-spacer>
        <a v-scroll-to="'#banner'">
          <v-icon class="float-right pa-5">
            fas fa-chevron-up
          </v-icon>
        </a>
      </v-col>
    </v-row>

    <!--      flat-->
    <!--      tile-->
    <!--      width="100%"-->
    <!--      class="text-center"-->
    <!--    >-->
    <!--      <v-divider></v-divider>-->
    <!--      <v-card-text class="white&#45;&#45;text">-->
    <!--        {{ new Date().getFullYear() }} — <strong>Jozaguts</strong>-->

    <!--        <a v-scroll-to="'#banner'">-->
    <!--          <v-icon class="float-right pa-4">-->
    <!--            fas fa-chevron-up-->
    <!--          </v-icon>-->
    <!--        </a>-->
    <!--      </v-card-text>-->
    <!--    </v-card>-->
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fa-envelope ',
      'fas fa-envelope',
      'fa-envelope',
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: false,
    variant: 'default',
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>
