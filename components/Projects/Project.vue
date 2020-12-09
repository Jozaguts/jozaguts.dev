<template>
  <v-card max-width="350">
    <v-hover>
      <template v-slot:default="{hover}">
        <v-row no-gutters style="position:relative">
          <v-col cols="12" class="pa-1" no-gutters>
            <v-card-title class="--text font-weight-bold" v-text="title"></v-card-title>
            <v-img
              :src="require(`~/assets/img/projects/${mainImage.src}`)"
              class="white--text align-end ma-2"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
              height="200px"
              :alt="isSpanishLanguage ? mainImage.altEs : mainImage.altEn"
            >
            </v-img>
          </v-col>
          <v-col cols="6" class="pa-1">
          <v-img
            :src="require(`~/assets/img/projects/${secondaryImage.src}`)"
            class="white--text align-end ma-2"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
            height="200px"
            :alt="isSpanishLanguage ? secondaryImage.altEs : secondaryImage.altEn"
          >
          </v-img>
          </v-col>
          <v-col cols="6" class="pa-1">
          <v-img
            :src="require(`~/assets/img/projects/${thirdImage.src}`)"
            class="white--text align-end ma-2"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
            height="200px"
            :alt="isSpanishLanguage ? thirdImage.altEs : thirdImage.altEn"
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
        v-for="(icon,i) in technologyStackIcons"
        :key="i+icon.icon"
        :color="icon.color"
        >{{ icon.icon }}
      </v-icon>
      <v-spacer></v-spacer>
      <v-btn
        icon
        v-for="btn in socialMediaIcons"
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
</template>

<script>
export default {
  name: "Project",
  props:{
    title:{
      type:String,
      required:true,
    },
    mainImage:{
      type:Object,
      required:true,
    },
    secondaryImage:{
      type:Object,
      required:true,
    },
    thirdImage:{
      type:Object,
      required:true,
    },
    technologyStackIcons:{
      required:true,
      type:Array
    },
    socialMediaIcons:{
      required:true,
      type:Array
    }
  },
  computed:{
  isSpanishLanguage() {
    return this.$i18n.locale === 'es'
  }
  }
}
</script>
