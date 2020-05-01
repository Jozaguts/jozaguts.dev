<template>
  <v-row align="center" justify="center">
    <v-col cols="12" class="d-flex justify-space-around">
      <v-chip
        v-for="(info, index) in infoSocialMedia"
        :key="index"
        :pill="true"
        :href="info.url"
        target="_blank"
        outlined
        :color="info.iconColor !== undefined ? info.iconColor : baseColor"
      >
        <v-avatar>
          <v-icon v-text="info.icon"></v-icon>
        </v-avatar>
      </v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      baseColor: this.$vuetify.theme.themes.light.primary
    };
  },
  props: {
    infoSocialMedia: {
      type: Array,
      required: false
    }
  }
};
</script>

<style>
</style>