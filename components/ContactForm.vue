<template>
  <v-row class="my-10 py-5" no-gutters id="ContactForm">
    <v-col cols="12" :align="[$vuetify.breakpoint.smAndDown ? 'center' : 'left']">
      <header class="pb-5">
        <h2 class="primary--text" v-text="$t('form')"/>
      </header>
    </v-col>
    <v-col cols="12" md="6" lg="6" :align="[$vuetify.breakpoint.smAndDown ? 'center' : 'left']">
      <ValidationObserver v-slot="{valid}" ref="contactForm">
        <v-lazy
          v-model="isActive"
          :options="{
          threshold: .7
        }"
          min-height="200"
          transition="fade-transition"
        >
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
              <v-btn type="submit" class="ma-2 btn-send-message" outlined x-large color="primary" :loading="loading"
                     :disabled="!valid">
                Send
                Message
              </v-btn>
            </div>
          </v-form>
        </v-lazy>
      </ValidationObserver>
    </v-col>

  </v-row>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate"


export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: null,
        email: null,
        message: null,
      },
      loading: false,
      isActive: false,
    }
  },
  async mounted() {
    await this.$recaptcha.init()
   

  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;
        await this.$recaptcha.execute('social')
          .then((token) => {
            this.$axios.post('/api/send-message', {data: this.formData, token})
          })

      } catch (error) {
        console.log('recaptcha error :', error)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>


