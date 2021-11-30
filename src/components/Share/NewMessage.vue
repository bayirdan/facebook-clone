<script setup>
import svgNewMessage from "../svg/svgNewMessage.vue";
</script>

<template>
  <div
    class="
      p-4
      flex
      items-center
      justify-center
      rounded-full
      bg-myGray-250
      fixed
      right-5
      bottom-5
      cursor-pointer
      hover:bg-myGray-300
      transition-colors
      duration-300
    "
  >
    <svg-new-message class="w-5 text-myGray-800" />
  </div>
</template>
