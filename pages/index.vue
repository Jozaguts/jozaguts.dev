<template>
  <v-container>
    <IndexBanner/>
    <projects-container/>
    <v-row>
      <v-col cols="12">
        <ContactForm/>
      </v-col>
    </v-row>
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
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Pagina personal portafolio proyectos y servicios de desarrollo web"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "web developer,  desarrollador web, proyectos, projects, vuejs, laravel, blog, vuetify, pagina web, sitio web, freelance, puerto vallarta"
        }
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
        ? (this.title = "Inicio")
        : (this.title = "Home");
    },
  }
};
</script>
<style lang="sass">
.container > .row:nth-child(odd)
  background-color: #333
</style>
