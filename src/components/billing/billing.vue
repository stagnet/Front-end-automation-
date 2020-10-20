<template>
  <div class="container">
    <v-sheet elevation="2" shaped>
      <v-col cols="12" md="3" class="ml-2">
        <p class="text-h6 text--primary">
          Billing and Usage
        </p>
      </v-col>
      <v-row>
        <v-col cols="12" md="3" sm="6">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Current Plan</v-list-item-title>
              <v-list-item-subtitle>Free</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Remaining Workflows</v-list-item-title>
              <v-list-item-subtitle>80/100</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="mt-n5 justify-start">
            <apexchart
              type="radialBar"
              height="90"
              :options="Radial_options"
              :series="Radial_series"
            ></apexchart>
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Remaining Execution Hours</v-list-item-title>
              <v-list-item-subtitle>180/200</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="mt-n5 ">
            <apexchart
              type="radialBar"
              height="90"
              :options="Radial_options"
              :series="Radial_series"
            ></apexchart>
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <v-btn color="success" class="ml-8">Change Plan</v-btn>
        </v-col>
      </v-row>

      <!-- add payment -->
      <div class="pa-4">
        <v-card class="ma-1 mx-auto" max-width="450">
          <v-col cols="12" md="12" sm="12" align="center">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="body-1"
                  >No Payment Method ?</v-list-item-title
                >
                <v-list-item-subtitle class="caption my-2"
                  >We accept MasterCard, PayPal, Visa, American Express,
                  Discover</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-row align="center" justify="center">
              <v-col cols="2" md="2" sm="2" v-for="i in svg" :key="i.id">
                <img
                  :src="require(`@/assets/svg/${i.src}`)"
                  alt="payment-methods"
                />
              </v-col>
            </v-row>
          </v-col>

          <!-- Add PAYMENT -->
          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center" justify="center">
                <div class="text-center">
                  <v-btn rounded color="primary" dark>
                    Add Payment
                  </v-btn>
                </div>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </div>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    name: "billing",
    data() {
      return {
        svg: [
          { src: "paypal.svg", id: "1" },
          { src: "visa.svg", id: "2" },
          { src: "mastercard.svg", id: "3" },
          { src: "discover.svg", id: "4" },
          { src: "american-express.svg", id: "5" },
        ],
        Radial_series: [90],
        Radial_options: {
          chart: {
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "45%",
              },
              dataLabels: {
                value: {
                  color: "#fff",
                  fontSize: "30px",
                  show: false,
                },
              },
            },
          },

          stroke: {
            lineCap: "round",
          },

          labels: [" "],
        },
      };
    },
  };
</script>

<style lang="scss" scoped></style>
