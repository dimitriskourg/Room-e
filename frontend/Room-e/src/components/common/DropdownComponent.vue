<script setup>
  import { computed } from 'vue';
  import { useRoomStore } from '../../stores/rooms';


  defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  const roomStore = useRoomStore();
    console.log('calculateSelected', roomStore.categories);


  const calculateSelected = computed(() => {
    console.log('calculateSelected', roomStore.categories);
    return roomStore.categories.filter((category) => category.selected).length;
    // return 0;
  });

  function resetSelectedCategories() {
    roomStore.categories = roomStore.categories.map((category) => {
      category.selected = false;
      return category;
    });
  }

</script>

<style scoped>
  .checkbox-custom {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border-radius: 4px;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #cbd5e0;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: background-color, border-color;
  cursor: pointer;
}

.checkbox-custom:checked {
  background-color: rgb(236 72 153);
  border-color: rgb(236 72 153);
}

</style>

<template>
  <div class="space-y-2">
    <details
      class="overflow-hidden border-r-2 border-gray-300 dark:border-gray-600 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary
        class="flex cursor-pointer items-center justify-between gap-1 bg-white p-2 text-gray-900 transition dark:bg-gray-800 dark:text-white"
      >
        <span class="text-sm font-medium"> {{ title }} </span>

        <span class="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>

      <div
        class="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <header class="flex items-center justify-between p-4">
          <span class="text-sm text-gray-700 dark:text-gray-200">
            {{calculateSelected}} Selected
          </span>

          <button
            type="button"
            class="text-sm underline underline-offset-4 text-pink-500"
            @click="resetSelectedCategories"
          >
            Reset
          </button>
        </header>

        <ul class="space-y-1 border-t border-gray-200 p-4 dark:border-gray-700">
          <li v-for="category in roomStore.categories" :key="category.id">
            <label :for="category.name" class="inline-flex items-center gap-2 checked:text-pink-500">
              <input
                type="checkbox"
                :id="category.name"
                v-model="category.selected"
                class="h-5 w-5 check-box rounded border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900 checked:text-pink-500 checkbox-custom"
              />

              <span class="text-sm font-medium text-gray-700 dark:text-gray-200 checked:text-pink-500">
                {{ category.name }}
              </span>
            </label>
          </li>
        </ul>
      </div>
    </details>
  </div>

</template>