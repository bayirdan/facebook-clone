<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <li
    class="
      flex
      items-center
      gap-2
      px-3
      py-2
      w-full
      cursor-pointer
      rounded-lg
      hover:bg-myGray-150
      transition-color
      duration-300
    "
  >
    <img :src="props.item.route" class="rounded-full w-9" alt="" />
    <span class="text-myGray-800 font-bold text-tiny">
      {{ props.item.title }}
    </span>
  </li>
</template>
