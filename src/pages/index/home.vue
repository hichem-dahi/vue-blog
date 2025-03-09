<template>
  <v-container width="70%">
    <div class="text-h4 text-center text-blue-grey-darken-2 py-8 ma-12">
      VueBlog: The First Vuetify-Powered Blog
    </div>
    <v-timeline
      align="start"
      side="end"
    >
      <v-timeline-item
        v-for="(post, i) in sortedPosts"
        :key="i"
        size="xx-small"
        dot-color="grey"
      >
        <template #opposite>
          <span class="text-medium-emphasis text-body-2">
            {{ formatDate(post.date) }}
          </span>
          <br>
        </template>
        <PostCard
          hover
          variant="flat"
          width="480"
          :blog-post="post"
          @click="$router.push({name: '//post/[id]', params: {id: post.id}})"
        />
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup lang="ts">
import { formatDate } from '@/utls/formatDate';

import { fakeData } from '@/assets/fakeData';
import type { Post } from '@/models/Post';

const posts = ref<Post[]>(JSON.parse(localStorage.getItem("posts") || "[]"));

const sortedPosts = computed(() => {
  return posts.value.slice().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  });
});

onMounted(() => {
  // Load posts from localStorage or use fake data
  const storedPosts = localStorage.getItem("posts");
  if (storedPosts) {
    posts.value = JSON.parse(storedPosts);
  } else {
    posts.value = fakeData;
    localStorage.setItem("posts", JSON.stringify(fakeData));
  }
});
</script>
