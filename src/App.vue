<template>
  <DefaultRoute>
    <router-view />
  </DefaultRoute>
</template>

<script>
import DefaultRoute from './router/DefaultRoute.vue';

export default {
  components: {
    DefaultRoute
  }
}
</script>
