<script setup lang="ts">
const items = ref([{ label: 'Tentang Kami' }, { label: 'Produk' }]);
</script>

<template>
  <div class="grid px-12 py-2 bg-white border-b border-b-slate-200">
    <div class="flex justify-end gap-x-2">
      <div class="flex items-center gap-x-2 text-emerald-500">
        <i class="pi pi-phone" />
        <span class="text-sm font-medium">+62 812 3456 7890</span>
      </div>
    </div>
  </div>

  <div class="py-8 mb-0 card">
    <Menubar
      :model="items"
      :pt="{
        root: {
          class: 'justify-between !border-0'
        }
      }"
    >
      <template #start>
        <RouterLink to="/" class="flex items-center text-2xl font-semibold gap-x-2">
          <span class="text-emerald-700">Mahameru</span>
          <span class="text-emerald-600"> Landsacpe</span>
        </RouterLink>
      </template>
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span class="text-lg font-medium">{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </div>
</template>
