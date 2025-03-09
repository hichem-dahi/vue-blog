<template>
  <v-container max-width="50%">
    <PostForm
      v-model="form"
      title="Create a new post"
    >
      <template #actions="{ isValid }">
        <v-btn
          block
          color="primary"
          variant="tonal"
          type="submit"
          :disabled="!isValid"
          @click="submitPost(isValid)"
        >
          Add post
        </v-btn>
      </template>
    </PostForm>
  </v-container>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';

import type { Post } from '@/models/Post';

const router = useRouter()
const form = ref<Post>({
  id: uuidv4(),
  title: "",
  text: "",
  author: "",
  date: new Date().toISOString().split('T')[0], // Default to today's date
})

const submitPost = (valid : boolean) => {
  if(!valid) return
  const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
  savedPosts.push(form.value);
  localStorage.setItem("posts", JSON.stringify(savedPosts));
  form.value = {id: uuidv4(), title: "", text: "", author: "", date: new Date().toISOString() };
  alert("Post added successfully!");
  router.go(0)
};
</script>
