<template>
  <projects-container/>
</template>

<script>
import ProjectsContainer from "@/components/Projects/ProjectsContainer";

export default {
  data() {
    return {
      title: "Home"
    };
  },

  computed: {
    setTitle() {
      this.$route.fullPath === "/es"
        ? (this.title = "Inicio")
        : (this.title = "Home");
    }
  },
  mounted() {
    this.setTitle;
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
  components: {
    ProjectsContainer
  }
};
</script>
