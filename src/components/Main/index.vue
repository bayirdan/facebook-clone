<script setup>
import NewPost from "./NewPost.vue";
import Post from "./Post.vue";
</script>

<template>
  <div
    class="
      h-auto
      desktop:w-180
      laptop:w-160
      lg:w-160
      sm:w-140
      w-full
      sm:m-auto
      p-1
      text-xs text-myGray-800
      font-semibold
      mobile-x:text-tiny mobile-x:p-8
    "
  >
    <NewPost />
    <Post />
  </div>
</template>
