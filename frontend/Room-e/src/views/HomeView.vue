<script setup>
import skeletonComponent from '@/components/common/skeletonComponent.vue';
import searchInputComponent from '@/components/common/SearchInputComponent.vue';
import MainScreenItem from '../components/MainScreenItem.vue';
import MainScreenItemList from '../components/MainScreenItemList.vue';
import { ref, provide, inject, watchEffect, watch, onMounted } from 'vue';


const categories = ref([{
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
}]);

const title = 'View All Categories';

const selectedDates = ref([]);

const searchedRoomInput = ref('');

provide('selectedDates', selectedDates);

provide('searchedRoomInput', searchedRoomInput);

provide('categories', categories);

provide('test', 'test');

watch( () => categories.value[1].selected, (newVal, oldVal) => {
  console.log('categories changed');
  console.log(newVal);
  console.log(oldVal);
});

// onMounted() {
//   console.log('mounted');
//   console.log(categories.value[1].selected);
// }

</script>

<template>
  <div>
    <searchInputComponent  :title="title"/>
    <MainScreenItemList />
  </div>
</template>
