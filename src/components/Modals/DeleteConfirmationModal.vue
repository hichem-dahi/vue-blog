<template>
  <v-dialog
    v-model="model"
    max-width="400px"
  >
    <v-card>
      <template #title>
        <span class="text-h6">Confirm Deletion</span>
      </template>
      <template #text>
        Are you sure you want to delete <strong>{{ title }}</strong>?
      </template>
      <template #actions>
        <v-spacer />
        <v-btn
          variant="text"
          @click="model = false"
        >
          Cancel
        </v-btn>
        <v-btn
          color="red"
          variant="text"
          @click="emits('confirm')"
        >
          Delete
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
const model = defineModel<boolean>();
const emits = defineEmits(['confirm']);
</script>
