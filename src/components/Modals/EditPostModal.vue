<template>
  <v-dialog
    v-model="model"
    max-width="500px"
  >
    <PostForm
      v-if="post"
      v-model="post"
      title="Edit Post"
    >
      <template #actions="{ isValid }">
        <v-btn
          @click="model = false"
        >
          cancel
        </v-btn>
        <v-btn
          color="primary"
          variant="tonal"
          :disabled="!isValid"
          @click="emit('save', post)"
        >
          Save
        </v-btn>
      </template>
    </PostForm>
  </v-dialog>
</template>
  
  <script setup lang="ts">
  import type { Post } from "@/models/Post";
  
  const post = defineModel<Post>('post')
  const model = defineModel<boolean>('dialog'); 
  const emit = defineEmits(["save"]);
  </script>
  