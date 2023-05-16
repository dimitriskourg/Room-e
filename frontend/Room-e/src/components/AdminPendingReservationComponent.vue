<template>
  <div>
    <div class="lg:mx-72 md:mx-36 mx-5 my-5 rounded-md bg-gray-800 p-10">
      <div class="flex flex-col">
        <div class=" flex flex-row justify-center ">
          <div class="border-r-2 border-r-gray-500 pr-4">
            <div class="text-xl text-white">
              {{roomName}}
            </div>
            <div class="text-sm">
              {{reservationDates}}
            </div>
          </div>
          <div class="pl-3 self-center text-white">
            {{reservationStatus}}
          </div>
        </div>
        <div class="flex flex-row justify-center mt-5">
          <ButtonComponent class="mx-3 basis-1/4" @click="emits('updateReservationStatus', 'approved', reservationId)">Confirm</ButtonComponent>
          <ButtonComponent class="mx-3 basis-1/4" @click="emits('updateReservationStatus', 'cancelled', reservationId)">Deny</ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from './common/ButtonComponent.vue';

  defineProps({
    reservationId : String,
    roomName: String,
    reservationDates: String,
    reservationStatus: String,
  })

  const emits = defineEmits(['updateReservationStatus'])

</script>

<style lang="scss" scoped>

</style>