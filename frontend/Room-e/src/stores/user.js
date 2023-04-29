import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user',() => {
  //state variable
  const userID = ref(useLocalStorage('userID', ''));
  const userName = ref(useLocalStorage('userName', ''));
  const type = ref(useLocalStorage('type', ''));

  //action
  function clear() {
    userID.value = '';
    userName.value = '';
    type.value = '';
  }

  return {
    userID,
    userName,
    type,
    clear
  }
})