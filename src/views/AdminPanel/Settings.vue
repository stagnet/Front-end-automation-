<template>
  <div class="container">
    <v-col cols="12" md="3" class="ml-2">
      <p class="text-h6 text--primary">
        Settings
      </p>
    </v-col>
    <v-row justify="start" class="mt-n3">
      <v-col cols="12" md="6" sm="6">
        <v-chip-group
          mandatory
          active-class="primary--text"
          class="ml-4"
          center-active
        >
          <v-chip v-for="tag in tags" :key="tag.name" :to="tag.to">
            {{ tag.name }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Setting",
    data() {
      return {
        tags: [
          { name: "My Profile", to: "/settings/myprofile" },
          { name: "Email Notification", to: "/settings/email-notification" },
          { name: "Workflow", to: "/settings/myworkflow" },
          { name: "Billing and Usage", to: "/settings/billing" },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
