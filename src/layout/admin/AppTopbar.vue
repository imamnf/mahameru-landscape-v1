<script setup lang="ts">
import { useLayout } from '@/layout/admin/composables/layout';

const { onMenuToggle } = useLayout();
</script>

<template>
  <div class="layout-topbar">
    <div class="layout-topbar-logo-container">
      <RouterLink to="/" class="layout-topbar-logo">
        <div class="flex text-xl leading-none gap-x-1">
          <span class="font-bold text-emerald-600">Mahameru</span>
          <span class="font-semibold text-emerald-500">Landscape</span>
        </div>
      </RouterLink>
    </div>

    <button class="layout-menu-button layout-topbar-action" @click="onMenuToggle">
      <i class="pi pi-bars" />
    </button>

    <div class="layout-topbar-actions">
      <div class="hidden layout-topbar-menu lg:block">
        <div class="layout-topbar-menu-content">
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-user" />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
