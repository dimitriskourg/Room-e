
<script setup>
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    id: String,
    name: String,
    category: String,
    photo: String, 
  })

  const getImgUrl = computed(() => {
    if(props.photo){
      return import.meta.env.VITE_POCKETBASE_URL+ "/api/files/rooms/"+ props.id + "/" + props.photo;
    }
    return "https://dummyimage.com/1203x503"
  })

</script>

<style lang="scss" scoped>

</style>

<template>
  <router-link :to="`/room/${id}`" class="p-4 xl:w-1/4 md:w-1/3 sm:w-1/2 sm:mb-0 mb-6 group">
    <div class="rounded-lg h-64 overflow-hidden" >
      <img alt="content" class="object-cover object-center h-full w-full group-hover:opacity-75" :src="getImgUrl" >
    </div>
    <h2 class="text-xl font-medium title-font text-gray-900 dark:text-white mt-1 group-hover:opacity-75">{{ name ?? 'Default Room' }}</h2>
    <p class="text-base leading-relaxed mt-0 text-gray-900 dark:text-white">{{ category ?? "General" }}</p>
  </router-link>
</template>