<script>
import AppHeader from './components/layout/AppHeader.vue'
import HealthTodoList from './components/HealthTodoList.vue'

export default {
  components: {
    AppHeader,
    HealthTodoList
  },
  data() {
    return {
      darkModeEnabled: false
    }
  }
}
</script>

<template>
  <div :class="{ 'dark': darkModeEnabled }">
    <div
      class="flex min-h-screen flex-col bg-very-light-gray font-rubik text-sm text-very-dark-grayish-blue dark:bg-dt-very-dark-blue dark:text-dt-light-grayish-blue md:text-lg">
         <AppHeader @toggle-dark-mode="darkModeEnabled = !darkModeEnabled" />

      <main class="flex-1 -translate-y-24 md:-translate-y-36">
        <HealthTodoList /> 
          <p class="mt-10 text-center text-sm text-dark-grayish-blue dark:text-dt-very-dark-grayish-blue md:mt-14"  >
            Drag and drop to reorder list
          </p>
      </main> 
    </div>
  </div>
</template>
