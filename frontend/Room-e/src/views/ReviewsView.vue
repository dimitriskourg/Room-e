<template>
  <div class="text-gray-900 dark:text-white">
    <h1 class="text-center text-3xl my-6">{{ room.name }}</h1>
    <ReviewComponent v-if="reviewsLoaded" :totalReviews="NumberOfReviews" :totalRating="totalRating" :room="room.id"></ReviewComponent>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import { getRoom } from '../api/get-rooms';
  import ReviewComponent from '../components/ReviewComponent.vue';
  import { getRoomsNumberOfReviews } from '../api/get-roomsReviews';

  const room = ref({});
  const NumberOfReviews = ref(0);
  const totalRating = ref(0);
  const reviewsLoaded = ref(false);

  onBeforeMount(async () => {
    const {id} = useRoute().params;
    room.value = await getRoom(id);
    console.log(room.value);

    const { totalReviews, totalStars} = await getRoomsNumberOfReviews(id)
    NumberOfReviews.value = totalReviews;
    totalRating.value = totalStars;
    reviewsLoaded.value = true;
    console.log("Total Rating in ReviewsView: ", totalRating.value);
    console.log("Total Reviews in ReviewsView: ", NumberOfReviews.value);
  });

</script>

<style lang="" scoped>
</style>