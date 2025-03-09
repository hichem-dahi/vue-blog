<template>
  <v-card>
    <template #title>
      {{ title }}
    </template>
    <template #text>
      <v-text-field
        v-model="model.title"
        density="compact"
        label="Title"
        :rules="[(v) => !!v || 'Title is required']"
        required
      />

      <v-textarea
        v-model="model.text"
        density="compact"
        label="Content"
        :rules="[(v) => !!v || 'Content is required']"
        required
      />

      <v-text-field
        v-model="model.author"
        density="compact"
        label="Author"
        :rules="[(v) => !!v || 'Author is required']"
        required
      />

      <v-text-field
        v-model="model.date"
        density="compact"
        label="Date"
        type="date"
        required
      />
    </template>
    <template #actions>
      <slot name="actions" />
    </template>
  </v-card>
</template>

<script setup lang="ts">
import type { Post } from "@/models/Post";

defineProps<{ title: string }>()

const model = defineModel<Post>({
  default: {
    id: "",
    title: "",
    text: "",
    author: "",
    date: new Date().toISOString(), // Default to today's date
  },
});
</script>
