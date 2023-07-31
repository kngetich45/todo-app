<script>
import AppRadioButton from './radioButtons/AppRadioButton.vue'

export default {
  components: {
    AppRadioButton
  },
  props: {
    defaultTodoFilter: String
  },
  emits: ['updateTodoFilter'],
  data() {
    return {
      todoFilter: this.defaultTodoFilter
    }
  },
  watch: {
    todoFilter(newtodoFilter) {
      this.$emit('updateTodoFilter', newtodoFilter)
    }
  }
}
</script>

<template>
  <div>
    <div class="flex h-12 items-center justify-center gap-4">
      <AppRadioButton v-model="todoFilter" value="all">All</AppRadioButton>
      <AppRadioButton v-model="todoFilter" value="active">Active</AppRadioButton>
      <AppRadioButton v-model="todoFilter" value="completed">Completed</AppRadioButton>
    </div>
  </div>
</template>
