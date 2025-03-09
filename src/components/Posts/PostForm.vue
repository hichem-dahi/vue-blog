<template>
  <v-form v-model="isValid">
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
          :rules="[(v) => !!v || 'Date is required']"
          required
        />
      </template>
      <template #actions>
        <slot
          name="actions"
          :is-valid="isValid"
        />
      </template>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import type { Post } from "@/models/Post";

defineProps<{ title: string }>()

const isValid = ref(false)
const model = defineModel<Post>({
  default: {
    id: "",
    title: "",
    text: "",
    author: "",
    date: new Date().toISOString().split('T')[0], // Default to today's date
  },
});
</script>
