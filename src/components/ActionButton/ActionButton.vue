<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2" depressed v-bind="attrs" v-on="on">
          Action
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
  name: "ActionButton",
  data: () => ({
    items: [
      { title: "Option 1" },
      { title: "Option 2" },
      { title: "Option 3" },
      { title: "Option 4" }
    ]
  })
};
</script>
