<template>
  <v-row justify="center" align="center" class="py-10" no-gutters>
    <client-only>
      <v-col cols="6">
        <header class="pb-5">
          <h2 class="primary--text">Contact form</h2>
        </header>
        <ValidationObserver v-slot="{valid}" ref="contactForm">
          <v-form @submit.prevent="onSubmit">
            <ValidationProvider v-slot="{errors}" name="Name" rules="required">
              <v-text-field
                :error-messages="errors"
                label="Name"
                v-model="formData.name"
              >
              </v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{errors}" name="Email" rules="email|required">
              <v-text-field
                :error-messages="errors"
                label="Email"
                v-model="formData.email"
              >
              </v-text-field>

            </ValidationProvider>
            <ValidationProvider v-slot="{errors}" name="Message" rules="required">
              <v-textarea
                :error-messages="errors"
                label="Message"
                v-model="formData.message"
              >
              </v-textarea>
            </ValidationProvider>

            <div class="text-center">
              <v-btn type="submit" class="ma-2" outlined color="primary" :disabled="!valid">Send Message</v-btn>
            </div>
          </v-form>
        </ValidationObserver>
      </v-col>
    </client-only>
  </v-row>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: null,
        email: null,
        message: null
      }
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('social')
        // this.verifyToken(token)
        console.log('ReCaptcha token:', token)
      } catch (error) {
        console.log('Login error:', error)
      }
    },
    // async verifyToken (token){
    //   const reCaptchaData = {
    //     secret:'6LelF8kZAAAAAKNACgYCudrBa08u_fzTmLULF3Dv',
    //     response: token
    //   }
    // this.$axios.post('https://www.google.com/recaptcha/api/siteverify', {reCaptchaData}, {
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
    //   }
    // })
    // .then(response => console.log(response))
    // .catch(error=> console.log(error))  
    // },
    onSuccess(token) {
      console.log('Succeeded:', token)
    },
    onExpired() {
      console.log('Expired')
    }
  },
}
</script>

<style scoped lang="sass"></style>
