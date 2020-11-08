<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon text v-bind="attrs" v-on="on">
          <v-icon> mdi-dots-vertical </v-icon>
        </v-btn>
      </template>

      <v-card class="container">
        <v-card-title class="headline">NYC-Workflow</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <small>Credential Name</small>
              <p>NYC-Workflow</p>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <small>Credential Type</small>
              <p>Active Campaign Api</p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-title class="body-1">Credential Data</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <small>Api URL</small>
              <p>nycworkflow12342234w.com</p>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <small>API key</small>
              <p>2YIG33tvyVI2buyi201c</p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-title class="body-1">Node With Access</v-card-title>
        <v-col cols="12" md="6" sm="6">
          <v-checkbox label="Active Campaign"></v-checkbox>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="danger" text @click="dialog = false"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    name: "credentialModal",
    data() {
      return {
        dialog: false,
      };
    },
  };
</script>
