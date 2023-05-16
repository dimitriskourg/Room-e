<template>
  <div>
    <AdminComponent/>
    <div class="text-center py-5 text-2xl" >View All Pending Reservations</div>
    <skeletonComponent v-if="!isReady"/>
    <div v-else class="mb-20">
      <AdminPendingReservationComponent v-for="reservation in pendingReservations" :key="reservation.id" :room-name="reservation.expand.room.name" :reservation-dates="reservationDates(reservation)" :reservation-status="reservation.status" 
      :reservation-id="reservation.id" @update-reservation-status="updateStatus"/>
      
      <!-- if no pending reservations -->
      <div v-if="pendingReservations.length === 0" class="text-center text-lg py-5">No Pending Reservations</div>
    </div>
  </div>
</template>

<script setup>
  import AdminComponent from '../components/AdminComponent.vue';
  import AdminPendingReservationComponent from '../components/AdminPendingReservationComponent.vue';
  import skeletonComponent from '../components/common/skeletonComponent.vue';
  import { ref, onBeforeMount } from 'vue';
  import { getAllPendingReservations, updateReservationStatus } from '../api/admin-reservations';

  const pendingReservations = ref([]);
  const isReady = ref(false);

  const updateStatus = async (status, id) => {
    console.log(status, id);
    await updateReservationStatus(id, status);
    isReady.value = false;
    pendingReservations.value = await getAllPendingReservations();
    isReady.value = true;
  };

  const reservationDates = (reservation) => {
    return `${reservation.fromDate.split(" ")[0]} - ${reservation.toDate.split(" ")[0]}`;
  };

  onBeforeMount(async () => {
    pendingReservations.value = await getAllPendingReservations();
    console.log(pendingReservations.value);
    isReady.value = true;
  });
</script>

<style lang="scss" scoped>

</style>