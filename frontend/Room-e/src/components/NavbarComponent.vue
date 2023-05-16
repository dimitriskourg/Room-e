<script setup>
import {useUserStore} from '@/stores/user'
import {useRoomStore} from '@/stores/rooms'
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router'
import { computed, onUnmounted, onMounted } from 'vue';

//init the store
const userStore = useUserStore()
const roomStore = useRoomStore()

const isAdmin = computed(() => {
  return userStore.type === 'administrators'
})

const isUser = computed(() => {
  return userStore.type === 'users'
})

//inject the PocketBase client
const pocketBase = inject('PBClient')

const isLogged = ref(false)


//init the router
const router = useRouter()

const removeListener = pocketBase.authStore.onChange(() => {
  console.log("is logged?: ", isLogged.value);
  console.log("is valid?: ", pocketBase.authStore.isValid);
  isLogged.value = pocketBase.authStore.isValid
})

//logout function
const logout = async () => {
  //call the logout function from the store
  await userStore.clear()
  roomStore.clear()
  //call the logout function from the PocketBase client
  await pocketBase.authStore.clear()
  //redirect to the login page
  await router.push('/signin')

}

const signIn = async () => {
  await router.push('/signin')
}

onMounted(() => {
  console.log("is logged?: ", pocketBase.authStore.isValid);
  isLogged.value = pocketBase.authStore.isValid
})

onUnmounted(() => {
  removeListener()
})

</script>

<template>
  <header class="bg-gray-300 text-gray-900 dark:text-gray-400 dark:bg-gray-800 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <router-link to="/" class="flex title-font font-medium items-center  text-gray-900 dark:text-white mb-4 md:mb-0">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H12H13C13.5523 20 14 19.5523 14 19V5C14 4.44772 13.5523 4 13 4H5ZM5 22H12H13H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6H16V5C16 3.34315 14.6569 2 13 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22ZM19 20H15.8293C15.9398 19.6872 16 19.3506 16 19V8H19C19.5523 8 20 8.44772 20 9V19C20 19.5523 19.5523 20 19 20ZM7 14H5V16H7V14ZM8 14H10V16H8V14ZM13 14H11V16H13V14ZM17 14H19V16H17V14ZM19 10H17V12H19V10ZM5 10H7V12H5V10ZM10 10H8V12H10V10ZM11 10H13V12H11V10ZM7 6H5V8H7V6ZM8 6H10V8H8V6ZM13 6H11V8H13V6Z" fill="#ffffff"/>
      </svg>
        <span class="ml-3 text-xl">Room-e</span>
      </router-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to="/admin/rooms" v-if="isLogged && isAdmin" class="mr-5 hover:pink-500 hover:cursor-pointer">View All Rooms</router-link>
        <router-link to="/rooms" v-if="!isAdmin" class="mr-5 hover:text-pink-500 hover:cursor-pointer">View All Available Rooms</router-link>
        <router-link to="/admin/reservations" v-if="isLogged && isAdmin" class="mr-5 hover:text-pink-500 hover:cursor-pointer">View All Reservations</router-link>
        <router-link to="/user/reservations" v-if="isLogged && isUser" class="mr-5 hover:text-pink-500 hover:cursor-pointer">My Profile</router-link>
        <a @click="logout" v-if="isLogged" class="mr-5 hover:text-pink-500 hover:cursor-pointer">Sign out</a>
        <a @click="signIn" v-if="!isLogged" class="mr-5 hover:text-pink-500 hover:cursor-pointer">Sign in</a>
      </nav>
    </div>
  </header>
</template>


<style lang="scss" scoped>

</style>