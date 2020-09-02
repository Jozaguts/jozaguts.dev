<template>
 <section>
   
 </section>
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
  data() {
    return{
      bannerImage: require('~/assets/img/headline-blog.png')
    }
  }
}
</script>

<style scoped>

</style>
