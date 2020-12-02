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
  head: {
    title: 'Blog',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
  },
  components:{
    BlogBanner:() => import('~/components/Banners/BlogBanner'),
    CardContainer:() => import('~/components/Blog/CardContainer'),
    ToolbarComponent:() => import('~/components/Blog/Toolbar'),
  }
}
</script>
