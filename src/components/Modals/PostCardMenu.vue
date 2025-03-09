<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
        size="small"
        icon="mdi-dots-vertical"
        @click.prevent
      />
    </template>
    <v-list density="compact">
      <v-list-item
        density="compact"
        @click="emits('delete')"
      >
        <v-list-item-title>Delete</v-list-item-title>
      </v-list-item>
      <v-list-item
        density="compact"
        @click="emits('edit')"
      >
        <v-list-item-title>Modify</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const emits = defineEmits(['delete', 'edit'])
</script>