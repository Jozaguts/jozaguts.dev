<template>
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-avatar
          size="150"
          :color="color != undefined 
            ? color 
            : this.$vuetify.theme.themes.light.accent"
        >
          <v-img :src="imgPath"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <h1 v-text="userName" class="title"></h1>
      </v-col>
    </v-row>
    
</template>

<script>
export default {
  props:['color','imgPath', 'userName']

}
</script>

<style>

</style>
