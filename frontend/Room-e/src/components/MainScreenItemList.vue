<script setup>
import MainScreenItem from './MainScreenItem.vue';
import skeletonComponent from './common/skeletonComponent.vue';
import skeletonsComponent from './common/SkeletonsComponent.vue';
import getRooms from '../api/get-rooms';
import { ref, onMounted, onUnmounted } from 'vue';

const page = ref(1);
const rooms = ref([]);
const isLoading = ref(false);
const isLastPage = ref(false);
const scrollComponent = ref(null);
let timeoutId = null;
const fetchRooms = async () => {
  //2 seconds delay
  isLoading.value = true;
  await new Promise(resolve => setTimeout(resolve, 2000));
  try {
    const newRooms = await getRooms(page.value);
    console.log("gfdgdsfg" , newRooms);
    page.value += 1;
    if(page.value > newRooms.totalPages + 1) {
      window.removeEventListener('scroll', handleScroll);
      isLoading.value = false;
      isLastPage.value = true;
      return;
    }
    rooms.value = [...rooms.value, ...newRooms.items];
    console.log(rooms.value);
    console.log(page.value);
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

const loadMore = async () => {
  if(isLoading.value || isLastPage.value) return;
  await fetchRooms();
};

const handleScroll = async () => {
  const element = scrollComponent.value;
  if(element && element.getBoundingClientRect().bottom <= window.innerHeight) {
    await loadMore();
  }
};

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);
  await fetchRooms();
});

onUnmounted(async() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <skeletonsComponent v-if="!rooms.length"/>
  <div class="flex flex-wrap my-5 mx-4" ref="scrollComponent">
    <MainScreenItem v-for="room in rooms" :key="room.id" :id="room.id" :name="room.name" :category="room.category" :photo="room.photo"/>
  </div>
  <skeletonComponent v-if="isLoading" />
  <!-- No more rooms available  -->
  <div v-if="isLastPage" class="flex justify-center items-center text-gray-500 text-sm py-4">
    No more rooms available
  </div>
</template>


<style lang="scss" scoped>

</style>