<template>
  <div>
    <div class="text-center py-5 text-2xl" >My Reservations</div>
    <skeletonComponent v-if="!isReady"/>
    <div v-else class="mb-20">
      <UserReservationComponent v-for="reservation in allReservations" :key="reservation.id" :room-name="reservation.expand.room.name" :reservation-dates="reservationDates(reservation)" :reservation-status="reservation.status" 
      :reservation-id="reservation.id" @update-reservation="refreshReservations"/>
      
      <!-- if no pending reservations -->
      <div v-if="allReservations.length === 0" class="text-center text-lg py-5">No Pending Reservations</div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import skeletonComponent from '../components/common/skeletonComponent.vue';
  import UserReservationComponent from '../components/UserReservationComponent.vue';
  import { getAllReservations } from '../api/user-reservations';

  const refreshReservations = async () => {
    isReady.value = false;
    allReservations.value = await getAllReservations();
    isReady.value = true;
  };

  const isReady = ref(false);
  const allReservations = ref([]);

  const reservationDates = (reservation) => {
    return `${reservation.fromDate.split(" ")[0]} - ${reservation.toDate.split(" ")[0]}`;
  };

  onBeforeMount(async () => {
    isReady.value = false;
    allReservations.value = await getAllReservations();
    console.log(allReservations.value);
    isReady.value = true;
  });
</script>

<style lang="scss" scoped>

</style>