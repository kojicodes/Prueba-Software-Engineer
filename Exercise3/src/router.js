import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/",
    name: "books",
    component: () => import("./components/BooksList")
  },
  {
    path: "/books/:id",
    name: "book-details",
    component: () => import("./components/Book")
  },
  {
    path: "/books",
    name: "add",
    component: () => import("./components/AddBook")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
