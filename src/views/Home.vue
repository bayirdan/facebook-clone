<script setup>
import Navbar from "../components/Navbar/index.vue";
import LeftBar from "../components/LeftBar/index.vue";
import RightBar from "../components/RightBar/index.vue";
import Main from "../components/Main/index.vue";
import NewMessage from "../components/Share/NewMessage.vue";
</script>

<template>
  <div class="bg-myGray-100 w-full h-full font-face">
    <div class="relative w-full h-14">
      <div class="absolute top-0 w-full h-full">
        <Navbar class="fixed" />
      </div>
    </div>
    <div class="flex gap-5">
      <div class="relative w-80 hidden xl:block">
        <div class="absolute">
          <LeftBar class="fixed w-80" />
        </div>
      </div>
      <div class="flex-1">
        <Main />
      </div>
      <div class="relative w-80 hidden lg:block">
        <div class="absolute">
          <RightBar class="fixed" />
        </div>
      </div>
    </div>
    <NewMessage />
  </div>
</template>

<style></style>
