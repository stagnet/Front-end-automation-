<template>
  <div>
    <v-sheet elevation="3" class="py-3 px-1">
      <p class="body-1 text--primary pa-4">
        My Workflows
      </p>
      <v-data-table
        :headers="headers"
        :items="users"
        item-key="id"
        :items-per-page="3"
        show-select
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
export default {
  name: "SmallDataTable",
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: true,
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "Mode", value: "mode" },
        { text: "Execution Time", value: "time" },
        { text: "Status", value: "status" }
      ],
      users: [
        {
          id: "123456",
          name: "NYC- workflow",
          mode: "Trigger",
          time: "22.295 sec",
          status: "Running"
        },
        {
          id: "1223545",
          name: "NYC-Warn-Report",
          mode: "Trigger",
          time: "20.195 sec",
          status: "Error"
        },
        {
          id: "234116",
          name: "NYC-Warn-Workflow",
          mode: "Trigger",
          time: "22.294 sec",
          status: "Success"
        },
        {
          id: "1775456",
          name: "NYC-Workflow",
          mode: "Trigger",
          time: "15.295 sec",
          status: "Running"
        },
        {
          id: "343456",
          name: "SYD- workflow",
          mode: "Trigger",
          time: "12.295 sec",
          status: "Error"
        },
        {
          id: "112456",
          name: "DL-Workflow",
          mode: "Trigger",
          time: "18.95 sec",
          status: "Success"
        }
      ]
    };
  },
  methods: {
    getColor(status) {
      if (status == "Error") return "red";
      else if (status == "Running") return "orange";
      else return "green";
    }
  }
};
</script>

<style lang="scss" scoped></style>
