import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getFilteredReservations } from '../api/get-reservations';

export const useRoomStore = defineStore('room',() => {
  const rooms = ref([]);
  const searchedRoomInput = ref('');
  const selectedDates = ref([]);
  const categories = ref([]);
  const page = ref(0);
  const isLastPage = ref(false);

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
  console.log('jkhhhhhhhhh');
  return rooms.filter(room => room.name.toLowerCase().includes(searchedRoomInput.value.toLowerCase()));
};

  const filterRoomsBySelectedDates = async (rooms) => {
    if(selectedDates.value.length === 0) return rooms.value;
    const fromDate = selectedDates.value[0];
    const toDate = selectedDates.value[1];
    const filteredReservations = await getFilteredReservations(fromDate, toDate);
    const bookedRooms = filteredReservations.map(reservation => reservation.rooms);
  }

  const filterRoomsBySelectedCategories = (rooms) => {
    const selectedCategories = categories.value.filter(category => category.selected);
    if(selectedCategories.length === 0) return rooms;
    return rooms.filter(room => selectedCategories.some(category => category.name === room.category));
  };

  const filteredRooms = computed(() => {
    //intersection of all filters
    return filterRoomsBySelectedCategories(filterRoomsBySearchedInput(rooms.value));
  });

  return {
    rooms,
    filteredRooms,
    searchedRoomInput,
    selectedDates,
    categories,
    page,
    isLastPage,
    clear
  }
})