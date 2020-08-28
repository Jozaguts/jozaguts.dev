<template>
  <section >
    <v-row align-content-md="center" justify-md="center">
      <v-col justify="left" align="left" cols="9" md="6">
        <v-card class="d-inline-block mx-auto" flat>
          <v-row>
            <v-col cols="4">
              <v-img
                elevation="0"
                height="100"
                width="100"
                :src="img"
              ></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>Sagit Gutiérrez</v-card-title>
              <v-card-subtitle>Web Developer</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3" md="6" class="d-flex flex-column justify-space-around align-md-end" justify="space-between">
        <v-btn href="mailto:jozaguts@gmail.com" color="accent" text class="text-capitalize">
          <v-icon left>fas fa-envelope</v-icon>
          <span class="d-none d-md-block d-lg-block black--text">
          Contact@Jozaguts.dev
        </span>
        </v-btn>
        <v-btn href="tel:+523222397179" text color="accent" class="text-capitalize">
          <v-icon left>fas fa-phone</v-icon>
          <span class="d-none d-md-block d-lg-block black--text">
          +52 322 239 7179
        </span>
        </v-btn>
        <v-btn text color="accent" class="text-capitalize">
          <v-icon left>fas fa-map-marker-alt</v-icon>
          <span class="d-none d-md-block d-lg-block black--text">
        Puerto Vallarta, Jalisco México
        </span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row align-content-md="center" justify-md="center">
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="6">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> About me</h2>
          </header>
          <div class="content">
            <p class=" font-italic mx-8">
              {{$t('aboutMeContent')}}
            </p>
          </div>
        </div>

      </v-col>
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="6">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> Course | Certifications</h2>
          </header>
          <div class="content">
            <v-timeline dense>
              <v-timeline-item
                color="primary"
                fill-dot
                icon="far fa-star"
                v-for="(course, i) in courses" :key="i"
              >
                
                <v-card flat>
                  <v-toolbar color="#3F160C" height="25" extension-height="20">
                    <v-toolbar-title class="white--text text-truncate " v-text="course.name"></v-toolbar-title>
                    <template v-slot:extension>
                      <v-img :max-width="course.img.size" max-height="20" :src="course.img.src" contain></v-img>
                    </template>
                  </v-toolbar>
                  <v-card-actions>
                    <v-list-item class="grow">
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
              </v-timeline-item>
            </v-timeline>
          </div>
        </div>

      </v-col>
    </v-row>
    <v-row align-content-md="center" justify-md="center">
      <v-col justify="left" class="d-flex flex-column" align="left" cols="12" md="6">
        <div class="content-container">
          <header class="d-flex">
            <v-icon left color="accent">
              far fa-dot-circle
            </v-icon>
            <h2 class="text-subtitle-2 "> Work History</h2>
          </header>
          <div class="content d-flex justify-start">
            <v-timeline dense>
              <v-timeline-item>
              <v-row>
                <v-col>
                  <h2 class="text--primary">Axovia Marketing</h2> 
                  <h4 class="text--secondary">(2016)</h4>
                  <em>{{$t("axovia")}}</em>
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
            <h2 class="text-subtitle-2 "> Academic background</h2>
          </header>
          <div class="content">
            <p class=" font-italic mx-8">
              hi I'm Sagit I'm from México I'm a Web developer with four years of experience and I have been worked with
              vueJs Laravel and related libraries as in and currently I'm working as freelance mode I wish to have an
              international experience and also provide a better life for myself and my family also I
              aspiring full-stack developer, with rich experience in developing websites.
              I would like to offer you a job specialized in you and your needs, Communication and specifications are
              the keys to a good job

              Thank you in advance for your time and consideration. I look forward to working with you soon.
            </p>
          </div>
        </div>

      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "resume",
  data() {
    return {
      img: require("~/assets/img/perfil.png"),
    }
  },
  computed: {
    courses() {
      return [
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
</style>
