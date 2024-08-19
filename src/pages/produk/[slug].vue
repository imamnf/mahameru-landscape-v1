<script setup lang="ts">
import { useRoute } from 'vue-router/auto';

import { useProductStore } from '@/stores/product.store';

// Store
const productStore = useProductStore();

// State
const route = useRoute('produk-slug');
const products = computed(() => productStore.productsState.data);

const product = ref<
  {
    id: number;
    photo: string;
    name: string;
    slug: string;
    price: number;
    desc: string;
    detail: string;
    bloom: string;
  }[]
>();

const details = computed(() => {
  const dataArray = product.value?.[0].detail.split(';');

  // Membersihkan setiap elemen data (opsional)
  const cleanedDataArray = dataArray?.map((data) => data.trim());

  return cleanedDataArray;
});

const blooms = computed(() => {
  const dataArray = product.value?.[0].bloom.split(';');

  // Membersihkan setiap elemen data (opsional)
  const cleanedDataArray = dataArray?.map((data) => data.trim());

  return cleanedDataArray;
});

onBeforeMount(() => {
  product.value = products.value.filter((item) => item.slug === route.params.slug);
});
</script>

<template>
  <div v-for="item in product" :key="item.id" class="grid grid-cols-12 gap-x-8">
    <div class="col-span-6">
      <img
        class="block w-full mx-auto rounded xl:block"
        :src="`/flower/${item.photo}`"
        :alt="item.name"
      />
    </div>

    <div class="col-span-6">
      <div class="py-8">
        <h1 class="text-4xl font-bold text-slate-800">
          {{ item.name }}
        </h1>

        <p class="text-slate-500 mt-4 w-[30rem]">
          {{ item.desc }}
        </p>

        <div class="mt-12">
          <h3 class="text-xl font-semibold text-slate-800">Detail</h3>

          <ul class="mt-2 w-[30rem] flex flex-col gap-y-2 list-disc">
            <li v-for="detail in details" :key="detail" class="ml-4 text-slate-500">
              {{ detail }}
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <h3 class="text-xl font-semibold text-slate-800">Bunga</h3>

          <ul class="mt-2 w-[30rem] flex flex-col gap-y-2 list-disc">
            <li v-for="bloom in blooms" :key="bloom" class="ml-4 text-slate-500">
              {{ bloom }}
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <Button label="Beli Sekarang" icon="pi pi-shopping-cart" size="large" />
        </div>
      </div>
    </div>
  </div>
</template>
