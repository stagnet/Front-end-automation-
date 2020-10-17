<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2" depressed v-bind="attrs" v-on="on">
          All Categories
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    name: "CategorynButton",
    data: () => ({
      items: [
        { title: "Linkedin" },
        { title: "Google" },
        { title: "Instagram" },
        { title: "Twitter" },
      ],
    }),
  };
</script>
