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
        <div class="flex flex-row justify-center mt-5" v-if="reservationStatus !== 'cancelled'">
          <vue-tailwind-datepicker v-model="selectedDates" class="cursor-pointer mx-3 basis-2/4" placeholder="Select Dates" :formatter="formatter" :start-from="startFrom" separator=" - " :shortcuts="false"/>
          <ButtonComponent class="mx-3 basis-1/4" @click="updateTime">Edit</ButtonComponent>
          <ButtonComponent class="mx-3 basis-1/4" @click="cancelReservation">Cancel</ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ButtonComponent from './common/ButtonComponent.vue';
  import VueTailwindDatepicker from 'vue-tailwind-datepicker'
  import { ref } from 'vue';
  import { updateReservationStatus, updateReservationDate } from '../api/user-reservations';

  
  const startFrom = new Date()
  const selectedDates = ref([])

  const formatter = {
    date: 'DD MMM',
    month: 'MMM',
  }

  const props = defineProps({
    reservationId : String,
    roomName: String,
    reservationDates: String,
    reservationStatus: String,
  })

  const emits = defineEmits(['updateReservation'])

  const updateTime = async () => {
    if (selectedDates.value.length < 2) {
      return
    }
    const currentYear = new Date().getFullYear();
    const fromDateFormattedDate = new Date(` 08:00 ${selectedDates.value[0]} ${currentYear}`).toISOString().split("T")[0] + " 00:00:00.000Z"
    const toDateFormattedDate = new Date(`23:59 ${selectedDates.value[1]} ${currentYear}`).toISOString().split("T")[0] + " 23:59:00.000Z"
    try {
      await updateReservationDate(props.reservationId, fromDateFormattedDate, toDateFormattedDate)
      emits('updateReservation')
    } catch (error) {
      console.log(error);
    }
  }

  const cancelReservation = async () => {
    try {
      await updateReservationStatus(props.reservationId, 'cancelled')
      emits('updateReservation')
    } catch (error) {
      console.log(error);
    }
  }

</script>

<style lang="scss" scoped>

</style>