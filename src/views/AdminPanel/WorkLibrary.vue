<template>
  <div class="container">
    <v-col cols="12" md="3" class="ml-2">
      <p class="text-h6 text--primary">
        Workflows Library
      </p>
    </v-col>
    <v-row class="mt-n3">
      <v-col cols="12" md="8" sm="12" class="mt-2">
        <v-text-field
          label="Find a new workflow or workflow you already use"
          solo
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="2" class="mr-6 mt-2">
        <category-button />
      </v-col>
    </v-row>

    <!-- linkedin workflow cards -->

    <v-col cols="12" md="3" sm="12" class="mt-n4 ml-2">
      <p class="text-h6 text--primary">
        Linkedin
      </p>
    </v-col>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="3"
        sm="6"
        v-for="(item, index) in items"
        :key="index"
      >
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
          <v-card-actions class="mx-1 ">
            <strong class="text-caption">
              {{ item.price }}
            </strong>
            <v-spacer></v-spacer>
            <v-btn class="ma-1 text-caption" outlined color="#4FC3F7">
              {{ item.btnText }}
            </v-btn>
          </v-card-actions>
          <!-- Buttons Group Ends -->
        </v-card>
      </v-col>
    </v-row>

    <!-- Gmail workflows cards -->
    <v-col cols="12" md="3" sm="12" class="ml-2">
      <p class="text-h6 text--primary">
        Gmail
      </p>
    </v-col>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="3"
        sm="6"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-card class="ma-4 card" height="278">
          <v-col cols="12" md="4" sm="4">
            <!-- Use this for img dynamically -->
            <v-img
              :src="require(`@/assets/img/${item.img2}`)"
              :height="item.G_height"
              :width="item.G_width"
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
          <v-card-actions class="mx-1 ">
            <strong class="text-caption">
              {{ item.price }}
            </strong>
            <v-spacer></v-spacer>
            <v-btn class="ma-1 text-caption" outlined color="#4FC3F7">
              {{ item.btnText }}
            </v-btn>
          </v-card-actions>
          <!-- Buttons Group Ends -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import CategoryButton from "../../components/CategoryButton/CategoryButton";
  export default {
    name: "Library",
    components: {
      CategoryButton,
    },
    data: () => ({
      items: [
        {
          img: "linkedin.png",
          img2: "gmail.png",
          title: "Linkedin Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "Free",
          btnText: "Use this Template",
          height: "52.82",
          width: "52.85",
          G_height: "42.21",
          G_Width: "56.39",
        },
        {
          img: "linkedin.png",
          img2: "gmail.png",
          title: "Linkedin Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "$30.00",
          btnText: "BUY",
          height: "52.82",
          width: "52.85",
          G_height: "42.21",
          G_Width: "56.39",
        },
        {
          img: "linkedin.png",
          img2: "gmail.png",
          title: "Linkedin Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "Free",
          btnText: "Use this Template",
          height: "52.82",
          width: "52.85",
          G_height: "42.21",
          G_Width: "56.39",
        },
        {
          img: "linkedin.png",
          img2: "gmail.png",
          title: "Linkedin Workflow",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur.",
          price: "$30.00",
          btnText: "BUY",
          height: "52.82",
          width: "52.85",
          G_height: "42.21",
          G_Width: "56.39",
        },
      ],
    }),
  };
</script>

<style lang="scss" scoped></style>
