<template>
  
    <projects-container />
  
</template>

<script>
import ProjectsContainer from "@/components/Projects/ProjectsContainer";

export default {
  data() {
    return {
      title: ""
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
        }
      ]
    };
  },
  components: {
    ProjectsContainer
  }
};
</script>
