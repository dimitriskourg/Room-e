<script setup>
import MainScreenItem from './MainScreenItem.vue';
import skeletonComponent from './common/skeletonComponent.vue';
import skeletonsComponent from './common/SkeletonsComponent.vue';
import getRooms from '../api/get-rooms';
import { ref, onMounted, onUnmounted } from 'vue';

const lastRoomFetched = ref(1);
const rooms = ref([]);
const fetchRooms = async () => {
  const newRooms = await getRooms(lastRoomFetched.value);
  console.log("gfdgdsfg" , newRooms);
  lastRoomFetched.value += newRooms.totalItems;
  rooms.value = [...rooms.value, ...newRooms.items];
  console.log(rooms.value);
};

onMounted(async () => {
  await fetchRooms();
});
</script>

<template>
  <skeletonsComponent v-if="!rooms.length"/>
  <div class="flex flex-wrap my-5 mx-4" ref="scrollComponent">
    <MainScreenItem v-for="room in rooms" :key="room.id" :id="room.id" :name="room.name" :category="room.category" :photo="room.photo"/>
  </div>
</template>


<style lang="scss" scoped>

</style>