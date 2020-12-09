<template>
  <v-footer class="d-flex flex-column">
    <v-row>
      <v-col cols="12" class="text-center">
        <h2 class="primary--text">Made with</h2>
      </v-col>
      <v-col class="text-center ">
        <v-icon
          tag="img"
          alt="expressjs log format svg "
          title="log of expressjs"
          size="100"
          class="white pa-2"
          v-text="'$vuetify.icons.express'"
        ></v-icon>
      </v-col>
      <v-col class="text-center ">
        <v-icon size="100" v-text="'$vuetify.icons.nuxtjs'" alt="nuxtjs log format svg "
                title="log of nuxtjs"></v-icon>
      </v-col>
      <v-col class="text-center ">
        <v-icon size="100"  alt="vue log format svg "
                title="log of vue" v-text="'$vuetify.icons.vue'"></v-icon>
      </v-col>
      <v-col class="text-center ">
        <v-icon size="100"  alt="vuetify log format svg "
                title="log of vuetify" v-text="'$vuetify.icons.vuetify'"></v-icon>
      </v-col>
      <v-col class="text-center ">  
        <v-icon size="100"  alt="greensock log format svg "
                title="log of greensock" v-text="'$vuetify.icons.greensock'"></v-icon>
      </v-col>
      <v-col class="text-center ">
        <v-icon size="100"  alt="sendgrid log format svg "
                title="log of sendgrid" v-text="'$vuetify.icons.sendgrid'"></v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex justify-center justify-md-space-between align-center padding-custom"
      >
        <AppVersion />
        <div class="d-flex flex-column justify-center align-center">
          <h2 class="primary--text">by</h2>
          <strong> Jozaguts <!--   -{{ new Date().getFullYear() }}--> </strong>
        </div>

        
        
      </v-col>
    </v-row>
  </v-footer>
</template>
<style lang="sass" scoped>

@media (min-width: 320px)
.padding-custom
  padding-left: 12px

.padding-custom
  padding-left: 0px
</style>
<script>
import AppVersion from "@/components/Commons/AppVersion";

export default {
  components: { AppVersion },
  data: () => ({
    padless: false,
    appVersion: process.env.APP_VERSION
  }),
  computed: {}
};
</script>
