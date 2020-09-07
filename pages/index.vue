<template>
  <v-row>
    <v-col v-if="loading">
      <v-skeleton-loader
        class="mx-auto"
        type="image"
        width="100%"
        transition="scale-transition"
      ></v-skeleton-loader>
    </v-col>
    <v-col cols="12" class="d-flex align-center justify-center" v-else>
      <MainBanner/>
    </v-col>
    <v-col cols="12">
      <projects-container/>
    </v-col>
    <v-divider></v-divider>
    <v-col cols="12">
      <ContactForm/>
    </v-col>
  </v-row>
</template>

<script>
import ProjectsContainer from "@/components/Projects/ProjectsContainer";
import MainBanner from "@/components/Banner/Main";
import ContactForm from "@/components/ContactForm";

export default {
  components: {
    ProjectsContainer, MainBanner, ContactForm
  },
  mounted() {
    this.setTitle;
    this.$nextTick( () => {
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
    }
  }
};
</script>
