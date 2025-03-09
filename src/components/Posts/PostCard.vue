<template>
  <v-card>
    <div class="d-flex justify-end">
      <div class="text-medium-emphasis text-caption px-4">
        by {{ blogPost.author }}
      </div>
    </div>
  
    <template
      #title
    >
      <span class="text-body-h6">{{ blogPost.title }}</span>
    </template>
    <template #text>
      <div class="text-blue-grey text-body-1 text-truncate">
        {{ blogPost.text }}
      </div>
    </template>

    <template #actions>
      <v-btn
        size="small"
        color="primary"
        variant="text"
      >
        Read More
      </v-btn>
    </template>
    <template #append>
      <slot name="append" />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import type { Post } from "@/models/Post";

defineProps<{ blogPost: Post }>();
</script>
