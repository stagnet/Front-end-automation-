<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="info" dark v-bind="attrs" v-on="on">
          Add New
        </v-btn>
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
                  dense
                  outlined
                  label="Credential Name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  dense
                  :items="items"
                  label="Credential type"
                  outlined
                ></v-select>
              </v-col>

              <!-- ... -->
              <v-col cols="12" md="12" sm="12">
                <span class="Body-1 font-weight-bold">Credentials Data</span>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  dense
                  outlined
                  label="API URL*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
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
                <v-checkbox label="Active Campaign" value="value"></v-checkbox>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-checkbox label="Active Campaign" value="value"></v-checkbox>
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
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    name: "Modal",
    data: () => ({
      dialog: false,
      items: [
        "ActiveCampaign API",
        "Google API",
        "Instagram API",
        "Linkedin API",
      ],
    }),
  };
</script>
