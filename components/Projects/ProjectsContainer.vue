<template>
  <transition
    name="projects"
    :css="false"
  >
    <v-row class="my-10 py-5 padding" no-gutters id="projects" ref="projectsContainer"
           v-intersect.once="onIntersect"
    > 
      <v-col cols="12" :align="[$vuetify.breakpoint.smAndDown ? 'center' : 'left']">
        <header class="py-5">
          <h2 class="text-h2 primary--text font-weight-bold">{{ $t('titleProjectContainer') }}</h2>
        </header>
      </v-col>
      <v-container>
        <v-row>
          <v-col v-for="project in projects" :key="project.id">
            <ProjectComponent
              :title="project.title"
              :images="project.images"
              :mainImage="project.images[0]"
              :secondaryImage="project.images[1]"
              :thirdImage="project.images[2]"
              :technologyStackIcons="project.technologyStackIcons"
              :socialMediaIcons="project.socialMediaIcons"
            />
          </v-col>
        </v-row>
      </v-container>
   
    </v-row>
  </transition>
</template>

<script>
import {TimelineLite} from 'gsap'
import ProjectJson from "@/components/Projects/ProjectsData.json"
import ProjectComponent from "@/components/Projects/Project"

export default {
  components:{ProjectComponent},
  data() {
    return {
      loading: true,
      isIntersecting: false,
      projects: ProjectJson.projectsData
      // projects: [
      //   {
      //     title: "My store",
      //     id: 1,
      //     images: [
      //       {
      //         src: require("~/assets/img/projects/mystore.png"),
      //         route: "/",
      //       },
      //       {
      //         src: require("~/assets/img/projects/mystore2.png"),
      //         route: "/checkout",
      //       },
      //       {
      //         src: require("~/assets/img/projects/mystore3.png"),
      //         route: "/admin/products",
      //       }
      //     ],
      //     technologyStackIcons: [
      //       {
      //         icon: "fab fa-laravel",
      //         color: "#FF2D20",
      //       },
      //       {
      //         icon: "fab fa-vuejs",
      //         color: "#4fc08d",
      //       },
      //       {
      //         icon: "fab fa-aws",
      //         color: "#FF9900",
      //       },
      //     ],
      //     socialMediaIcons:
      //       [
      //         {
      //           icon: "fab fa-github",
      //           link: "https://github.com/jozaguts/my-store",
      //         },
      //         {
      //           icon: "fab fa-behance",
      //           link: "",
      //         },
      //         {
      //           icon: "fas fa-link",
      //           link: "https://my-store-jozaguts.herokuapp.com/",
      //         },
      //         {
      //           icon: "far fa-heart",
      //           link: "",
      //         },
      //       ],
      //     flex: 12,
      //     likes: 4,
      //   }
      // ],
    }
      ;
  },
  created() {
    this.loading = true;
  },
  mounted() {
    this.loading = false;
    const {projectsContainer} = this.$refs
    const tl = new TimelineLite()
  },
  methods: {
    onIntersect(entries, observer, isIntersecting) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      // console.log(entries)
      // console.log(entries)
      if (isIntersecting) {
        this.enter()
      }
      // console.log(entries[0].intersectionRatio >= 0.5)
      // this.isIntersecting = entries[0].intersectionRatio >= 0.5
    },
    enter(el) {
      const {projectsContainer} = this.$refs
      const tl = new TimelineLite();
      tl.from(projectsContainer,{
        scale:0,
        duration:.9
      })
      // done()
    },
    // leave: function(){
    //   console.log('entro al leave')
    //   const {projectsContainer} = this.$refs
    //   const tl = new TimelineLite();
    //   tl.to(projectsContainer,{
    //     scale:0,
    //     duration:.9
    //   })
    // }
  },

};
</script>
<style>

</style>
