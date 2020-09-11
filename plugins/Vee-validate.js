import Vue from 'vue';
import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import {required, email, min, numeric, required_if} from 'vee-validate/dist/rules';

// Add a rule.
extend('required', required);
extend('email', email);
extend('min', min);
extend('numeric', numeric);
extend('required_if', required_if);


// Register it globally
// Vue.component('ValidationProvider', ValidationProvider)
// Vue.component('ValidationObserver', ValidationObserver)

export default {
  components: {
    'ValidationProvider': ValidationProvider,
    'ValidationObserver': ValidationObserver
  }
}
