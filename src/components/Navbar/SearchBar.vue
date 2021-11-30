<script setup>
import { ref } from "vue";

import svgSearch from "../svg/svgSearch.vue";
import svgFacebook from "../svg/svgFacebook.vue";
import svgLeft from "../svg/svgLeft.vue";

let isFocus = ref(false);
</script>

<template>
  <div
    class="w-72 h-14 py-2 flex items-center gap-1 sm:gap-2"
    :class="isFocus ? 'bg-myGray-150 w-screen pr-4 sm:w-72' : ''"
  >
    <div class="__logo">
      <svg-facebook
        class="
          text-face-blue
          w-10
          cursor-pointer
          ml-4
          transition-opacity
          duration-500
        "
        :class="
          isFocus
            ? 'absolute transform -translate-x-96 opacity-0'
            : 'opacity-100'
        "
      />
    </div>
    <div
      class="
        h-9
        flex
        items-center
        justify-center
        rounded-full
        cursor-pointer
        hover:bg-myGray-200
        text-myGray-800
        transition-opacity
        duration-500
      "
      :class="
        !isFocus
          ? 'absolute transform -translate-x-96 opacity-0'
          : 'opacity-100'
      "
    >
      <svg-left class="w-5" />
    </div>
    <div
      class="
        w-10
        flex
        items-center
        justify-center
        h-full
        bg-myGray-200
        rounded-full
        overflow-hidden
        cursor-pointer
        xl:flex-1 xl:px-4 xl:cursor-text
        ml-1
        sm:m-0
      "
      @click="isFocus = true"
      :class="isFocus ? 'flex-1 px-4 cursor-text' : ''"
    >
      <svg-search
        class="w-5 text-myGray-500"
        fill="currentColor"
        :class="
          isFocus
            ? 'absolute transform -translate-x-96 opacity-0'
            : 'opacity-100'
        "
      />
      <input
        class="
          w-full
          h-full
          bg-transparent
          text-sm
          px-2
          outline-none
          text-myGray-800
          xl:block
        "
        :class="isFocus ? 'block' : 'hidden'"
        type="text"
        placeholder="Search Facebook"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
    </div>
  </div>
</template>
