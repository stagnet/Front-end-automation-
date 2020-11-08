import Vue from "vue";
import VueRouter from "vue-router";

import Navbar from "../layouts/navbar";
import Dashboard from "../views/AdminPanel/Dashboard";
import Workflow from "../views/AdminPanel/WorkFlow";
import Library from "../views/AdminPanel/WorkLibrary";
import Credential from "../views/AdminPanel/Credentials";
import Setting from "../views/AdminPanel/Settings";
import Help from "../views/AdminPanel/Help";
import billing from "../components/billing/billing";
import Not_Found from "../components/error";
import SignUp from "../components/forms/signUp";
import Forms from "../views/AdminPanel/Forms.vue";
import ForgotPass from "../components/forms/forgotPass";
import CreateFlow from "../views/AdminPanel/CreateWorkFLow";
// import Invite from "../layouts/invite";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/recover-password",
    name: "forgotPass",
    component: ForgotPass,
  },
  {
    path: "/create-work-flow",
    name: "CreateFlow",
    component: CreateFlow,
  },
  {
    path: "",
    name: "Navbar",
    component: Navbar,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "workflow",
        component: Workflow,
      },
      {
        path: "workflow-library",
        component: Library,
      },
      {
        path: "credentials",
        component: Credential,
      },
      {
        path: "settings",
        component: Setting,
        children: [
          {
            path: "/settings/billing",
            component: billing,
          },
          {
            path: "*",
            name: "Not_Found",
            component: Not_Found,
          },
        ],
      },
      {
        path: "help",
        component: Help,
      },
    ],
  },
  {
    path: "*",
    name: "Not_Found",
    component: Not_Found,
  },
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
  routes,
});

export default router;
