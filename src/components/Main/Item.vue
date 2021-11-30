<script setup>
const props = defineProps({
  user: Object,
});

//SVG
import svgDots from "../svg/svgDots.vue";
import svgWorld from "../svg/svgWorld.vue";
import svgLike from "../svg/svgLike.vue";
import svgLike2 from "../svg/svgLike2.vue";
import svgComment from "../svg/svgComment.vue";
import svgSmile from "../svg/svgSmile.vue";
import svgLiveVideo from "../svg/svgLiveVideo.vue";
import svgMenu from "../svg/svgMenu.vue";
import svgPhoto from "../svg/svgPhoto.vue";
</script>

<template>
  <li
    class="w-full bg-myGray-150 my-4 rounded-lg transition-colors duration-300"
  >
    <div id="post-top" class="w-full flex items-center justify-between p-4">
      <div id="post-top_left" class="flex items-center gap-4">
        <div
          id="post-top_left_pp"
          class="
            ring-2 ring-blue-500 ring-opacity-70
            border-2 border-black
            w-max
            rounded-full
            cursor-pointer
          "
        >
          <img :src="props.user.route" class="w-8 h-8 rounded-full" alt="" />
        </div>
        <div id="post-top_left_title">
          <p class="hover:underline cursor-pointer">{{ props.user.name }}</p>
          <p class="flex text-xs text-myGray-500 mt-1 items-center">
            <span class="hover:underline cursor-pointer">3d</span>
            <span class="mx-1">·</span>
            <svg-world class="w-3" />
          </p>
        </div>
      </div>
      <div
        id="post-top_right"
        class="
          p-2
          rounded-full
          hover:bg-myGray-200
          cursor-pointer
          transition-colors
          duration-300
        "
      >
        <svg-dots class="w-4" />
      </div>
    </div>
    <div id="post-middle">
      <p class="px-3 font-normal leading-5 text-sm">
        {{ props.user.post.title }}
      </p>
      <img :src="user.post.pictures" class="w-full my-2" alt="" />
    </div>
    <div id="post-bottom" class="px-4 py-2 text-sm font-normal">
      <div id="post-bottom_info" class="flex items-center justify-between">
        <div id="info_left" class="flex gap-2 cursor-pointer">
          <svg-like class="w-5" />
          <span class="hover:underline"> {{ props.user.post.like }} </span>
        </div>
        <div id="info_right">
          <span class="hover:underline cursor-pointer">1 Comment</span>
        </div>
      </div>
      <div
        id="post-bottom_buttons"
        class="
          text-myGray-600
          font-bold
          text-sm
          sm:text-tiny
          flex
          items-center
          my-2
          border-b border-t border-myGray-300
        "
      >
        <div
          class="
            flex
            gap-2
            w-full
            items-center
            justify-center
            p-2
            hover:bg-myGray-250
            cursor-pointer
            rounded-lg
            my-1
            transition-colors
            duration-300
          "
        >
          <svg-like2 class="w-5" />
          <span>Like</span>
        </div>
        <div
          class="
            flex
            gap-2
            w-full
            items-center
            justify-center
            p-2
            hover:bg-myGray-250
            cursor-pointer
            rounded-lg
            my-1
            transition-colors
            duration-300
          "
        >
          <svg-comment class="w-5" />
          <span>Comment</span>
        </div>
      </div>
      <div id="post-bottom-comments">
        <div id="other" class="flex gap-2 my-4">
          <div id="other_pp">
            <img
              :src="props.user.post.comment.route"
              class="w-9 h-9 rounded-full cursor-pointer"
              alt=""
            />
          </div>
          <div id="other_comment">
            <div class="py-2 px-3 bg-myGray-200 rounded-2xl">
              <div
                id="commnet-name"
                class="cursor-pointer hover:underline font-bold text-xs"
              >
                {{ props.user.post.comment.name }}
              </div>
              <div id="comment-title">
                {{ props.user.post.comment.text }}
              </div>
            </div>
            <div class="px-3 text-xs mt-1">
              <span class="cursor-pointer hover:underline">Like</span> ·
              <span class="cursor-pointer hover:underline">Reply</span> ·
              <span class="cursor-pointer hover:underline">Share</span> ·
              <span class="cursor-pointer hover:underline">2d</span>
            </div>
          </div>
        </div>
        <div id="me" class="flex w-full gap-2">
          <img
            src="src/assets/images/pp.jpg"
            class="w-9 h-9 rounded-full cursor-pointer"
            alt=""
          />
          <div class="flex w-full flex-col">
            <div id="me_comment" class="flex w-full bg-myGray-200 rounded-2xl">
              <input
                class="w-full bg-transparent px-3 outline-none"
                type="text"
                placeholder="Write a public comment..."
              />
              <div id="me_comment_buttons" class="flex items-center">
                <div
                  class="
                    p-2
                    hover:bg-myGray-300
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  "
                >
                  <svg-smile class="w-4 text-myGray-600" />
                </div>
                <div
                  class="
                    p-2
                    hover:bg-myGray-300
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  "
                >
                  <svg-live-video class="w-4 text-myGray-600" />
                </div>
                <div
                  class="
                    p-2
                    hover:bg-myGray-300
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  "
                >
                  <svg-menu class="w-4 text-myGray-600" />
                </div>
                <div
                  class="
                    p-2
                    hover:bg-myGray-300
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                  "
                >
                  <svg-photo class="w-4 text-myGray-600" />
                </div>
              </div>
            </div>
            <span class="text-xs">Press Enter the post</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
