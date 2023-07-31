<script>
import HealthTodoListItem from './HealthTodoListItem.vue'

export default {
  components: {
    HealthTodoListItem
  },
  emits: ['createNewTodo'],
  data() {
    return {
      newTodoText: ''
    }
  },
  methods: {
    onSubmit() {
      const trimmedTodoText = this.newTodoText.trim()
      if (trimmedTodoText !== '') {
        this.$emit('createNewTodo', trimmedTodoText)
        this.newTodoText = ''
      }
    }
  }
}
</script>

<template>
  <AppCard>
    <HealthTodoListItem :isFormItem="true">
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="Create a new todo..."
          v-model="newTodoText"
          class="w-full placeholder:text-dark-grayish-blue dark:bg-dt-very-dark-desaturated-blue dark:text-dt-dark-grayish-blue"
        />
      </form>
    </HealthTodoListItem>
  </AppCard>
</template>
