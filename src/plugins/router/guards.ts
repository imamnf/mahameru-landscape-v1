import type { Router } from "vue-router/auto";

export const setupGuards = (router: Router) => {
  router.beforeEach((to) => {
    if (to.meta.public) return;

    const isRegistrationSuccess = ref(
      localStorage.getItem("isRegistrationSuccess")
    );

    if (to.meta.registrationSuccess && !isRegistrationSuccess) router.back();

    const isLoggedIn = ref(localStorage.getItem("users"));

    if (to.meta.requiredAuth) {
      if (!isLoggedIn) return "/sign-in";
    }
  });
};
