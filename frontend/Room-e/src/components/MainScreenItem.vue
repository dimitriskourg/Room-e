
<script setup>
  import { computed } from 'vue'
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
  <div class="p-4 xl:w-1/4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" :src="getImgUrl" >
      </div>
      <h2 class="text-xl font-medium title-font text-white mt-1">{{ name ?? 'Default Room' }}</h2>
      <p class="text-base leading-relaxed mt-0">{{ category ?? "General" }}</p>
    </div>
</template>