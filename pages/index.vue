<script setup lang="ts">
const store = useCounterStore()
</script>

<template>
  <div>
    Hello worlds
    <button @click="store.increment()">
      Increment
    </button>

    {{ store.count }}

    <IconCSS name="tabler-brand-vue" />
  </div>
</template>
