<template>
  <v-container>
    <blog-banner />
    <toolbar-component />
    <card-container />
  </v-container>
</template>

<script>
export default {
  name: "blog",
  layout: 'blog',
  head(){
    return{
      title: this.title,
      meta: [
        { 
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ],
    }
  },
  data(){
    return {
      title: ''
    }
  },
  components:{
    BlogBanner:() => import('~/components/Banners/BlogBanner'),
    CardContainer:() => import('~/components/Blog/CardContainer'),
    ToolbarComponent:() => import('~/components/Blog/Toolbar'),
  },
  computed: {
    setTitle() {
      this.$i18n.locale === 'es'
        ? (this.title = "Blog de tecnologías web y  temas sobre  Laravel, VueJs, NuxtJs y mas")
        : (this.title = "Web technologies blob and topics about Laravel, VueJs, NuxtJs and more");
    }
  },
  mounted(){
    this.setTitle
  }
}
</script>
