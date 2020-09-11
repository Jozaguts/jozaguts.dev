<template>
  <v-row class="my-10 py-5" no-gutters id="projects">
    <v-col cols="12"  :align="[this.$vuetify.breakpoint.smAndDown ? 'center' : 'left']">
      <header class="py-5">
        <h2 class="text-h2 primary--text font-weight-bold">{{ $t('titleProjectContainer') }}</h2>
      </header>
    </v-col>
    <v-col cols="12" md="4" lg="4" xl="4" align-md="left" align-lg="left" align="center" v-for="project in projects"
           :key="project.id">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
        v-if="loading"
      ></v-skeleton-loader>
      <v-card max-width="300" v-else>
        <v-hover>
          <template v-slot:default="{hover}">
            <v-row no-gutters style="position:relative">
              <v-col cols="12" class="pa-1" no-gutters>
                <v-card-title class="primary--text font-weight-bold" v-text="project.title"></v-card-title>
                <v-img
                  :src="project.images[0].src"
                  class="white--text align-end ma-2"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                  height="200px"
                >
                </v-img>
              </v-col>
              <v-col cols="6" class="pa-1">
                <v-img
                  :src="project.images[1].src"
                  class="white--text align-end ma-2"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
                  height="200px"
                >
                </v-img>
              </v-col>
              <v-col cols="6" class="pa-1">
                <v-img
                  :src="project.images[2].src"
                  class="white--text align-end ma-2"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
                  height="200px"
                >
                </v-img>
              </v-col>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  opacity=".80"
                  color="#003663"
                >
                  <p class="pa-2 white--text">
                    {{ $t('aboutEcommerce') }}
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-row>
          </template>
        </v-hover>
        <v-card-actions>
          <v-icon
            v-for="(icon,i) in project.technologyStackIcons"
            :key="i+icon.icon"
            :color="icon.color"
          >{{ icon.icon }}
          </v-icon>
          <v-spacer></v-spacer>
          <v-btn
            icon
            v-for="btn in project.socialMediaIcons"
            :key="btn.icon"
            :href="btn.link"
            target="_blank"
            link
            rel="nofollow"
          >
            <v-icon>{{ btn.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  created() {
    this.loading = true;
  },
  mounted() {
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      projects: [
        {
          title: "My store",
          id: 1,
          images: [
            {
              src: require("~/assets/img/projects/mystore.png"),
              route: "/",
            },
            {
              src: require("~/assets/img/projects/mystore2.png"),
              route: "/checkout",
            },
            {
              src: require("~/assets/img/projects/mystore3.png"),
              route: "/admin/products",
            }
          ],
          technologyStackIcons: [
            {
              icon: "fab fa-laravel",
              color: "#FF2D20",
            },
            {
              icon: "fab fa-vuejs",
              color: "#4fc08d",
            },
            {
              icon: "fab fa-aws",
              color: "#FF9900",
            },
          ],
          socialMediaIcons:
            [
              {
                icon: "fab fa-github",
                link: "https://github.com/jozaguts/my-store",
              },
              {
                icon: "fab fa-behance",
                link: "",
              },
              {
                icon: "fas fa-link",
                link: "https://my-store-jozaguts.herokuapp.com/",
              },
              {
                icon: "far fa-heart",
                link: "",
              },
            ],
          flex: 12,
          likes: 4,
        }
      ],
    }
      ;
  },
};
</script>
