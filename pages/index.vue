<template>
  <v-container>
    <IndexBanner/>
    <projects-container/>
    <v-divider/>
    <ContactForm/>
  </v-container>
</template>

<script>
import ProjectsContainer from "@/components/Projects/ProjectsContainer";
import IndexBanner from "@/components/Banners/IndexBanner";
import ContactForm from "@/components/ContactForm";

export default {
  components: {
    ProjectsContainer, IndexBanner, ContactForm
  },
  mounted() {
    this.setTitle;
    this.$nextTick(() => {
      this.loading = false;
    })
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$i18n.t('SEO.index.description')},
        {
          hid: "keywords",
          name: "keywords",
          content: this.$i18n.t('SEO.index.keywords')
        },
        {name: 'robots', hid: "robots", content:'index, follow'},
        {name: 'author', hid: "author", content:'Jozaguts - Sagit Gutiérrez'},
       
      ]
    };
  },
  data() {
    return {
      title: "Home",
      loading: true
    };
  },
  computed: {
    setTitle() {
      this.$route.fullPath === "/es"
        ? (this.title = "Jozaguts - Desarrollador web")
        : (this.title = "Jozaguts - Web Developer");
    },
  }
};
</script>
<style lang="sass">

</style>
