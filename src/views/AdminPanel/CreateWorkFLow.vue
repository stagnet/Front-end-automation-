<template>
  <div>
    <v-app>
      <!-- drawer starts-->
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        class="drawer"
        width="380"
        mini-variant-width="70"
      >
        <v-list-item class="px-4">
          <v-list-item-icon>
            <v-icon>mdi-api</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="subtitle-1">Choose Api's</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-col cols="12" md="12" sm="12">
          <v-text-field
            class="mt-3 ml-2"
            dense
            outlined
            rounded
            label="Search"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>

        <v-divider></v-divider>

        <!-- api tabs start -->
        <v-tabs v-model="tab" slider-color="blue">
          <v-tab> All </v-tab>

          <v-tab> Regular </v-tab>

          <v-tab> Trigger </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-list class="mt-2">
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-avatar size="24">
                  <v-img :src="require(`@/assets/svg/${item.icon}`)"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.description"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
        <!-- api tabs start -->
      </v-navigation-drawer>
      <!-- drawer ends-->

      <!-- app bar starts -->
      <v-app-bar app color="white" elevation="2">
        <v-col cols="12" md="3" sm="4">
          <v-toolbar-items>
            <v-text-field
              class="mt-6 ml-2"
              dense
              label="Enter workflow name"
              append-icon="mdi-pencil"
            ></v-text-field>
          </v-toolbar-items>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="3" sm="4" class="d-flex justify-end">
          <v-btn color="info">Execute Workflow</v-btn>
        </v-col>

        <v-col cols="12" md="1" sm="4" class="d-flex justify-end">
          <v-switch
            label="Active"
            color="primary"
            value="primary"
            hide-details
            class="ml-5"
          ></v-switch>
        </v-col>
      </v-app-bar>
      <!-- app bar ends -->

      <!-- Properties drawer -->
      <v-navigation-drawer
        v-model="drawer2"
        absolute
        :mini-variant.sync="mini2"
        permanent
        class="drawer"
        width="320"
        mini-variant-width="30"
        right
      >
        <v-list-item class="pa-1">
          <v-btn icon @click.stop="mini2 = !mini2">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <v-list-item-title class="subtitle-1">Properties</v-list-item-title>
        </v-list-item>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-text-field
                class="mt-3"
                dense
                outlined
                label="Enter workflow name"
              ></v-text-field>
              <v-select
                class="mt-3"
                dense
                :items="Api"
                label="Credential Type"
                outlined
              ></v-select>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-row>
          <v-col cols="12" md="4" sm="3">
            <v-icon class="ml-2">mdi-lock</v-icon>
          </v-col>

          <v-col cols="12" md="6" sm="6">
            <p class="subtitle-2">Credential Data</p>
          </v-col>
        </v-row>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-text-field
                class="mt-3"
                dense
                outlined
                label="Api URL"
              ></v-text-field>
              <v-text-field
                class="mt-3"
                dense
                outlined
                label="Api Key"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-col cols="12" md="6" sm="6">
          <p class="subtitle-2">Node with Access</p>
        </v-col>
        <v-row>
          <v-col cols="12" md="6" sm="6">
            <v-checkbox
              class="ml-2 mt-n3"
              v-model="checkbox"
              label="Active Campaign"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-checkbox
              class="ml-2 mt-n3"
              v-model="checkbox2"
              label="Active Campaign"
            ></v-checkbox>
          </v-col>
        </v-row>
        <!-- button action -->
        <v-row>
          <v-col class="ml-3">
            <v-btn outlined color="warning"> Cancel </v-btn>
          </v-col>
          <v-col class="ml-3"><v-btn color="success">Save</v-btn> </v-col>
        </v-row>
      </v-navigation-drawer>
      <!-- Properties drawer ends -->
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "CreateFlow",
    data() {
      return {
        drawer: true,
        drawer2: false,
        checkbox: true,
        checkbox2: false,
        tab: null,
        Api: [
          "Active Campaign",
          "Affinity",
          "Agile CRM",
          "Airtable",
          "AMQP Sender",
          "Asana",
        ],
        items: [
          {
            title: "Active Campaign",
            description: "Create and edit data in Active Campaign",
            icon: "Active_campaign.svg",
          },
          {
            title: "Affinity",
            description: "Consume Affinity Api",
            icon: "Affinity.svg",
          },
          {
            title: "Agile CRM",
            description: "Consume Agile CRM Api",
            icon: "Agile.svg",
          },
          {
            title: "Airtable",
            description: "Read update, write & delete data",
            icon: "Airtable.svg",
          },
          {
            title: "AMQP Sender",
            description: "Send a Message via AMQP 1.0",
            icon: "AMQP.svg",
          },
          {
            title: "Asana",
            description: "Access and edit asana tasks",
            icon: "Asana.svg",
          },
        ],
        mini: true,
        mini2: true,
      };
    },
  };
</script>

<style scoped>
  .drawer {
    margin-top: 65px;
  }
</style>
