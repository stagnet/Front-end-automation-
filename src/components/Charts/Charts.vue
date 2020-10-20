<template>
  <div>
    <v-col cols="12" md="5">
      <p class="text-h6 text--primary">
        Analytics
      </p>
    </v-col>
    <v-row>
      <!-- Workflow history -->
      <v-col cols="12" md="8" sm="12">
        <v-sheet elevation="3" class="py-2 px-1">
          <v-row>
            <v-col cols="12" md="4" sm="12" class=" text-center">
              <p class="body-1 text--primary pa-4">
                Workflows History
              </p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="4">
              <v-chip-group mandatory active-class="primary--text">
                <v-chip v-for="tag in tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <apexchart
            height="340"
            type="bar"
            :options="Column_options"
            :series="Column_series"
            class="ma-3"
          >
          </apexchart>
        </v-sheet>
      </v-col>

      <!-- Features -->
      <v-col cols="12" md="4">
        <v-sheet elevation="3" height="455">
          <p class="body-1 text--primary pa-5">
            Features
          </p>
          <apexchart
            type="radialBar"
            height="330"
            :options="Radial_options"
            :series="Radial_series"
          ></apexchart>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "Charts",
    data: () => ({
      // Column charts
      tags: ["Day", "Week", "Month"],
      Column_options: {
        chart: {
          height: 340,
          type: "bar",
        },
        plotOptions: {
          bar: {
            columnWidth: "20%",
            endingShape: "rounded",
            startingShape: "rounded",
            distributed: true,
          },
        },
        xaxis: {
          categories: [
            "W20",
            "W21",
            "W22",
            "W23",
            "W24",
            "W25",
            "W26",
            "W27",
            "W28",
          ],
          labels: {
            show: false,
            hideOverlappingLabels: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
      },
      Column_series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 38],
        },
      ],
      // Radial chart
      Radial_series: [80],
      Radial_options: {
        chart: {
          height: 330,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "65%",
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Workflow Remaining"],
      },
    }),
  };
</script>

<style lang="scss" scoped></style>
