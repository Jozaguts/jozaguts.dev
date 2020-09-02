<template>
  <section>
    <v-row align-content-md="center" justify-md="center">
      <v-col justify="left" align="left" cols="10" md="6">
        <v-card class="d-inline-block mx-auto" width="340" flat>
          <v-row>
            <v-col align="center" cols="4" md="5" lg="5">
              <v-img
                elevation="0"
                height="100"
                width="100"
                :src="img"
              ></v-img>
            </v-col>
            <v-col cols="8" md="7" lg="7">
              <v-card-title class="font-weight-bold"> Sagit Gutiérrez</v-card-title>
              <v-card-subtitle>Web Developer</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="2" md="6" class="d-flex flex-column align-center justify-space-around align-md-end" justify="space-between">
        <v-btn href="mailto:jozaguts@gmail.com"  text class="text-capitalize">
          <v-icon color="accent" :left="$vuetify.breakpoint.mdAndUp">fas fa-envelope</v-icon>
          <span class="d-none d-md-block d-lg-block">Contact@Jozaguts.dev</span>
        </v-btn>
        <v-btn href="tel:+523222397179" text  class="text-capitalize">
          <v-icon color="accent" :left="$vuetify.breakpoint.mdAndUp">fas fa-phone</v-icon>
          <span class="d-none d-md-block d-lg-block ">
          +52 322 239 7179
        </span>
        </v-btn>
        <v-btn text class="text-capitalize">
          <v-icon color="accent"  :left="$vuetify.breakpoint.mdAndUp">fas fa-map-marker-alt</v-icon>
          <span class="d-none d-md-block d-lg-block ">
        Puerto Vallarta, Jalisco México
        </span>
        </v-btn>
      </v-col>
    </v-row><!-- first row name and address-->
    <v-row align-content-md="center" justify-md="center">
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="4">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> {{$t('aboutMe')}}</h2>
          </header>
          <div class="content">
            <p class=" mx-8">
              {{ $t('aboutMeContent') }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="8">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 ">  {{ $t('courses') }}</h2>
          </header>
          <div class="content">
            <v-timeline :dense="!$vuetify.breakpoint.mdAndUp">
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
                      :elevation="hover ? 4 : 0"
                      v-if="$vuetify.breakpoint.mdAndUp"
                    >
                      <v-toolbar flat height="30">
                        <v-toolbar-title class="font-weight-bold text-truncate accent--text custom-width-title-text"
                                         v-text="course.name">
                        </v-toolbar-title>
                      </v-toolbar>
                      <v-list-item>
                        <v-list-item-content class="mb-4 pt-0">
                          <div class="overline mb-4">
                            <v-img :max-width="course.img.size" max-height="20" :src="course.img.src" contain></v-img>
                          </div>
                          <v-list-item-title class="headline  mt-0">
                            {{course.teacher.name}}
                          </v-list-item-title>
                          <v-list-item-subtitle>{{ course.teacher.workAt }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar
                          tile
                          size="80"
                          color="primary"
                        >
                          <v-img
                            class="elevation-6"
                            :src="course.teacher.img"
                          ></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn :href="course.link" target="_blank" text>
                          <v-icon class="mr-1">fas fa-link</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-chip x-small pill v-for="(signature, i ) in course.signatures" :key="i" >
                          {{signature}}
                        </v-chip>
                      </v-card-actions>
                    </v-card>
                    <v-card v-else flat>
                      <v-toolbar color="#3F160C" height="25" extension-height="20">
                        <v-toolbar-title class="white--text text-truncate" v-text="course.name">

                        </v-toolbar-title>
                        <template v-slot:extension>
                          <v-img :max-width="course.img.size" max-height="20" :src="course.img.src" contain></v-img>
                        </template>
                      </v-toolbar>
                      <v-card-actions>
                        <v-list-item>
                          <v-list-item-avatar color="primary">
                            <v-img
                              class="elevation-6"
                              :src="course.teacher.img"
                            ></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title v-text="course.teacher.name"></v-list-item-title>
                            <v-list-item-subtitle v-text="course.teacher.workAt"></v-list-item-subtitle>
                          </v-list-item-content>
                          <v-row
                            align="center"
                            justify="end"
                          >
                            <v-btn :href="course.link" target="_blank" text>
                              <v-icon class="mr-1">fas fa-link</v-icon>
                            </v-btn>
                          </v-row>
                        </v-list-item>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-hover>
              </v-timeline-item>
            </v-timeline>
          </div>
        </div>

      </v-col>
    </v-row><!-- second row about me and course-->
    <v-row align-content-md="center" justify-md="center">
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="6">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> {{$t('workHistory')}}</h2>
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
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="6">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> {{$t('academicBackground')}}</h2>
          </header>
          <div class="content mt-5">
            <v-card outlined elevation="10">
              <v-card-title> {{$t('degree')}}</v-card-title>
              <v-card-subtitle>{{$t('university.date')}}</v-card-subtitle>
              <v-card-text>{{$t('university.name')}}</v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row><!-- third row work history and academic background-->
  </section>
</template>

<script>
export default {
  name: "resume",
  head: {
    title: 'Resume',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
  },
  data() {
    return {
      img: require("~/assets/img/perfil.png"),
      workHistory: [
        {
          companyName: 'Axovia Marketing',
          dateY: '2016',
          task: 'Here were my beginnings when I was still studying at the university I joined the company as an intern, I learned the world of back-end and front-end, with layout tasks, scripting, I began to learn laravel and a few months later I began with vuejs\n'
        }
      ],
    }
  },
  computed: {
    courses() {
      return [
        {
          name: 'Vuex for Intermediate Vue.js Developers',
          link: 'https://frontendmasters.com/courses/vuex/',
          img: {
            src: this.$vuetify.breakpoint.mdAndUp
              ? require('~/assets/img/frontendmasters-dark.png')
              : require('~/assets/img/FrontendMasterM.svg'),
            size: this.$vuetify.breakpoint.mdAndUp
              ? "120"
              : "60"
          },
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
          img: {
            src: this.$vuetify.breakpoint.mdAndUp
              ? require('~/assets/img/frontendmasters-dark.png')
              : require('~/assets/img/FrontendMasterM.svg'),
            size: this.$vuetify.breakpoint.mdAndUp
              ? "120"
              : "60"
          },
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
          img: {
            src: this.$vuetify.breakpoint.mdAndUp
              ? require('~/assets/img/frontendmasters-dark.png')
              : require('~/assets/img/FrontendMasterM.svg'),
            size: this.$vuetify.breakpoint.mdAndUp
              ? "120"
              : "60"
          },
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
    }
  }

}
</script>

<style scoped lang="sass">
.content
  padding-left: 16px

.custom-width-title-text
  font-size: 13px
</style>
