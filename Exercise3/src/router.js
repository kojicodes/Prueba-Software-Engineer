import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/books",
    name: "books",
    component: () => import("./components/BooksList")
  },
  {
    path: "/books/:id",
    name: "book-details",
    component: () => import("./components/Book")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddBook")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
