<script setup lang="ts">
import { CompanyService } from '@/service/CompanyService';

// Hooks
onMounted(() => {
  CompanyService.getCompany().then((data) => (company.value = data));
});

// State
const company = ref<{
  about: string[];
  vision: string[];
  mission: string[];
}>();
</script>

<template>
  <div class="grid grid-cols-12">
    <!-- Profile Image -->
    <div class="col-span-12">
      <Image
        src="/about.jpg"
        alt="Image"
        width="100%"
        height="400px"
        :pt="{
          image: {
            class: 'h-[400px] object-cover'
          }
        }"
      />
    </div>

    <!-- Profil Perusahaan -->
    <div class="col-span-12">
      <div class="px-12 py-16">
        <h3 class="text-4xl font-semibold text-center text-emerald-600">Profil Perusahaan</h3>

        <div class="flex flex-col px-64 mt-8 gap-y-6">
          <div v-for="about in company?.about" :key="about">
            <p class="text-lg font-medium text-justify" v-html="about" />
          </div>
        </div>
      </div>
    </div>

    <!-- Visi & Misi -->
    <div class="col-span-12">
      <div class="px-12 py-16">
        <h3 class="text-4xl font-semibold text-center text-emerald-600">Visi & Misi</h3>

        <div class="flex flex-col px-64 mt-8 gap-y-8">
          <div class="flex flex-col gap-y-2">
            <h5 class="text-xl font-medium text-emerald-500">Visi</h5>

            <ul>
              <li v-for="(vision, index) in company?.vision" :key="vision">
                <p class="ml-6 text-lg font-medium text-justify text-slate-500">
                  {{ index + 1 }}. {{ vision }}
                </p>
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-y-2">
            <h5 class="text-xl font-medium text-emerald-500">Misi</h5>

            <ul>
              <li v-for="mission in company?.mission" :key="mission">
                <p class="ml-6 text-lg font-medium text-justify text-slate-500">{{ mission }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
