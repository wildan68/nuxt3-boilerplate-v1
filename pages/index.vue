<script setup lang="ts">
const store = useCounterStore()
</script>

<template>
  <div>
    Hello world
    <button @click="store.increment()">
      Increment
    </button>

    {{ store.count }}

    <IconCSS name="tabler-brand-vue" size="24px" />
  </div>
</template>
