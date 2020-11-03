<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="8">
        <client-only>
          <pdf :src="resume"> </pdf>
        </client-only>
      </v-col>
      <v-col cols="12" md="8" lg="8">
        <v-btn color="primary" @click="onSubmit" :loading="loading"
          >Download</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pdf from "vue-pdf";
export default {
  head() {
    return {
      title: this.name,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$i18n.t("SEO.resume.description")
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$i18n.t("SEO.resume.keywords")
        },
        { name: "robots", hid: "robots", content: "index, follow" },
        { name: "author", hid: "author", content: "Jozaguts - Sagit Gutiérrez" }
      ]
    };
  },
  data() {
    return {
      name: "Resume | PDF",
      loading: false,
      lang: this.$i18n.locale
    };
  },
  async mounted() {
    await this.$recaptcha.init();
  },
  methods: {
    async onSubmit() {
      try {
        // this.loading = true
        await this.$recaptcha
          .execute("social")
          .then(token => {
            return this.$axios.post(
              "api/resume",
              { lang: this.lang, token },
              {
                responseType: "blob"
              }
            );
          })
          .then(resume => {
            var fileURL = window.URL.createObjectURL(new Blob([resume.data]));
            var fileLink = document.createElement("a");

            fileLink.href = fileURL;
            fileLink.setAttribute("download", "file.pdf");
            document.body.appendChild(fileLink);

            fileLink.click();
          });
      } catch (e) {
        console.error(e);
      }
    }
  },
  components: {
    pdf
  },
  computed: {
    resume() {
      return this.$i18n.locale === "en" ? "/resumeEn.pdf" : "resumeEs.pdf";
    }
  }
};
</script>

<style lang="sass" scoped>
.btn-pdf
  top: 50%
  left: 0px
</style>
