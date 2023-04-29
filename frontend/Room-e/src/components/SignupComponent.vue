<script setup>
  import { useUserStore } from '@/stores/user';
  import { inject, ref } from 'vue';
  import { useRouter } from 'vue-router';

// Inject the PocketBase client
const pocketBase = inject("PBClient");

// Init the store
const userStore = useUserStore();

// Router composable
const router = useRouter();

// Local reactive variables
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const username = ref("");
const firstName = ref("");
const lastName = ref("");
const displayError = ref(false);

// Function to authenticate the user based on email and password
const signUser = async () => {
    try {
        // Authenticate the user via email and password
        const userData = await pocketBase.collection("users").authWithPassword(email.value, password.value);

        if (userData) {
            console.log(userData);
            userStore.userID = userData.record?.id;
            userStore.userName = userData.record?.username;
            userStore.type = userData.record?.collectionName;
            router.push({ path: "/dashboard" })
        }
    } catch (error) {
        console.log("sdas");
        console.log(error)
        displayError.value = true;
    }
}
</script>

<template>
    <form @submit.prevent="signUser" >
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container md:px-10 lg:px-20 md:py-40 py-10 mx-auto flex flex-wrap items-center">
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mx-5">
                <h1 class="title-font font-medium text md:text-3xl text-white text-5xl">Room-e</h1>
                <p class="leading-relaxed mt-4">#1 website to book rooms for multiple activities</p>
                </div>
                <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-5">
                <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
                <div class="relative mb-4">
                    <label for="username" class="leading-7 text-sm text-gray-400">Username</label>
                    <input type="username" id="username" name="username" :value="username" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="firstName" class="leading-7 text-sm text-gray-400">First Name</label>
                    <input type="firstName" id="firstName" name="firstName" :value="firstName" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="lastName" class="leading-7 text-sm text-gray-400">Last Name</label>
                    <input type="lastName" id="lastName" name="lastName" :value="lastName" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                    <input type="email" id="email" name="email" :value="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                    <input type="password" id="password" name="password" :value="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-6">
                    <label for="confirm-password" class="leading-7 text-sm text-gray-400">Confirm Password</label>
                    <input type="confirm-password" id="confirm-password" name="confirm-password" :value="confirmPassword" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg" type="submit">Sign Up</button>
                <p class="text-xs mt-3">Do you have an account? Please <router-link to="signup" class="text-pink-500">Sign in</router-link></p> 
                <div v-if="displayError" class="mb-3">
                    <p  class="text-red-500 text-xs mt-5">Something went wrong.</p>
                </div>
                </div>
            </div>
        </section>
    </form>
</template>