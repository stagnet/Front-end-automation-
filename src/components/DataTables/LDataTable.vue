<template>
  <div>
    <v-sheet elevation="3" class="py-3 px-1">
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
        <template v-slot:item.status="{ item }">
          <v-chip :color="getColor(item.status)" dark>
            {{ item.status }}
          </v-chip>
        </template>
      </v-data-table>
    </v-sheet>
  </div>
</template>

<script>
  import ActionButton from "../ActionButton/ActionButton";

  export default {
    name: "LargeDataTable",
    props: ["dialog"],
    components: {
      ActionButton,
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
          { text: "Mode", value: "mode" },
          { text: "Execution Time", value: "time" },
          { text: "Status", value: "status" },
          { text: "Created On", value: "created_on" },
          { text: "Modified On", value: "modified_on" },
        ],
        users: [
          {
            id: "123456",
            name: "NYC- workflow",
            mode: "Trigger",
            time: "22.295 sec",
            status: "Running",
            created_on: "Sep 10, 2020",
            modified_on: "Sep 18, 2020",
          },
          {
            id: "1223545",
            name: "NYC-Warn-Report",
            mode: "Trigger",
            time: "20.195 sec",
            status: "Error",
            created_on: "Sep 11, 2020",
            modified_on: "Sep 16, 2020",
          },
          {
            id: "234116",
            name: "NYC-Warn-Workflow",
            mode: "Trigger",
            time: "22.294 sec",
            status: "Success",
            created_on: "Sep 2, 2020",
            modified_on: "Sep 7, 2020",
          },
          {
            id: "1775456",
            name: "NYC-Workflow",
            mode: "Trigger",
            time: "15.295 sec",
            status: "Running",
            created_on: "Sep 6, 2020",
            modified_on: "Sep 8, 2020",
          },
          {
            id: "343456",
            name: "SYD- workflow",
            mode: "Trigger",
            time: "12.295 sec",
            status: "Error",
            created_on: "Sep 5, 2020",
            modified_on: "Sep 15, 2020",
          },
          {
            id: "112456",
            name: "DL-Workflow",
            mode: "Trigger",
            time: "18.95 sec",
            status: "Success",
            created_on: "Sep 1, 2020",
            modified_on: "Sep 11, 2020",
          },
          {
            id: "11246",
            name: "DL-Workflow",
            mode: "Trigger",
            time: "18.95 sec",
            status: "Success",
            created_on: "Sep 1, 2020",
            modified_on: "Sep 11, 2020",
          },
          {
            id: "11456",
            name: "DL-Workflow",
            mode: "Trigger",
            time: "18.95 sec",
            status: "Success",
            created_on: "Sep 1, 2020",
            modified_on: "Sep 11, 2020",
          },
        ],
      };
    },
    methods: {
      getColor(status) {
        if (status == "Error") return "red";
        else if (status == "Running") return "orange";
        else return "green";
      },
    },
  };
</script>

<style lang="scss" scoped></style>
