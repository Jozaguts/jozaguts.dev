<template>
  <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex flex-column justify-center align-center">
        <h2 class="subtitle-1 text-capitalize">{{$t('aboutMe')}}</h2>
        <p class="font-italic text-justify font-weight-light"
          v-html="$t('introduce')"/>
      </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
