<script setup lang="ts">
import { useRoute } from 'vue-router/auto';

import { useLayout } from '@/layout/admin/composables/layout';

// State
const { layoutConfig, layoutState, isSidebarActive, resetMenu } = useLayout();
const outsideClickListener = ref<((event: Event) => void) | null>();
const route = useRoute();

watch(isSidebarActive, (newVal) => {
  if (newVal) {
    bindOutsideClickListener();
  } else {
    unbindOutsideClickListener();
  }
});

const containerClass = computed(() => {
  return {
    'layout-overlay': layoutConfig.menuMode === 'overlay',
    'layout-static': layoutConfig.menuMode === 'static',
    'layout-static-inactive':
      layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
    'layout-overlay-active': layoutState.overlayMenuActive,
    'layout-mobile-active': layoutState.staticMenuMobileActive
  };
});
const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event: Event) => {
      if (isOutsideClicked(event)) {
        resetMenu();
      }
    };
    document.addEventListener('click', outsideClickListener.value);
  }
};
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener.value);
    outsideClickListener.value = null;
  }
};
const isOutsideClicked = (event: Event) => {
  const sidebarEl = document.querySelector('.layout-sidebar');
  const topbarEl = document.querySelector('.layout-menu-button');

  return !(
    (sidebarEl instanceof Node &&
      (sidebarEl.isSameNode(event.target as Node) || sidebarEl.contains(event.target as Node))) ||
    (topbarEl instanceof Node &&
      (topbarEl.isSameNode(event.target as Node) || topbarEl.contains(event.target as Node)))
  );
};
</script>

<template>
  <div class="layout-wrapper" :class="containerClass">
    <AdminAppTopbar />

    <AdminAppSidebar />

    <div class="layout-main-container">
      <div class="layout-main">
        <h1 class="block mb-6 text-4xl">{{ route.meta.title }}</h1>

        <RouterView />
      </div>

      <AdminAppFooter />
    </div>
    <div class="layout-mask" />
  </div>

  <Toast />
</template>
