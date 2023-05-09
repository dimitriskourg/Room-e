<script setup>
import MainScreenItem from './MainScreenItem.vue';
import skeletonComponent from './common/skeletonComponent.vue';
import skeletonsComponent from './common/SkeletonsComponent.vue';
import getRooms from '../api/get-rooms';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoomStore } from '../stores/rooms';

const roomStore = useRoomStore();

const scrollComponent = ref(null);
const fetchRooms = async () => {
  //2 seconds delay
  roomStore.isLoading = true;
  await new Promise(resolve => setTimeout(resolve, 200));
  try {
    const newRooms = await getRooms(roomStore.page);
    roomStore.page += 1;
    if(roomStore.page > newRooms.totalPages + 1) {
      window.removeEventListener('scroll', handleScroll);
      roomStore.isLoading = false;
      roomStore.isLastPage = true;
      return;
    }
    roomStore.rooms = [...roomStore.rooms, ...newRooms.items];
    console.log(roomStore.page);
    roomStore.isLoading = false;
  } catch (error) {
    console.log(error);
  }
};

const loadMore = async () => {
  if(roomStore.isLoading || roomStore.isLastPage) return;
  await fetchRooms();
};

const handleScroll = async () => {
  const element = scrollComponent.value;
  if(element && element.getBoundingClientRect().bottom <= window.innerHeight) {
    await loadMore();
  }
};

const unwatch = watch(() => roomStore.filteredRooms, async () => {
  if(roomStore.isLastPage){
    unwatch();
    return;
  }
  if(roomStore.filteredRooms.length > 0) return;
  await loadMore();
});

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);
  await fetchRooms();
});

onUnmounted(async() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <skeletonsComponent v-if="!roomStore.rooms.length || roomStore.everythingLoading"/>
    <div v-if="!roomStore.everythingLoading">
      <div class="flex flex-wrap my-5 mx-7 md:mx-14 lg:mx-28 2xl:mx-72 3xl:mx-96" ref="scrollComponent">
        <MainScreenItem v-for="room in roomStore.filteredRooms" :key="room.id" :id="room.id" :name="room.name" :category="room.category" :photo="room.photo"/>
      </div>
      <skeletonComponent v-if="roomStore.isLoading" />
      <!-- No more rooms available  -->
      <div v-if="roomStore.isLastPage" class="flex justify-center items-center text-gray-500 text-sm py-4">
        No more rooms available
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>