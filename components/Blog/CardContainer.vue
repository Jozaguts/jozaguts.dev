<template>
  <v-row class="mt-5" >
    <v-col cols="4" v-for="cardData in cardDatum" :key="cardData.id" >
      <card-component 
      :image="cardData.image"
      :title="cardData.title"
      :subtitle="cardData.subtitle"
      :text="cardData.text"
      :actions="cardData.actions"
      class="ma-auto text-center"
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "CardContainer",
  components: { CardComponent: ()=>import('~/components/Blog/Card')},
  computed: {
    cardDatum() {
      return this.$store.getters['blog/getPosts']
    }
  },
  mounted(){
    if(!localStorage.getItem('posts')){
      localStorage.setItem('posts', JSON.stringify( this.$store.getters['blog/getPosts']))
    }
  }
}
</script>
