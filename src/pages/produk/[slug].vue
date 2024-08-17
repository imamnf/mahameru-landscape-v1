<script setup lang="ts">
import { useRoute } from 'vue-router/auto';

import { ProductService } from '@/service/ProductService';

// State
const route = useRoute('produk-slug');

const product = ref<
  {
    id: number;
    photo: string;
    name: string;
    slug: string;
    price: number;
    desc: string;
    detail: string[];
    bloom: string[];
  }[]
>();

onBeforeMount(() => {
  ProductService.getProduct().then(
    (data) => (product.value = data.filter((item) => item.slug === route.params.slug))
  );
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
            <li v-for="detail in item.detail" :key="detail" class="ml-4 text-slate-500">
              {{ detail }}
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <h3 class="text-xl font-semibold text-slate-800">Bunga</h3>

          <ul class="mt-2 w-[30rem] flex flex-col gap-y-2 list-disc">
            <li v-for="bloom in item.bloom" :key="bloom" class="ml-4 text-slate-500">
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
