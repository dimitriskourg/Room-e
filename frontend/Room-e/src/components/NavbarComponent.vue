<script setup>
import {useUserStore} from '@/stores/user'
import { inject } from 'vue';
import { useRouter } from 'vue-router'
import { computed } from 'vue';

//init the store
const userStore = useUserStore()

const isAdmin = computed(() => {
  return userStore.type === 'administrators'
})

const isUser = computed(() => {
  return userStore.type === 'users'
})

const isLogged = computed(() => {
  return pocketBase?.authStore.token && userStore.isValid
})

//inject the PocketBase client
const pocketBase = inject('PBClient')

//init the router
const router = useRouter()

//logout function
const logout = async () => {
  console.log(pocketBase.authStore);
  //call the logout function from the store
  await userStore.clear()
  //call the logout function from the PocketBase client
  await pocketBase.authStore.clear()
  //redirect to the login page
  await router.push('/')

  console.log(userStore.type);
  console.log(pocketBase?.authStore.token);
  console.log(isLogged.value);
}

const signIn = async () => {
  await router.push('/signin')
}

</script>

<template>
  <header class="text-gray-400 bg-gray-800 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <router-link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Room-e</span>
      </router-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to="/" v-if="pocketBase?.authStore.token && isAdmin" class="mr-5 hover:pink-500 hover:cursor-pointer">View All Rooms</router-link>
        <router-link to="/" v-if="!isAdmin" class="mr-5 hover:text-pink-500 hover:cursor-pointer">View All Available Rooms</router-link>
        <router-link to="/" v-if="pocketBase?.authStore.token && isAdmin" class="mr-5 hover:text-pink-500 hover:cursor-pointer">View All Reservations</router-link>
        <router-link to="/" v-if="pocketBase?.authStore.token && isUser" class="mr-5 hover:text-pink-500 hover:cursor-pointer">My Profile</router-link>
        <a @click="logout" v-if="pocketBase?.authStore.token" class="mr-5 hover:text-pink-500 hover:cursor-pointer">Sign out</a>
        <a @click="signIn" v-if="!pocketBase?.authStore.token" class="mr-5 hover:text-pink-500 hover:cursor-pointer">Sign in</a>
      </nav>
    </div>
  </header>
</template>


<style lang="scss" scoped>

</style>