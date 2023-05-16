<template>
  <div class="">
    <AdminComponent/>

    <!-- Welcome page for the Admins -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center my-5">Welcome to the Admin page</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1 class="text-center my-5">To view all Reservations please go to: View All Reservations</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1 class="text-center my-5">To view all Reservations please go to: View All Rooms</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminComponent from '../components/AdminComponent.vue';

</script>

<style lang="scss" scoped>

</style>