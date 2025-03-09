<template>
  <v-app-bar>
    <template #prepend>
      <div class="d-flex align-end ga-2 pa-4">
        <div
          class="text-h6 mx-4"
          @click="router.push('/home')"
        >
          VueBlog
        </div> 
        <v-btn
          variant="plain"
          size="small"
          text="My posts"
          :to="{ path: '/my-posts' }"
        />
        <v-btn
          variant="plain"
          size="small"
          text="New post"
          :to="{ path: '/new-post' }"
        />
      </div>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>
