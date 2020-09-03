<template>
  <section>
    <MainBanner/>
  <projects-container/>
  </section>
</template>

<script>
import ProjectsContainer from "@/components/Projects/ProjectsContainer";
import MainBanner from "@/components/Banner/Main";

export default {
  components: {
    ProjectsContainer,MainBanner
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
  }  
};
</script>
