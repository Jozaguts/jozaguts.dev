<template>
  <v-footer
    :padless="true"
  >
    <v-card
      flat
      tile
      width="100%"
      class="text-center"
    >
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Jozaguts</strong>

        <a v-scroll-to="'#banner'">
          <v-icon class="float-right">
            fas fa-chevron-up
          </v-icon>
        </a>
      </v-card-text>
    </v-card>
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
