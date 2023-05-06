<script setup>
import searchInputComponent from '@/components/common/SearchInputComponent.vue';
import MainScreenItemList from '../components/MainScreenItemList.vue';

const title = 'View All Categories';

// onMounted() {
//   console.log('mounted');
//   console.log(categories.value[1].selected);
// }

</script>

<template>
  <div>
    <searchInputComponent  :title="title"/>
    <MainScreenItemList/>
  </div>
</template>
