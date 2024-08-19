<script setup lang="ts">
import { useRouter } from 'vue-router/auto';

import { useProductStore } from '@/stores/product.store';

import { formatNumber } from '@/composables/useNumber';

// Store
const productStore = useProductStore();

// State
const products = computed(() => productStore.productsState.data);
const router = useRouter();
const layout = ref<'grid' | 'list' | undefined>('grid');
const options = ref(['list', 'grid']);

onBeforeMount(() => {
  productStore.getProducts();
});
</script>

<template>
  <DataView
    data-key="id"
    :value="products"
    :layout="layout"
    :pt="{
      content: {
        class: '!bg-transparent'
      }
    }"
  >
    <template #header>
      <div class="flex justify-end">
        <SelectButton v-model="layout" :options="options" :allow-empty="false">
          <template #option="{ option }">
            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
          </template>
        </SelectButton>
      </div>
    </template>

    <template #list="{ items }">
      <div class="flex flex-col">
        <div v-for="(item, index) in items" :key="index">
          <div
            class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center"
            :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }"
          >
            <div class="relative md:w-40">
              <img
                class="block w-full mx-auto rounded xl:block"
                :src="`/flower/${item.photo}`"
                :alt="item.name"
              />
            </div>
            <div class="flex flex-col justify-between flex-1 gap-6 md:flex-row md:items-center">
              <div class="flex flex-row items-start justify-between gap-2 md:flex-col">
                <div>
                  <div class="mt-2 text-lg font-medium">
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-8 md:items-end">
                <span class="text-xl font-semibold">Rp{{ formatNumber(item.price) }}</span>
                <div class="flex flex-row-reverse gap-2 md:flex-row">
                  <Button
                    label="Detail Produk"
                    class="w-full"
                    @click="router.push(`/produk/${item.slug}`)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #grid="{ items }">
      <div class="grid grid-cols-12 gap-4">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-span-12 p-2 sm:col-span-6 md:col-span-4 xl:col-span-6"
        >
          <div class="flex flex-col p-6 rounded bg-surface-0 dark:bg-surface-900">
            <div class="flex justify-center p-4 rounded bg-surface-50">
              <div class="relative mx-auto">
                <img
                  class="w-full rounded"
                  :src="`/flower/${item.photo}`"
                  :alt="item.name"
                  style="max-width: 300px"
                />
              </div>
            </div>
            <div class="pt-6">
              <div class="flex flex-row items-start justify-between gap-2">
                <div>
                  <div class="mt-1 text-xl font-medium">
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-6 mt-6">
                <span class="text-2xl font-semibold">Rp{{ formatNumber(item.price) }}</span>
                <div class="flex gap-2">
                  <Button
                    label="Detail Produk"
                    class="w-full"
                    @click="router.push(`/produk/${item.slug}`)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>
