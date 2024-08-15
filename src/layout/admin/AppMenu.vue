<script setup lang="ts">
const model = ref([
  {
    label: 'Home',
    items: [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/admin' },
      { label: 'Produk', icon: 'pi pi-fw pi-box', to: '/admin/produk' },
      { label: 'Pengaturan', icon: 'pi pi-fw pi-cog', to: '/admin/pengaturan' }
    ]
  }
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <AdminAppMenuItem v-if="item" :item="item" :index="i" />
    </template>
  </ul>
</template>
