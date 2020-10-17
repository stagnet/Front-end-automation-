<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="3" class="ml-2">
        <p class="text-h6 text--primary">
          Credentials
        </p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="2" align="center">
        <modal />
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
        :items="users"
        item-key="id"
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
  export default {
    name: "Credential",
    components: {
      ActionButton,
      Modal,
    },
    data() {
      return {
        search: "",
        headers: [
          {
            text: "ID",
            align: "start",
            sortable: true,
            value: "id",
          },
          { text: "Name", value: "name" },
          { text: "Type", value: "type" },
          { text: "Created On", value: "created_on" },
          { text: "Modified On", value: "modified_on" },
        ],
        users: [
          {
            id: "123456",
            name: "NYC- workflow",
            type: "ActiveCampaign API",
            created_on: "Sep 10, 2020",
            modified_on: "Sep 18, 2020",
          },
          {
            id: "1223545",
            name: "NYC-Warn-Report",
            type: "Flow API",
            created_on: "Sep 11, 2020",
            modified_on: "Sep 16, 2020",
          },
          {
            id: "234116",
            name: "NYC-Warn-Workflow",
            type: "ActiveCampaign API",
            created_on: "Sep 2, 2020",
            modified_on: "Sep 7, 2020",
          },
          {
            id: "1775456",
            name: "NYC-Workflow",
            type: "Google API",
            created_on: "Sep 6, 2020",
            modified_on: "Sep 8, 2020",
          },
          {
            id: "343456",
            name: "SYD- workflow",
            type: "Affinity API",
            created_on: "Sep 5, 2020",
            modified_on: "Sep 15, 2020",
          },
          {
            id: "112456",
            name: "DL-Workflow",
            type: "Google API",
            created_on: "Sep 1, 2020",
            modified_on: "Sep 11, 2020",
          },
          {
            id: "11246",
            name: "DL-Workflow",
            type: "Affinity API",
            created_on: "Sep 1, 2020",
            modified_on: "Sep 11, 2020",
          },
          {
            id: "11456",
            name: "DL-Workflow",
            type: "ActiveCampaign API",
            created_on: "Sep 1, 2020",
            modified_on: "Sep 11, 2020",
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
