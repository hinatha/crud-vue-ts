<template>TODO一覧です。</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { todoKey } from '@/store/todo'

export default defineComponent({
  // Inject todoStore
  setup () {
    const todoStore = inject(todoKey)
    // todoStore: Store | undefined
    // We need to check if the type is correct (Store)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    return {
      todoStore,
    }
  },
})
</script>
