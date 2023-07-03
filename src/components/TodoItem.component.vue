<template>
  <div class="list__item">
    <div class="list__item list__item--wrapper">
      <input v-model="item.checked" class="list__item--checkbox" type="checkbox" />
      <label class="list__item--label">{{ item.value }}</label>
    </div>
    <div class="list__item list__item--wrapper">
      <todo-button
        @click="$emit('removeItem', item.id)"
        icon="trash"
        text-button="remove"
        background="red"
      />
      <todo-button
        @click="$emit('duplicateItem', item)"
        icon="duplicate"
        text-button="duplicate"
        background="blue"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TodoButton from '../components/TodoButton.component.vue'
import Task from '../views/TodoList.view.vue'
export default {
  name: 'TodoItem',
  components: { TodoButton },
  props: {
    item: {
      type: Object as Task
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    &--checkbox {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
