<script setup>
import svgCreate from "../svg/svgCreate.vue";
import svgLiveVideo from "../svg/svgLiveVideo.vue";
import svgPhoto from "../svg/svgPhoto.vue";
import svgSmile from "../svg/svgSmile.vue";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div id="storie" class="p-2 bg-myGray-150 rounded-lg">
      <div
        class="
          w-full
          h-18
          rounded-lg
          py-1
          px-2
          flex
          items-center
          gap-3
          cursor-pointer
          hover:bg-myGray-200
          transition-colors
          duration-300
        "
      >
        <div
          id="post-svg-plus"
          class="p-2.5 bg-face-blue-light rounded-full cursor-pointer"
        >
          <svg-create class="w-5 text-face-blue" />
        </div>
        <div id="title" class="flex flex-col">
          <span class="mobile-x:text-lg text-tiny">Create Story</span>
          <span class="mobile-x:text-tiny text-xs text-myGray-600"
            >Share a photo or write something.</span
          >
        </div>
      </div>
    </div>

    <div
      id="new-post"
      class="h-32 p-2 bg-myGray-150 rounded-lg flex flex-col justify-between"
    >
      <div id="new-post-top" class="p-1 flex gap-3 items-center">
        <div class="_pp_ cursor-pointer">
          <img
            src="src/assets/images/pp.jpg"
            class="w-10 rounded-full"
            alt=""
          />
        </div>
        <input
          class="
            cursor-pointer
            w-full
            bg-myGray-250
            h-10
            rounded-full
            outline-none
            text-tiny
            px-3
            font-semibold
            placeholder-myGray-650
            hover:bg-myGray-300
            transition-colors
            duration-300
            mobile-x:text-base
          "
          type="text"
          name=""
          placeholder="What's on your mind, Elliot ?"
        />
      </div>
      <hr class="mx-2 border-myGray-250" />
      <div
        id="new-post-bottom"
        class="flex items-center justify-around px-2 text-myGray-700"
      >
        <div
          class="
            w-full
            h-10
            flex
            items-center
            justify-center
            gap-2
            hover:bg-myGray-250
            rounded-lg
            cursor-pointer
            transition-colors
            duration-300
          "
        >
          <svg-live-video class="w-6 text-red-500" />
          <span>Live Video</span>
        </div>
        <div
          class="
            w-full
            h-10
            flex
            items-center
            justify-center
            gap-2
            hover:bg-myGray-250
            rounded-lg
            cursor-pointer
            transition-colors
            duration-300
          "
        >
          <svg-photo class="w-6 text-green-500" />
          <span>Photo/video</span>
        </div>
        <div
          class="
            w-full
            h-10
            items-center
            justify-center
            gap-2
            hover:bg-myGray-250
            rounded-lg
            cursor-pointer
            transition-colors
            duration-300
            hidden
            mobile-x:flex
          "
        >
          <svg-smile class="w-6 text-yellow-400" />
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
