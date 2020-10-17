<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="3" class="ml-2">
        <p class="text-h6 text--primary">
          My Workflows
        </p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3" align="center">
        <v-btn color="info">Create New Worlflow</v-btn>
      </v-col>
    </v-row>
    <v-col cols="12" md="12" sm="12">
      <LargeDataTable />
    </v-col>
  </div>
</template>

<script>
import LargeDataTable from "../../components/DataTables/LDataTable";
export default {
  name: "Workflow",
  components: {
    LargeDataTable
  }
};
</script>

<style lang="scss" scoped></style>
