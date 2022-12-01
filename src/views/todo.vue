<template>
  <h2>TODO一覧</h2>
  <ul>
    <!-- const state = reactive<TodoState> ({ todos: mockTodo, }) -->
    <!-- state: readonly(state), -->
    <li v-for="todo in todoStore.state.todos" :key="todo.id">
      {{ todo.title }}
    </li>
    <!-- Link for AddTodo page -->
    <router-link to="/new">新規作成</router-link>
  </ul>
</template>

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
