<script setup>
import users from "../../db/user";

import Item from "./Item.vue";
</script>

<template>
  <ul v-for="(user, index) in users" :key="index">
    <Item :user="user" />
  </ul>
</template>
