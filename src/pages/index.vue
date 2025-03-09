<template>
  <router-view />
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

onMounted(() => {
  if(route.path == '/')
    router.push({path: '/home'})
})
</script>
