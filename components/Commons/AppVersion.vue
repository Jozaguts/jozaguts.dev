<template>
  <v-chip label small class="app-version">
    {{ appVersion }}
  </v-chip>
</template>

<script>
export default {
  name: "AppVersion",
  data() {
    return {
      appVersion: process.env.APP_VERSION,
    }
  }
}
</script>
<style lang="sass" scoped>

.app-version
  position: absolute
  right: 4px
  bottom: 4px
  max-width: 60px
</style>
