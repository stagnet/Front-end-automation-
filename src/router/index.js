import Vue from "vue";
import VueRouter from "vue-router";

import Navbar from "../layouts/navbar";
import Dashboard from "../views/AdminPanel/Dashboard";
import Workflow from "../views/AdminPanel/WorkFlow";
import Library from "../views/AdminPanel/WorkLibrary";
import Credential from "../views/AdminPanel/Credentials";
import Setting from "../views/AdminPanel/Settings";
import Help from "../views/AdminPanel/Help";

// import Login from "../layouts/login";

// import Invite from "../layouts/invite";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: Login,
  //   children: [
  //     {
  //       path: "1",
  //       component:
  //     }
  //   ]
  // },
  {
    path: "/",
    name: "Navbar",
    component: Navbar,
    children: [
      {
        path: "dashboard",
        component: Dashboard
      },
      {
        path: "workflow",
        component: Workflow
      },
      {
        path: "workflow-library",
        component: Library
      },
      {
        path: "credentials",
        component: Credential
      },
      {
        path: "settings",
        component: Setting
      },
      {
        path: "help",
        component: Help
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
