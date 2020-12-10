<template>
  <v-container>
    <v-row id="top" v-if="isloaded" ref="bannerContainer">
      <v-col>
        <index-banner />
      </v-col>
    </v-row>
    <v-divider />
    <projects-container id="middle" />
    <v-divider />
    <contact-form id="bottom" />
    <privacy-component />
  </v-container>
</template>

<script>
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

export default {
  async asyncData({app}){
    try {
      let title = '';
      app.i18n.locale === 'es'
        ? title = "Desarrollador web Freelance | Jozaguts"
        : title = "Web Developer Freelance | Jozaguts"
      return {title}
    }catch(e) {
      console.log(e.message)
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {hid: "description", name: "description", content: this.$i18n.t("SEO.index.description")},
        { name: "robots", hid: "robots", content: "index, follow" },
        { name: "author", hid: "author", content: "Jozaguts - Sagit Gutiérrez" }
      ]
    };
  },
  components: {
    ProjectsContainer: () => import("@/components/Projects/ProjectsContainer"),
    IndexBanner: () => import("@/components/Banners/IndexBanner"),
    ContactForm: () => import("@/components/ContactForm"),
    PrivacyComponent: () => import("@/components/Banners/Privacy"),
    StatsComponent: () => import("@/components/Stats")
  },
  data() {
    return {
      isloaded: false,
      insideNavigationPage: [
        {
          icon: "fas fa-chevron-up",
          value: "#top"
        },
        {
          icon: "fas fa-grip-lines",
          value: "#middle"
        },
        {
          icon: "fas fa-chevron-down",
          value: "#bottom"
        }
      ]
    };
  },
  mounted() {
    const { bannerContainer } = this.$refs;
    const timeline = new gsap.timeline();

    timeline
      .from(bannerContainer, {
        opacity: 0,
        duration: 0.5,
        x: -500,
        ease: "circ.out"
      });
    this.$store.commit("global/SET_INSIDE_NAVIGATION_PAGE", this.insideNavigationPage);

    this.$nextTick(() => {
      this.isloaded = true;
    });
  },
};
</script>
