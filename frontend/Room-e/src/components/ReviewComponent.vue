<template>
  <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 " v-if="reviewsLoaded">
    <h2 class="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

    <div class="mt-4 flex items-center gap-4">
      <p class="text-3xl font-medium">
        {{rating}}
        <span class="sr-only"> Average review score </span>
      </p>

      <div>
        <starsComponent :rating="totalRating"/>
        <p class="mt-0.5 text-xs text-gray-400">Based on {{totalReviews}}</p>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2" v-for="review in reviews" :key="review.id">
      <blockquote>
        <header class="sm:flex sm:items-center sm:gap-4">
          <starsComponent :rating="review.rating"/>
          <p class="mt-2 font-medium sm:mt-0">{{ review.username }}</p>
        </header>

        <p class="mt-2">
          {{ review.content }}
        </p>

        <footer class="mt-4">
          <p class="text-xs text-gray-200">{{review.date}}</p>
        </footer>
      </blockquote>
    </div>
  </div>
</section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { getRoomsReviews } from '../api/get-roomsReviews';
import starsComponent from './common/starsComponent.vue';

const props = defineProps(['totalReviews', 'totalRating', 'room'])

const rating = ref(props.totalRating)
const totalReviews = ref(props.totalReviews)
const reviewsLoaded = ref(false);
const reviews = ref([])


onBeforeMount(async () => {
  try {
    reviews.value = await getRoomsReviews(props.room)
    reviews.value = reviews.value.map((review) => {
      const date = new Date(review.dateAndTime)
      if(review.dateAndTime){
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return {
          ...review,
          date: formattedDate
        }
      }
      return {
        ...review,
        date: "No date"
      }
    })
    console.log("rrevs: "   ,reviews.value)
    reviewsLoaded.value = true;
  } catch (error) {
    console.log(error)
  }
})

</script>

<style lang="scss" scoped>

</style>