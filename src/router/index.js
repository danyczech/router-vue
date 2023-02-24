import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '@/components/teams/TeamsList.vue';
import UsersList from '@/components/users/UsersList.vue';

const routes = [
    {
      path: "/",
      component: TeamsList,
    },
    {
      path: "/teams",
      name: "teams",
      component: TeamsList,
    },
    {
      path: "/users",
      name: "users",
      component: UsersList,
    },
    /*{
      path: "/:notFound(.*)",
      component: () => import("@/views/NotFound.vue"),
    },*/
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;