<script setup>
// SVG
import svgMenu from "../svg/svgMenu.vue";
import svgMessenger from "../svg/svgMessenger.vue";
import svgNotifications from "../svg/svgNotifications.vue";
import svgAccount from "../svg/svgAccount.vue";
import svgCreate from "../svg/svgCreate.vue";
</script>

<template>
  <div class="flex items-center gap-1 sm:gap-2 justify-end px-4">
    <div
      id="friends-box"
      class="
        min-w-max
        px-3
        rounded-full
        h-9
        items-center
        justify-center
        bg-myGray-200
        cursor-pointer
        hover:bg-myGray-250
        hidden
        xl:flex
        transition-colors
        duration-300
      "
    >
      <span class="text-sm text-myGray-900 font-semibold">Find Friends</span>
    </div>
    <div
      id="pp-info"
      class="
        items-center
        gap-1
        rounded-full
        hover:bg-myGray-200
        cursor-pointer
        py-1
        px-2
        hidden
        xl:flex
        transition-colors
        duration-300
      "
    >
      <div id="pp" class="rounded-full overflow-hidden w-7">
        <img src="src/assets/images/pp.jpg" alt="" />
      </div>
      <span class="text-sm font-semibold text-myGray-900">Elliot</span>
    </div>
    <div
      id="menu-box"
      class="
        p-3
        text-myGray-900
        bg-myGray-200
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        hover:bg-myGray-250
        transition-colors
        duration-300
      "
    >
      <svg-menu class="w-5 hidden lg:block" />
      <svg-create class="w-5 block lg:hidden" />
    </div>
    <div
      id="messenger-box"
      class="
        p-3
        text-myGray-900
        bg-myGray-200
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        hover:bg-myGray-250
        transition-colors
        duration-300
      "
    >
      <svg-messenger class="w-5" />
    </div>
    <div
      id="notifications-box"
      class="
        p-3
        text-myGray-900
        bg-myGray-200
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        hover:bg-myGray-250
        transition-colors
        duration-300
      "
    >
      <svg-notifications class="w-5" />
    </div>
    <div
      id="account-box"
      class="
        p-3
        text-myGray-900
        bg-myGray-200
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        hover:bg-myGray-250
        transition-colors
        duration-300
      "
    >
      <svg-account class="w-5" />
    </div>
  </div>
</template>
