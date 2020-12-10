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
  async asyncData({app}){
    try {
      let title = '';
      app.i18n.locale === 'es'
        ? title = "Blog de tecnologías web y  temas sobre  Laravel, VueJs, NuxtJs y mas"
        : title = "Web technologies blog and topics about Laravel, VueJs, NuxtJs and more"
      return {title}
    }catch(e) {
      console.log(e.message)
    }
  },
  head(){
    return{
      title: this.title,
      meta: [
        { 
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('SEO.blog.description')
        }
      ],
    }
  },
  components:{
    BlogBanner:() => import('~/components/Banners/BlogBanner'),
    CardContainer:() => import('~/components/Blog/CardContainer'),
    ToolbarComponent:() => import('~/components/Blog/Toolbar'),
  }
}
</script>
