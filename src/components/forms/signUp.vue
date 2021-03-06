<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="12">
        <v-img
          src="../../assets/img/signup.jpg"
          width="950"
          height="960"
          aspect-ratio="1"
        />
      </v-col>

      <!-- form -->
      <v-col cols="12" md="6" sm="12" class="mt-5">
        <v-col cols="12" md="12" align="center">
          <p class="text-h6 text--primary">Create Account</p>
          <small class="body-2">Use your E-mail for registration</small>
        </v-col>

        <!-- sign in with -->
        <v-col cols="12" md="12" sm="4" align="center">
          <v-btn class="ma-2" elevation="3" fab color="white" small>
            <v-icon color="info">mdi-google</v-icon>
          </v-btn>
          <v-btn class="ma-2" elevation="3" fab color="white" small>
            <v-icon color="info">mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="ma-2" elevation="3" fab color="white" small>
            <v-icon color="info">mdi-linkedin</v-icon>
          </v-btn>
        </v-col>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="register"
        >
          <div align="center">
            <v-col cols="12" md="8" sm="12">
              <v-text-field
                v-model="form.name"
                :counter="10"
                :rules="nameRules"
                label="Name*"
                outlined
                filled
                required
              ></v-text-field
            ></v-col>
          </div>
          <div align="center">
            <v-col cols="12" md="8" sm="12">
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                label="E-mail*"
                outlined
                filled
                required
              ></v-text-field
            ></v-col>
          </div>
          <div align="center">
            <v-col cols="12" md="8" sm="12">
              <v-text-field
                v-model="form.password"
                :rules="passwordRules"
                label="Password*"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                outlined
                filled
                required
              ></v-text-field
            ></v-col>
            <v-col cols="12" md="8" sm="12">
              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>

              <v-btn
                block
                color="info"
                type="submit"
                class="mr-4"
                @click="validate"
              >
                <v-progress-circular
                  v-if="loading"
                  indeterminate
                  :width="5"
                  color="primary"
                ></v-progress-circular>
                Sign Up
              </v-btn>
            </v-col>
          </div>
          <v-col cols="12" md="12" align="center">
            <small class="body-2"
              >Already have account?
              <router-link to="/" color="blue">Login</router-link></small
            >
          </v-col>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import authService from "@/services/auth";
export default {
  name: "loginForm",
  data: () => ({
    valid: true,
    showPassword: false,
    name: "",
    password: "",
    snackbar: false,
    text: "",
    timeout: 2000,
    loading: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) =>
        (v && /^[a-z0-9\-]+$/.test(v)) ||
        `Only lowercase letters, numbers or hyphens allowed`,
      (v) => v.length >= 8 || "Min 8 characters",
    ],
    // select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,

    form: {
      email: "",
      password: "",
      name: "",
    },
    loading: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async register() {
      this.loading = true;
      try {
        const register = await this.authService.register(this.form);
        console.log(register);
        this.snackbar = true;
        this.text = "Registration Successful";
        this.loading = false;
        this.$router.push({
          path: "/",
        });
      } catch (err) {
        this.snackbar = true;
        console.log(err.response.data);
        this.text = err.response.data.message;
        this.loading = false;
      }
    },
  },
  created() {
    this.authService = new authService(this.$http);
  },
};
</script>

<style lang="scss" scoped></style>
