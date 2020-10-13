<template>
  <v-footer
  >
    <v-row>
      <v-col class="d-flex justify-center justify-md-space-between align-center padding-custom">
        <AppVersion/>
        <strong>
          Jozaguts - {{ new Date().getFullYear() }}
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<style lang="sass" scoped>

@media (min-width: 420px)
.padding-custom
  padding-left: 12px

.padding-custom
  padding-left: 56px
</style>
<script>
import AppVersion from "@/components/Commons/AppVersion"

export default {
  components: {AppVersion},
  data: () => ({
    padless: false,
    appVersion: process.env.APP_VERSION,
  }),
  computed: {},
}
</script>
