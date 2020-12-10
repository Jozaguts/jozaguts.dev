<template>
  <v-container ref="aboutPage" id="aboutPage">
    <v-row id="top" align-content-md="center" justify-md="center">
      <v-col justify="left" align="left" cols="10" md="6">
        <v-card class="d-inline-block mx-auto" width="340" ripple flat>
          <v-row>
            <v-col align="center" cols="4" md="5" lg="5">
              <v-img
                elevation="0"
                height="150"
                width="100"
                :src="img.src"
                :title="img.title"
                :alt="img.alt"
              />
            </v-col>
            <v-col cols="8" md="7" lg="7">
              <v-card-title class="font-weight-bold"> <h4>Sagit Gutiérrez</h4> </v-card-title>
              <v-card-subtitle><h5>Web Developer</h5></v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="2" md="6" class="d-flex flex-column align-center justify-space-around align-md-end"
             justify="space-between">
        <v-btn href="mailto:jozaguts@gmail.com" text class="text-capitalize">
          <v-icon color="accent" :left="$vuetify.breakpoint.mdAndUp">fas fa-envelope</v-icon>
          <span class="d-none d-md-block d-lg-block">Contact@Jozaguts.dev</span>
        </v-btn>
        <v-btn href="tel:+523222397179" text class="text-capitalize">
          <v-icon color="accent" :left="$vuetify.breakpoint.mdAndUp">fas fa-phone</v-icon>
          <span class="d-none d-md-block d-lg-block ">
          +52 322 239 7179
        </span>
        </v-btn>
        <v-btn text class="text-capitalize">
          <v-icon color="accent" :left="$vuetify.breakpoint.mdAndUp">fas fa-map-marker-alt</v-icon>
          <span class="d-none d-md-block d-lg-block ">
        Puerto Vallarta, Jalisco México
        </span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row id="middle" align-content-md="center" justify-md="center">
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="6">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> {{ $t('aboutMe') }}</h2>
          </header>
          <div class="content mx-8" v-html="$t('aboutMeContent')">
          </div>
        </div>
      </v-col>
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="6">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> {{ $t('academicBackground') }}</h2>
          </header>
          <div class="content mt-5">
            <v-card outlined elevation="10">
              <v-card-title> <h4>{{ $t('degree') }}</h4></v-card-title>
              <v-card-subtitle><h5>{{ $t('university.date') }}</h5></v-card-subtitle>
              <v-card-text><p>{{ $t('university.name') }}</p></v-card-text>
            </v-card>
          </div>
        </div>


      </v-col>
    </v-row>
    <v-row id="bottom" align-content-md="center" justify-md="center">
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="5">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> {{ $t('workHistory') }}</h2>
          </header>
          <div class="content d-flex justify-start">
            <v-timeline dense>

              <v-timeline-item
                color="accent"
                fill-dot
                icon="far fa-star"
                small
                v-for="work in  workHistory" :key="work.companyName"
              >

                <v-row>
                  <v-col>
                    <h3 class="text--primary"> {{ work.companyName }}</h3>
                    <h4 class="text--secondary">({{ work.dateY }})</h4>
                    <em>{{ $t("axovia") }}</em>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </div>
        </div>

      </v-col>
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="7">
        <div class="content-container">


          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> {{ $t('courses') }}</h2>
          </header>

          <div class="content">
            <v-timeline :dense="isMobile">
              <v-timeline-item
                color="accent"
                fill-dot
                icon="far fa-star"
                small
                v-for="(course, i) in courses" :key="i"
              >
                <v-hover>
                  <template v-slot="{hover}">
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      outlined
                      :elevation="hover?16:0"
                    >
                      <v-toolbar :flat="isMobile" :height="isMobile?30:45"
                                 :extension-height="isMobile?40:20">
                        <v-toolbar-title class="font-weight-bold text-truncate accent--text">
                          <h4 class="text-subtitle-1">{{course.name}}</h4>
                        </v-toolbar-title>
                      </v-toolbar>
                      <v-list-item>
                        <v-list-item-content class="mb-4 pt-0">
                          <div class="overline mb-4">
                            <v-img max-width="120" :src="course.img.src" 
                                   :title="isSpanishLanguage ?  ` logo de ${course.school}`: ` logo of ${course.school}` "
                                   :alt="isSpanishLanguage 
                                     ? `Logo de  ${course.school}` 
                                    : `Logo of ${course.school}`"
                            />
                          </div>
                          <v-list-item-title class="headline  mt-0">
                            <h5>  {{ course.teacher.name }}</h5>
                           
                          </v-list-item-title>
                          <v-list-item-subtitle><h6>{{ course.teacher.workAt }}</h6></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar
                          tile
                          size="80"
                          color="primary"
                        >
                          <v-img
                            class="elevation-6"
                            :src="course.teacher.img"
                            :title="isSpanishLanguage ?   `Profesor del curso ${course.name}` : `${course.teacher.name} teacher of course`" 
                            :alt="isSpanishLanguage 
                            ? `Imagen de ${course.teacher.name} profesor en FrontendMasters` 
                            : `image of'${course.teacher.name} teacher at FrontendMasters`"
                          />
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn :href="course.link" target="_blank" text>
                          <v-icon class="mr-1">fas fa-link</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-chip x-small pill v-for="(signature, i ) in course.signatures" :key="i" class="text-center">
                          {{ signature }}
                        </v-chip>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-hover>


              </v-timeline-item>
            </v-timeline>

          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "about-me",
  async asyncData({app}){
    try {
      let title = '';
      app.i18n.locale === 'es'
        ? title = "Acerca de Sagit Gutiérrez | Jozaguts" 
        : title = "About Sagit Gutiérrez | Jozaguts"
      return {title}
    }catch(e) {
      console.log(e.message)
    }
  },
  head() {
    return{
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$i18n.t("SEO.about.description")
        },
      ],
    }
  },
  data() {
    return {
      img: {
        src: require("~/assets/img/perfil.png"),
        alt: this.$i18n.locale === 'es' ? "Imagen de José Sagit Gutiérrez Terrazas" : "Image of José Sagit Gutiérrez Terrazas" ,
        title: this.$i18n.locale==='es' ? "Desarrollador Sagit Gutierrez Desarrollador" : "Developer Jose Sagit Gutierrez Terrazas" 
      },
      workHistory: [
        {
          companyName: 'Axovia Marketing',
          dateY: '2018',
          task: 'Here were my beginnings when I was still studying at the university I joined the company as an intern, I learned the world of back-end and front-end, with layout tasks, scripting, I began to learn laravel and a few months later I began with vuejs\n'
        }
      ],
      insideNavigationPage: [
        {
          icon: 'fas fa-chevron-up',
          value: '#top'
        },  
        {
          icon: 'fas fa-grip-lines',
          value: '#middle'
        },
        {
          icon: 'fas fa-chevron-down',
          value: '#bottom'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setTitle;
    });
    this.$store.commit('global/SET_INSIDE_NAVIGATION_PAGE', this.insideNavigationPage)
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    courses() {
      return [
        {
          name: 'Vuex for Intermediate Vue.js Developers',
          link: 'https://frontendmasters.com/courses/vuex/',
          img: {src: require('~/assets/img/frontendmasters-dark.png')},
          school: 'Frontend Master',
          teacher: {
            name: 'Divya Tagtachian',
            workAt: 'Netlify',
            img: "https://static.frontendmasters.com/assets/teachers/tagtachian/thumb@2x.jpg"
          },
          signatures: ["vuex"]
        },
        {
          name: 'Getting Started with JavaScript, v2',
          link: 'https://frontendmasters.com/courses/getting-started-javascript-v2/',
          img: {src: require('~/assets/img/frontendmasters-dark.png')},
          school: 'Frontend Master',
          teacher: {
            name: 'Kyle Simpson',
            workAt: 'You Don\'t Know JS',
            img: "https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg"
          },
          signatures: ['Javascript']
        },
        {
          name: 'Complete Intro to Web Development, v2',
          link: 'https://frontendmasters.com/courses/web-development-v2/',
          img: {src: require('~/assets/img/frontendmasters-dark.png')},
          school: 'Frontend Master',
          teacher: {
            name: 'Brian Holt',
            workAt: 'Microsoft',
            img: "https://static.frontendmasters.com/assets/teachers/holt/thumb.png"
          },
          signatures: ["Css",
            "Html5",
            "NodeJs",
            "Javascript",
            "Git",]
        },
      ]
    },
    isSpanishLanguage(){
      return this.$i18n.locale === 'es'
    },
  },
}
</script>

<style scoped lang="sass">
.content
  padding-left: 16px

</style>
