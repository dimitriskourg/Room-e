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
const displayError = ref(false);

// Function to authenticate the user based on email and password
const authUser = async () => {
    try {
        // Authenticate the user via email and password
        console.log("the data are: " , email.value, password.value);
        //try to login either as a user or as a administrator
        const userData = await pocketBase.collection("users").authWithPassword(email.value, password.value);

        if (userData) {
            console.log(userData);
            userStore.userID = userData.record?.id;
            userStore.userName = userData.record?.username;
            userStore.type = userData.record?.collectionName;
            console.log("the user is: ", pocketBase?.authStore.token);
            router.push({ path: "/rooms" })
        }
    } catch (error) {
        try {
        const userData = await pocketBase.collection("administrators").authWithPassword(email.value, password.value);

        if (userData) {
        console.log(userData);
        userStore.userID = userData.record?.id;
        userStore.userName = userData.record?.username;
        userStore.type = userData.record?.collectionName;
        console.log("the user is: ", pocketBase?.authStore.token);
        router.push({ path: "/admin" })
        }
        } catch (error) {
            console.log(error);
            displayError.value = true;
        }
    }
}
</script>

<template>
    <form @submit.prevent="authUser" >
        <section class="text-gray-400 bg-gray-900 body-font mx-2 sm:mx-0">
            <div class="container md:px-10 lg:px-20 xs:px-4 py-60 sm:mx-auto flex flex-wrap items-center">
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 class="title-font font-medium text-3xl text-white">Room-e</h1>
                <p class="leading-relaxed mt-4">#1 website to book rooms for multiple activities</p>
                </div>
                <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 class="text-white text-lg font-medium title-font mb-5">Sign in</h2>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                    <input type="email" id="email" name="email" v-model="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                    <input type="password" id="password" name="password" v-model="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg" type="submit">Sign in</button>
                <p class="text-xs mt-3">You don't have an account? Please <router-link to="signup" class="text-pink-500">Sign up</router-link></p> 
                <div v-if="displayError" class="mb-3">
                    <p  class="text-red-500 text-xs mt-5">Something went wrong.</p>
                </div>
                </div>
            </div>
        </section>
    </form>
</template>