<template>
  <div>
    <v-app id="inspire">
      <!-- sidebar starts -->
      <v-navigation-drawer v-model="drawer" app color="#1D2333">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="@/assets/svg/logo.svg" />
          </v-list-item-avatar>
          <v-list-item-content class="white--text">
            <v-list-item-title>
              Automation Marketing
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Menu -->
        <v-list shaped>
          <v-list-item
            v-for="(option, i) in options"
            :key="i"
            :to="option.to"
            router
            exact
            class="list ma-1"
          >
            <v-list-item-action>
              <v-icon color="white">{{ option.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-subtitle v-text="option.title" class="white--text" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer></v-spacer>
        <!-- Bottom card -->
        <template v-slot:append>
          <div class="pa-2">
            <v-sheet rounded color="#324160" elevation="3">
              <p class="subtitle-1  white--text pa-2 text-center">
                FREE PLAN
              </p>
              <v-list subheader>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-action-text class="caption white--text pa-1">
                      Remaining Workflow: 100
                    </v-list-item-action-text>
                    <v-divider></v-divider>
                    <v-list-item-subtitle class="caption white--text pa-1">
                      Remaining Execution Hours: 200
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <div class="pa-2">
                <v-btn block color="#32C5FF">
                  Upgrade
                </v-btn>
              </div>
            </v-sheet>
          </div>
        </template>
      </v-navigation-drawer>

      <!-- navbar starts -->
      <v-app-bar app class="nav" color="white" elevation="3">
        <v-app-bar-nav-icon @click="drawer = !drawer">
          <img
            src="@/assets/svg/menu-left.svg"
            style="height: 18px; width: 30px;"
          />
        </v-app-bar-nav-icon>

        <v-toolbar-items>
          <v-text-field
            class="mt-3 ml-2"
            dense
            outlined
            label="Search"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <!-- bell icon -->
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </template>
          <span>Notification</span>
        </v-tooltip>
        <!-- bell icon end -->
        <!-- student profile image -->
        <v-avatar size="36">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <p class="body-2 mt-2 ml-2 text-center">John Doe</p>
        <!-- student profile image end -->

        <!-- profile list items -->
        <v-menu offset-y transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(option, index) in options"
              :key="index"
              :to="option.to"
              router
            >
              <v-list-item-subtitle>{{ option.title }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- profile list items end -->
      </v-app-bar>

      <!-- content -->
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "Navbar",

    data: () => ({
      drawer: null,

      options: [
        {
          icon: "mdi-view-dashboard-outline",
          title: "Dashboard",
          to: "/dashboard",
        },
        {
          icon: "mdi-file-tree-outline",
          title: "My Workflow",
          to: "/workflow",
        },
        {
          icon: "mdi-bookshelf",
          title: "Workflow Library",
          to: "/workflow-library",
        },
        {
          icon: "mdi-onepassword",
          title: "Credentials",
          to: "/credentials",
        },
        {
          icon: "mdi-cog",
          title: "Settings",
          to: "/settings",
        },
        {
          icon: "mdi-help-circle",
          title: "Help",
          to: "/help",
        },
      ],
    }),
  };
</script>

<style scoped>
  .list:hover {
    /* background: rgba(119, 115, 115, 0.178); */
    border-radius: 18px;
    box-shadow: 0 0 15px 0 #eef5ff;
  }
</style>
