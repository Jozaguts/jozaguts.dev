<template>
  <v-row>
    <v-col>
      <v-toolbar>
        <v-chip-group
          multiple
          active-class="primary"
          v-model="active"
        >
          <v-chip v-for="tag in tags" :key="tag" :value="tag" class="mr-3 text-capitalize" >{{tag}}</v-chip>
        </v-chip-group>
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Toolbar",
  data(){
    return {
      tags:['javascript', 'php','vuejs', 'laravel', 'css'],
      active:[]
    }
  },
  watch:{
    active(value){
      if(value) this.postsFilter(value)
    }
  },
  methods:{
    postsFilter(filters){
      this.$store.commit('blog/POST_FILTER', filters)
    }
  }
}
</script>

<style scoped>

</style>
