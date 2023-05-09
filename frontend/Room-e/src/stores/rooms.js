import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { getFilteredReservations } from '../api/get-reservations';

export const useRoomStore = defineStore('room',() => {
  const rooms = ref([]);
  const searchedRoomInput = ref('');
  const selectedDates = ref([]);
  const categories = ref([]);
  const page = ref(0);
  const isLastPage = ref(false);
  const isLoading = ref(false);
  const everythingLoading = ref(false);
  const filteredRooms = ref([]);

  page.value = 1;
  isLastPage.value = false;

  categories.value = [{
    id: 1,
    name: 'General',
    selected : false,

  }, {
    id: 2,
    name: 'Presentation',
    selected : false,
  }, {
    id: 3,
    name: 'Meeting Room',
    selected : false,
  }]

  function clear() {
    rooms.value = [];
    filteredRooms.value = [];
    searchedRoomInput.value = '';
    selectedDates.value = [];
    categories.value = [];
    page.value = 0;
    isLastPage.value = false;
  }

  const filterRoomsBySearchedInput = (rooms) => {
  if(searchedRoomInput.value === '') return rooms;
  return rooms.filter(room => room.name.toLowerCase().includes(searchedRoomInput.value.toLowerCase()));
};

  const filterRoomsBySelectedDates = async (rooms) => {
    console.log("New dates: ", selectedDates.value);
    console.log("Dimitris rooms11: ", rooms);
    if(selectedDates.value.length === 0) return rooms;
    const fromDate = selectedDates.value[0];
    const toDate = selectedDates.value[1];
    try {
      const filteredReservations = await getFilteredReservations(fromDate, toDate);
      console.log("Dimitris filters: ", filteredReservations);
      const filteredRooms2 = rooms.filter(room => !filteredReservations.some(reservation => reservation.room === room.id));
      console.log("Dimitris filters: ", filteredRooms2);
      // if(isLastPage.value) return filteredRooms2;
      return filteredRooms2;
    } catch (error) {
      console.log(error);
      return rooms;
    }
  }

  const filterRoomsBySelectedCategories = (rooms) => {
    const selectedCategories = categories.value.filter(category => category.selected);
    if(selectedCategories.length === 0) return rooms;
    return rooms.filter(room => selectedCategories.some(category => category.name === room.category));
  };

  // const filteredRooms = computed(() => {
  //   //intersection of all filters
  //   return filterRoomsBySelectedDates(filterRoomsBySelectedCategories(filterRoomsBySearchedInput(rooms.value)));
  // });

  watchEffect(async () => {
    filteredRooms.value = await filterRoomsBySelectedDates(filterRoomsBySelectedCategories(filterRoomsBySearchedInput(rooms.value)));
  });

  return {
    rooms,
    filteredRooms,
    searchedRoomInput,
    selectedDates,
    categories,
    page,
    isLastPage,
    clear,
    isLoading,
    everythingLoading,
  }
})