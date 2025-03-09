<template>
  <v-container>
    <div class="text-h5 ma-4 mt-6 py-4">
      • My posts
    </div>
    <v-row>
      <v-col
        v-for="(post, i) in posts"
        :key="i"
        cols="4"
      >
        <PostCard   
          :blog-post="post"
          hover
          height="180"
          @click="$router.push({name: '//post/[id]', params: {id: post.id}})"
        > 
          <template #append>
            <PostCardMenu
              @delete="openDeleteDialog(post)"
              @edit="openEditDialog(post)"
            />
          </template>
        </PostCard>
      </v-col>
    </v-row>
  
    <!-- Edit Dialog -->
    <EditPostModal
      v-if="selectedPost"
      v-model:dialog="editDialog"
      v-model:post="selectedPost"
      @save="savePost"
    />

    <!-- Delete Confirmation Dialog -->
    <DeleteConfirmationModal
      v-if="selectedPost"
      v-model="deleteDialog"
      :title="selectedPost?.title"
      @confirm="deletePost"
    />
  </v-container>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

import type { Post } from "@/models/Post";

const posts = ref<Post[]>(JSON.parse(localStorage.getItem("posts") || "[]"));

const editDialog = ref(false);
const deleteDialog = ref(false);

const selectedPost = ref<Post | null>(null);

const openDeleteDialog = (post: Post) => {
  selectedPost.value = post;
  deleteDialog.value = true;
};

const openEditDialog = (post: Post) => {
  selectedPost.value = { ...post }; 
  editDialog.value = true;
};

const deletePost = () => {
  if (selectedPost.value !== null) {
    const postId = selectedPost.value.id; 
    const index = posts.value.findIndex((post) => post.id === postId); 
    if (index !== -1) {
      posts.value.splice(index, 1); 
      localStorage.setItem("posts", JSON.stringify(posts.value));
    }
  }
  deleteDialog.value = false; 
};

const savePost = () => {
  if (selectedPost.value !== null) {
    const postId = selectedPost.value.id;
    const index = posts.value.findIndex((post) => post.id === postId);
    if (index !== -1) {
      posts.value[index] = { ...selectedPost.value }; 
      localStorage.setItem("posts", JSON.stringify(posts.value)); 
    }
  }
  editDialog.value = false;
};
</script>
  