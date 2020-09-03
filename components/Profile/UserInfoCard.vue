<template>
  <v-container>
    <avatar-component :color="color" :userName="userName" :imgPath="imgPath"/>
    <title-job/>
    <SocialMedia :infoSocialMedia="infoSocialMedia"/>
    <about-component/>
    <v-btn raised block elevation="14" :to="localePath('resume', `${this.$i18n.locale}`)" :color="baseColor" dark large v-text="$t('callTo')"/>
  </v-container>
</template>

<script>
import SocialMedia from "~/components/Profile/SocialMedia";
import AvatarComponent from "~/components/Profile/Avatar";
import TitleJob from "~/components/Profile/TitleJob";
import AboutComponent from "~/components/Profile/About";

export default {
  components: {SocialMedia, AvatarComponent, TitleJob, AboutComponent},
  computed: {
    baseColor() {
      return this.$vuetify.theme.themes.light.primary;
    },
  },
  props: {
    color: {
      required: false,
      type: String
    },
    imgPath: {
      required: true,
      type: String
    },
    userName: {
      required: true,
      type: String
    },
    infoSocialMedia: {
      required: true,
      type: Array
    }
  }
};
</script>

<style>
</style>
