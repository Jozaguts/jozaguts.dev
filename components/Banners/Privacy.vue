<template>
  <div>
    <v-banner
      two-lines
      shaped
      :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
      class="privacy-banner"
      icon="fas fa-user-shield"
      :value="banner"
    >
      <span class="primary black--text font-weight-bold" v-text="'Jozaugts'">
      </span>
      <span v-text="$t('privacy.bannerContent')"> </span>
      <template v-slot:actions>
        <v-btn text color="secondary" @click="showPrivacy">more</v-btn>
        <v-btn color="primary" @click="privacyAccept">{{
          $t("privacy.primaryBtn")
        }}</v-btn>
      </template>
    </v-banner>
    <v-dialog v-model="dialog" @click:outside="showPrivacy" :max-width="width">
      <v-card>
        <v-card-title class="headline" v-text="$t('privacy.title')" />
        <v-card-text>
          <p v-text="$t('privacy.p1.content')" />
          <h3 v-text="$t('privacy.p2.title')" />
          <p v-text="$t('privacy.p2.content')" />
          <h3 v-text="$t('privacy.p3.title')" />
          <p v-text="$t('privacy.p3.content')" />
          <h3 v-text="$t('privacy.p4.title')" />
          <p v-text="$t('privacy.p4.content')" />
          <h3 v-text="$t('privacy.p5.title')" />
          <p v-text="$t('privacy.p5.content')" />
          <h3 v-text="$t('privacy.p6.title')" />
          <p v-text="$t('privacy.p6.content')" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="secondary darken-1" text @click="showPrivacy">
            Disagree
          </v-btn>

          <v-btn color="primary darken-1"  @click="privacyAccept">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "privacy",
  data() {
    return {
      dialog: false,
      privacyStatus: false,
      banner: false
    };
  },
  methods: {
    privacyAccept() {
      try {
        this.dialog = false;
        localStorage.setItem("privacyStatus", true);
        this.banner = false;
      } catch (e) {
        console.error(e);
      }
    },
    showPrivacy() {
      this.banner = !this.banner;
      this.dialog = !this.dialog;
    }
  },
  mounted() {
    localStorage.getItem("privacyStatus")
      ? (this.banner = false)
      : (this.banner = true);
  },
  computed: {
    width() {
      return this.$vuetify.breakpoint.smAndDown ? 290 : 600;
    }
  }
};
</script>

<style lang="sass" scoped>
.privacy-banner
  position: fixed
  bottom: 0vh
  right: 0
  z-index: 90000
</style>
