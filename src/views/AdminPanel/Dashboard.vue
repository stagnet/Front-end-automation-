<template>
  <div class="container">
    <!-- Popular workflows slider -->
    <v-row>
      <v-col cols="12" md="5" class=" text-center">
        <p class="text-h6 text--primary">
          Get Started With Our Most Popular Workflows
        </p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3" align="center">
        <v-btn color="info">Create Custom Worlflow</v-btn>
      </v-col>
    </v-row>
    <!-- ... -->
    <v-sheet class="mx-3 mt-3" elevation="3">
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
        mobile-breakpoint="360"
      >
        <v-slide-item
          v-for="(item, index) in items"
          :key="index"
          v-slot:default="{ toggle }"
        >
          <v-col cols="2" md="2" sm="2" @click="toggle">
            <v-card class="ma-4 card" height="278">
              <v-col cols="12" md="4" sm="4">
                <!-- Use this for img dynamically -->
                <v-img
                  :src="require(`@/assets/img/${item.img}`)"
                  :height="item.height"
                  :width="item.width"
                />
              </v-col>

              <v-divider></v-divider>
              <v-card-text>
                <p class="subtitle-1 text--primary font-weight-bold">
                  {{ item.title }}
                </p>
                <div class="text--primary">
                  {{ item.description }}
                </div>
              </v-card-text>
              <!-- <v-divider></v-divider> -->
              <!-- Buttons Group start -->
              <v-card-actions class="mx-1 my-2">
                <strong class="text-caption">
                  {{ item.price }}
                </strong>
                <v-spacer></v-spacer>
                <v-btn class="ma-2 text-caption" outlined color="#4FC3F7">
                  {{ item.btnText }}
                </v-btn>
              </v-card-actions>
              <!-- Buttons Group Ends -->
            </v-card>
          </v-col>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <!-- popular workflow slider ends -->

    <!-- Analytics -->
    <charts />
    <!-- Data-table -->
    <v-row>
      <v-col cols="12" md="8" sm="12">
        <SmallDataTable />
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <!--Recent Created  -->
        <v-sheet elevation="3" class="py-3 px-1">
          <p class="body-1 text--primary pa-4">
            Recent Workflows
          </p>
          <v-list subheader two-line>
            <v-list-item v-for="item in items" :key="item.title">
              <div class="ma-2">
                <v-img
                  :src="require(`@/assets/img/${item.img}`)"
                  :height="item.height"
                  :width="item.width"
                />
              </div>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.description"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import Charts from "../../components/Charts/Charts";
  import SmallDataTable from "../../components/DataTables/SdataTable";
  export default {
    name: "Dashboard",
    components: {
      Charts,
      SmallDataTable,
    },
    data: () => ({
      model: null,
      selection: 1,
      items: [
        {
          img: "linkedin.png",
          title: "Linkedin Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "Free",
          btnText: "Use this Template",
          height: "52.82",
          width: "52.85",
        },
        {
          img: "gmail.png",
          title: "Gmail Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "$30.00",
          btnText: "Buy Now",
          height: "42.21",
          width: "56.39",
        },
        {
          img: "instagram.png",
          title: "Instagram Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "Free",
          btnText: "Use this Template",
          height: "52.94",
          width: "52",
        },
        {
          img: "twitter.png",
          title: "Twitter Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "$10.00",
          btnText: "Buy Now",
          height: "52.76",
          width: "52.82",
        },
      ],
    }),
  };
</script>

<style scoped>
  /* .card {
  width: 388px;
  height: 281px;
 
} */
</style>
