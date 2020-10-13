<template>
  <v-list class="mt-10 pt-10">
    <v-list-item v-for="icon in navigationReferences" :key="icon.icon" v-scroll-to="icon.value" link>
      <v-list-item-content class="text-center">
        <v-icon>
          {{ icon.icon }}
        </v-icon>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    navigationReferences: {
      required:true,
      type: Array
    }
  },
  name: "InsideNavigation"
}
</script>

<style scoped>

</style>
