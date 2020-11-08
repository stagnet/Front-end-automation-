<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="3" class="ml-2">
        <p class="text-h6 text--primary">Credentials</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="2" align="center">
        <modal @success="getCredentials" />
      </v-col>
    </v-row>
    <v-sheet elevation="3" class="py-3 px-1 ma-3">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            class="ma-2"
            v-model="search"
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
            label="Search"
            hide-details
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="2">
          <action-button />
        </v-col>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="credentials"
        item-key="_id"
        :items-per-page="7"
        show-select
        :search="search"
      >
      </v-data-table>
    </v-sheet>
  </div>
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
  data() {
    return {
      credentialService: null,
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "_id",
        },
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
        { text: "Created On", value: "createdAt" },
        { text: "Modified On", value: "updatedAt" },
      ],
      form: {
        name: "",
        type: "",
        data: {
          api_url: "",
          api_key: "",
        },
        activeCampign: "",
      },
      credentials: [],
    };
  },
  methods: {
    async getCredentials() {
      try {
        let response = await this.credentialService.getCredentials();
        this.credentials = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async createCredentials() {
      try {
        let response = await this.credentialService.createCredential(this.form);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getCredentials();
  },
  created() {
    this.credentialService = new credentialService(this.$http);
  },
};
</script>

<style lang="scss" scoped></style>
