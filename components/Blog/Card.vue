<template>
  <v-card  width="300px">
    <v-img
      class="white--text align-end"
      width="300px"
      :src="image"
    >
      <v-card-title v-text="title" ></v-card-title>
    </v-img> 
    <v-card-subtitle class="pb-0">
      {{subtitle}}
    </v-card-subtitle>
    <v-card-text class="text--primary"> 
      {{text}}
    </v-card-text>
    <v-card-actions v-for="action in actions" :key="action.id" >
      <v-btn
        :color="action.color"
        text
      >
        {{action.content}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "Card",
  props:{
    image:{
      required:true,
      type:String,
    },
    title:{
      required:true,
      type:String,
    },
    subtitle:{
      required:true,
      type:String,
    },
    text:{
      required:true,
      type:String,
    },
    actions:{
      required:true,
      type: Array
    }
  }
}
</script>
