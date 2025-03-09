<template>
  <AppBar />
  <v-main>
    <v-btn
      v-if="$route.path !== '/home'"
      class="mx-12 mt-8 mb-4"
      variant="plain"
      size="x-small"
      prepend-icon="mdi-arrow-left"
      @click="$router.go(-1)"
    >
      Back
    </v-btn>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
//
</script>
