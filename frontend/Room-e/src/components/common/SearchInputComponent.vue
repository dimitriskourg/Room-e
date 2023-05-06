<template>
  <div class="max-w-6xl mx-2 xl:mx-auto my-4 h-13 md:block hidden sticky">
    <div class="relative">
      <!-- Categories Dropdown -->
      <div class="absolute top-full left-0 right-1 transform -translate-y-11 flex items-center pl-1 z-10 sm:max-w-fit">
        <DropDownComponent :title="title"/>
      </div>
      <!-- Datepicker Component -->
      <div class="absolute top-full left-44 transform -translate-y-12 flex items-center pl-0 z-10 sm:w-30 xs:w-auto md:w-auto sm:max-w-screen-xl bg-gray-200 text-gray-900 dark:text-gray-400 dark:bg-gray-800">
      <vue-tailwind-datepicker v-model="roomStore.selectedDates" class="cursor-pointer" placeholder="Select Dates" :formatter="formatter" :start-from="startFrom" separator=" - " :shortcuts="false"/>
      </div>
      
      <!-- Search Input -->
      <div class="relative">
        <label for="roomSearch" class="sr-only"> Email </label>

        <input
          type="text"
          id="roomSearch"
          autocomplete="off"
          v-model="roomStore.searchedRoomInput"
          placeholder="Search for a Room"
          class="w-full rounded-md border-gray-200 text-gray-900 pe-10 pl-100 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm md:text-lg py-3"
        />

        <span
          class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-900 dark:text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
    </div>
  </div>

  <!-- Mobile Search Input -->
  <div class="md:hidden block mt-4 sticky">
      <div class="relative mx-2">
        <label for="roomSearch" class="sr-only"> Room Name </label>

        <input
          type="text"
          id="roomSearch"
          placeholder="Search for a Room"
          v-model="roomStore.searchedRoomInput"
          class="w-full rounded-md border-gray-200 pe-10 pl-1 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm md:text-lg py-3"
        />

        <span
          class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 dark:text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
      <!-- Search Input -->
      <div class="mx-2 flex pt-1">
        <!-- Categories Dropdown -->
        <div class="w-3/5  mr-1">
          <DropDownComponent :title="title" class="rounded border border-gray-300 dark:border-gray-600 py-0.5 dark:bg-gray-800"/>
        </div>
        <!-- Datepicker Component -->
        <div class="w-2/5">
        <vue-tailwind-datepicker v-model="roomStore.selectedDates"  class="cursor-pointer" placeholder="Select Dates" :formatter="formatter" :start-from="startFrom" separator=" - " :shortcuts="false"/>
      </div>
      </div>
  </div>
</template>

<style scoped>
</style>



<script setup>
import DropDownComponent from './DropDownComponent.vue';
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

  import { useRoomStore } from '../../stores/rooms';


  defineProps({
    title: {
      type: String,
      required: true
    }
  })

  const roomStore = useRoomStore();

const startFrom = new Date()


const formatter = {
  date: 'DD MMM',
  month: 'MMM',
}
//start from today

</script>