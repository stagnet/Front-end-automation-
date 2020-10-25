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
      <v-col cols="12" md="6" sm="12" class="mt-10">
        <v-col cols="12" md="12" align="center">
          <p class="text-h6 text--primary">
            Forgot Password ?
          </p>
          <small class="body-2"
            >Please enter your associated email address to recover your
            password</small
          >
        </v-col>

        <v-form ref="form" v-model="valid" lazy-validation>
          <div align="center">
            <v-col cols="12" md="8" sm="12">
              <v-text-field
                v-model="email"
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
              <v-btn block color="info" class="mr-4">
                Send Request
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
  </div>
</template>

<script>
  export default {
    name: "forgotPass",
    data: () => ({
      valid: true,
      showPassword: false,

      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    }),
  };
</script>

<style lang="scss" scoped></style>
