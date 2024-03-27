import { createRouter, createWebHistory } from "vue-router";

/* Pages */
import Home from "../pages/Home.vue";
import Selection from "../pages/Selection.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/selection",
    component: Selection,
  },
  // {
  //   path: "/:pathMatch(.*)*", // catch all 404 - make sure this is at the end
  //   component: PageNotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!sessionStorage.getItem("accessToken")) {
//       // No access token found, redirect to login
//       next({ path: "/loginToTheAdminPanel" });
//     } else {
//       next(); // proceed to the route
//     }
//   } else {
//     next(); // does not require auth, make sure to always call next()!
//   }
// });

export default router;
