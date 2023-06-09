<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="xl:w-4/5 mx-auto flex flex-wrap" v-if="roomLoaded">
        <img alt="room Image" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="getImgUrl">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">{{room.category}} | {{ room.capacity }} guests</h2>
          <h1 class="text-white text-3xl title-font font-medium mb-1">{{ room.name }}</h1>
          <div class="flex my-4">
            <span class="flex items-center">
              <svg :fill=" totalRating < 1 ? 'none' : 'currentColor'" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg :fill=" totalRating < 2 ? 'none' : 'currentColor'" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg :fill=" totalRating < 3 ? 'none' : 'currentColor'" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg :fill=" totalRating < 4 ? 'none' : 'currentColor'" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg :fill=" totalRating < 5 ? 'none' : 'currentColor'" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-pink-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span class="ml-3">{{NumberOfReviews}}</span>
            </span>
            <div class="">
              &nbsp;|&nbsp; 
            </div>
            <router-link :to="reviewsLink" class="hover:text-pink-500 cursor-pointer">
              View all Reviews
            </router-link>
          </div>
          <p class="leading-relaxed pb-5 border-b-2 border-gray-800 mb-5">{{ room.description }}</p>
          <div class="flex">
              <vue-tailwind-datepicker v-model="selectedDates"  class="w-36 sm:w-56 cursor-pointer" placeholder="Select Dates"  :start-from="startFrom" separator=" - " :shortcuts="false" :formatter="formatter"/>
            <ButtonComponent class="ml-auto border-0 py-2 px-6 " @click="createReservationfunc">Book</ButtonComponent>
            <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <NotificationComponent v-if="showNotification" :type="notificationType" class="mt-5" @close="showNotification=false" >{{ notificationMessage }}</NotificationComponent>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { getRoom } from '../api/get-rooms';
  import { getRoomsNumberOfReviews } from '../api/get-roomsReviews';
  import { onBeforeMount, ref, computed } from 'vue';
  import VueTailwindDatepicker from 'vue-tailwind-datepicker'
  import ButtonComponent from '../components/common/ButtonComponent.vue';
  import {createReservation} from '../api/post-reservations';
  import { useUserStore } from '@/stores/user';
  import NotificationComponent from '../components/common/NotificationComponent.vue';
  import { RouterLink } from 'vue-router';

  const userStore = useUserStore();
  const room = ref({});
  const selectedDates = ref([]);
  const showNotification = ref(false);
  const notificationMessage = ref("");
  const notificationType = ref("");
  const reviewsLink = computed(() => {
    return "/reviews/" + room.value.id;
  })
  const totalRating = ref(0); 
  const NumberOfReviews = ref("");
  const getImgUrl = computed(() => {
    if(room.value.photo){
      return import.meta.env.VITE_POCKETBASE_URL+ "/api/files/rooms/"+ room.value.id + "/" + room.value.photo;
    }
    return "https://dummyimage.com/1203x503"
  })

  const roomLoaded = ref(false);

  const formatter = {
  date: 'DD MMM',
  month: 'MMM',
}

const startFrom = new Date()



  const createReservationfunc = async() => {
    if(selectedDates.value.length < 2){
      showNotification.value = true;
      notificationMessage.value = "Please select dates";
      notificationType.value = "error";
      return;
    }
    //to fromDate and toDate transform from string like 18 May to date 2023-05-18 20:46:08T
    const currentYear = new Date().getFullYear(); 
    // I want T21:00:00.000Z as time
    const fromDateFormattedDate = new Date(` 08:00 ${selectedDates.value[0]} ${currentYear}`).toISOString();
    const toDateFormattedDate = new Date(`23:59 ${selectedDates.value[1]} ${currentYear}`).toISOString();
    const data = {
    "fromDate": fromDateFormattedDate.split("T")[0] + " 00:00:00.000Z", 
    "toDate": toDateFormattedDate.split("T")[0] + " 23:59:00.000Z",
    "purpose": "general",
    "status": "pending",
    "room": [
      room.value.id
    ],
    "user": userStore.userID
  };
  console.log(data);
  try {
    await createReservation(data);
    showNotification.value = true;
    notificationMessage.value = "Reservation created successfully. Waiting for approval";
    notificationType.value = "success";
  } catch (error) {
    console.log(error);
    showNotification.value = true;
    if(error.message === 'Not authenticated' ){
      notificationMessage.value = "Please sign in to create a reservation";
    }else{
      notificationMessage.value = "Something went wrong";
    }
    notificationType.value = "error";
  }
  }

  onBeforeMount(async () => {
    const {id} = useRoute().params;
    room.value = await getRoom(id);
    console.log(room.value);
    const { totalReviews, totalStars} = await getRoomsNumberOfReviews(id)
    NumberOfReviews.value = totalReviews;
    totalRating.value = totalStars;
    roomLoaded.value = true;
  });
</script>

<style lang="scss" scoped>

</style>