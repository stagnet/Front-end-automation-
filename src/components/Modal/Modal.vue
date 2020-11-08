<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="info" dark v-bind="attrs" v-on="on"> Add New </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Credentials</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <!-- ... -->
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="form.name"
                  dense
                  outlined
                  label="Credential Name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="form.type"
                  dense
                  outlined
                  label="Credential type*"
                  required
                ></v-text-field>
                <!-- <v-select
                  dense
                  :items="items"
                  label="Credential type"
                  outlined
                ></v-select> -->
              </v-col>

              <!-- ... -->
              <v-col cols="12" md="12" sm="12">
                <span class="Body-1 font-weight-bold">Credentials Data</span>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  v-model="form.api_key"
                  dense
                  outlined
                  label="API URL*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  v-model="form.api_url"
                  dense
                  outlined
                  label="API Key*"
                  required
                ></v-text-field>
              </v-col>

              <!-- ... -->
              <v-col cols="12" md="12" sm="12">
                <span class="Body-1 font-weight-bold">Node Access With</span>
              </v-col>

              <v-col cols="12" md="6" sm="6">
                <v-checkbox
                  v-model="form.activeCampign"
                  label="Active Campaign"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="createCredentials">
            Save
            <v-progress-circular
              v-if="loading"
              indeterminate
              :width="5"
              color="primary"
            ></v-progress-circular>
          </v-btn>
        </v-card-actions>
        <v-snackbar v-model="snackbar" :timeout="timeout">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
import Modal from "../../components/Modal/Modal";
import ActionButton from "../../components/ActionButton/ActionButton.vue";
import credentialService from "@/services/credentials";
export default {
  name: "Credential",
  components: {
    ActionButton,
    Modal,
  },
  name: "Modal",
  data() {
    return {
      credentialService: null,
      loading: false,
      search: "",
      text: "",
      timeout: 2000,
      dialog: false,
      radioGroup: 1,
      snackbar: false,
      form: {
        name: "",
        type: "",
        api_url: "",
        api_key: "",
        activeCampign: false,
      },
      credentials: [],
    };
  },
  methods: {
    async createCredentials() {
      this.loading = true;
      try {
        console.log(this.form);
        let response = await this.credentialService.createCredential(this.form);
        this.loading = false;
        this.dialog = false;
        this.snackbar = true;
        this.text = "Credential Created";
        this.$emit("success");
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
  },

  created() {
    this.credentialService = new credentialService(this.$http);
  },
};
</script>

<style lang="scss" scoped></style>
