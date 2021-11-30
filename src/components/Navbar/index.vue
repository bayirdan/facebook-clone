<script setup>
// SVG
import svgHome from "../svg/svgHome.vue";
import svgGroups from "../svg/svgGroups.vue";
import svgMore from "../svg/svgMore.vue";

import SearchBar from "./SearchBar.vue";
import RightMenu from "./RightMenu.vue";
</script>

<template>
  <div
    class="
      w-full
      h-14
      bg-myGray-150
      border-b border-myGray-250
      grid grid-cols-2
      md:grid-cols-3
      items-center
      z-50
    "
  >
    <SearchBar class="z-20" />
    <div
      id="mid"
      class="
        m-auto
        h-full
        flex
        items-center
        justify-center
        gap-2
        hidden
        md:flex
      "
    >
      <div
        id="svg-home-box"
        class="
          lg:w-40
          h-full
          text-face-blue
          flex
          items-center
          justify-center
          border-b-2 border-face-blue
          cursor-pointer
        "
      >
        <svg-home class="w-7" />
      </div>
      <div
        id="svg-groups-box"
        class="
          lg:w-40
          h-12
          text-myGray-700
          flex
          items-center
          justify-center
          cursor-pointer
          hover:bg-myGray-250
          rounded-lg
          transition-colors
          duration-300
        "
      >
        <svg-groups class="w-7" />
      </div>
      <div
        id="svg-more-box"
        class="
          lg:w-40
          h-12
          text-myGray-700
          flex
          items-center
          justify-center
          cursor-pointer
          hover:bg-myGray-250
          rounded-lg
          lg:hidden
          transition-colors
          duration-300
        "
      >
        <svg-more class="w-7" />
      </div>
    </div>
    <RightMenu />
  </div>
</template>

<style>
#svg-home-box,
#svg-groups-box,
#svg-more-box {
  max-width: 120px;
  min-width: 56px;
}
</style>
