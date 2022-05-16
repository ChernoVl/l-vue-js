<template>
  <hr>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Login:</label>
      <input
          id="login"
          class="form-control"
          v-model.trim="form.login"
      >
    </div>
    <div class="form-group">
      <label for="login">Mail:</label>
      <input
          id="email"
          type="email"
          class="form-control"
          v-model.trim="form.email"
      >
    </div>
    <div class="form-group">
      <label for="login">Password:</label>
      <input
          id="password"
          type="password"
          class="form-control"
          v-model.trim="form.password"
      >
    </div>
    <div class="form-group">
      <label for="country">Country of residence:</label>
      <select id="country" class="form-control" v-model="form.country">
        <option
            v-for="(country, index) in countries"
            :value="country.value"
            :key="index"
        >
          {{ country.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="themes">Like themes:</label>
      <select id="themes" class="form-control" v-model="form.favoriteThemes" multiple>
        <option
            v-for="(theme, index) in themes"
            :value="theme.value"
            :key="index"
        >
          {{ theme.label }}
        </option>
      </select>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" value="1" class="form-check-input" id="notification" v-model="form.agreeWithSendEmail">
      <label class="form-check-label" for="notification">Notify me about new course</label>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" value="2" class="form-check-input" id="notification2" v-model="form.agreeWithSendEmail">
      <label class="form-check-label" for="notification2">Notify me about new course 2</label>
    </div>
    <div class="flex">
      <div class="form-check">
        <input type="radio" class="form-check-input" value="male" name="exampleRadios" id="male" v-model="form.gendere">
        <label class="form-check-label" for="male">
          Male
        </label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input" value="female" name="exampleRadios" id="female" v-model="form.gendere">
        <label class="form-check-label" for="female">
          Female
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>

  <hr>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import useVuelidate from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'

@Options({
  data() {
    return {
      form: {
        login: '',
        email: '',
        password: '',
        country: 'ua',
        favoriteThemes: ['IT'],
        agreeWithSendEmail: [],
        gendere: 'male',
      },
      countries: [
        {
          label: 'Ukraine',
          value: 'ua',
        },
        {
          label: 'Slovak',
          value: 'sk',
        },
        {
          label: 'Austria',
          value: 'au',
        },
      ],
      themes: [
        {
          label: 'Technology',
          value: 'IT',
        },
        {
          label: 'Languages',
          value: 'lgs',
        },
        {
          label: 'Mathematics',
          value: 'math',
        },
      ]
    }
  },
  setup() {
    return {v$: useVuelidate()}
  },
  validations: {
    // NOT WORKING
    form: {
      login: {
        required,
        simpleValidator(value: string){
          console.log(value);
          return value.length>5
        }
      }, // Matches this.firstName
      email: {required}, // Matches this.lastName
      // password: {
      //   email: { required, email } // Matches this.contact.email
      // }
    }
  },
})


export default class SignUp extends Vue {
}
</script>

<style scoped lang="scss">
.sign-up {
  width: 400px;
}

.form-group {
  margin-left: 20%;
}

.form-control {
  width: 400px;
}

.form-check {
  margin-right: 10px;
}

button {
  margin-top: 15px;
}
</style>
