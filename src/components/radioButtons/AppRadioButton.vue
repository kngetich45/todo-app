<script>
export default {
  props: {
    value: String,
    modelValue: String
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <div>
    <input
      type="radio"
      name="todo-filter"
      :id="value"
      :value="value"
      :checked="value === modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="peer hidden"
    />
    <label :for="value" class="cursor-pointer text-sm font-bold text-dark-grayish-blue hover:text-very-dark-grayish-blue peer-checked:text-bright-blue dark:text-dt-very-dark-grayish-blue dark:hover:text-dt-light-grayish-blue-hover dark:peer-checked:text-bright-blue">
           <slot></slot>
    </label>
  </div>
</template>
