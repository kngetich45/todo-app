<script> 
export default { 
  emits: ['toggleDarkMode'],
  methods: {
    toggleDarkMode() {
      this.$emit('toggleDarkMode')
    }
  }
}
</script>

<template>
  <header class="relative h-[200px] overflow-hidden md:h-[300px]">
    <div class="absolute -inset-1 bg-desktop-light bg-cover blur-sm dark:bg-desktop-dark"></div>

    <nav
      class="mx-auto h-full w-full max-w-screen-2xl bg-mobile-light px-6 pt-12 backdrop-blur-md dark:bg-mobile-dark xs:bg-desktop-light dark:xs:bg-desktop-dark md:pt-20">
      <div class="mx-auto flex w-full max-w-xl items-start justify-between">
        <a href="#">
          <h1 class="text-2xl font-bold uppercase tracking-[0.4em] text-white md:text-4xl">Todo</h1>
        </a>
        <button @click="toggleDarkMode" aria-label="Toggle night mode" class="w-6 md:w-8">
           
          <img  src="../../assets/images/ICON-MOON.SVG" alt="moon" class="dark:hidden"/>
          <img  src="../../assets/images/ICON-SUN.SVG" alt="sun" class="hidden dark:block"/>

        </button>
      </div>
    </nav>
  </header>
</template>
