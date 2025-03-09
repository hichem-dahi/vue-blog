<template>
  <v-container
    width="60%"
    class="pa-8"
  >
    <v-sheet>
      <p class="text-caption text-blue-grey-darken-2">
        {{ formattedDate }}
      </p>
      <h1 class="text-h4 font-weight-bold mt-6">
        <span>{{ post?.title }}</span> 
      </h1>
  
      <div class="d-flex align-center mt-4">
        <div>
          <p class="text-subtitle-2 font-weight-regular">
            By {{ post?.author }}
          </p>
        </div>
      </div>
  
      <v-divider class="my-6" />
  
      <div class="text-body-1 text-blue-grey-darken-2">
        {{ post?.text }}
      </div>
    </v-sheet>
  </v-container>
</template>
  
<script setup lang="ts">
import { ref, computed } from "vue";

import { formatDate } from "@/utls/formatDate";

import type { Post } from "@/models/Post";

const route = useRoute()

const post = ref<Post>()

onMounted(() => {
  const id = route.params.id;
  if(id)
    post.value = fetchPostByIndex(id);
});

const fetchPostByIndex = (id: string)=> {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]") as Post[];
  return posts.find(p => p.id == id)|| undefined ;
};

const formattedDate = computed(() => post.value?.date ? formatDate(post.value?.date) : '');
</script>
  
  