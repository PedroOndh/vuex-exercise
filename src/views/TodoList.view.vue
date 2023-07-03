<template>
  <div class="list">
    <div class="list__header">
      <h1>To-do List</h1>
      <todo-button @click="deleteAllItems" text-button="Remove all" background="red" size="big"/>
    </div>
    <div class="list__content">
      <div class="list__addItem">
        <input v-model="inputText" class="list__input--text" type="text" placeholder="Add task" />
        <todo-button @click="addItem" text-button="add" icon="add" background="green" />
      </div>
      <div class="list__items" v-if="tasks.length">
        <todo-item
          @removeItem="deleteItem"
          @duplicateItem="duplicateItem"
          v-for="task in tasks"
          :item="task"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, Ref, ref } from 'vue'
import {mapGetters, mapMutations, mapState, useStore} from "vuex";
import TodoItem from '../components/TodoItem.component.vue'
import TodoButton from '../components/TodoButton.component.vue'

export interface Task {
  id: number
  value: string
  checked?: boolean
}

export default {
  name: 'TodoList',
  components: { TodoButton, TodoItem },
  setup() {
    const store = useStore();
    const tasks: Ref<Array<Task>> = computed(() => store.state.tasks);

    const inputText: Ref<String> = ref('')

    const countId = ref(0)
    const addItem = () => {
      inputText.value !== ''
        ? store.commit('addItem', {
            id: countId.value++,
            value: inputText.value
          })
        : alert('Write a task!!')
      inputText.value = ''
    }

    const deleteItem = (idItemToDelete) => store.commit('deleteItem', idItemToDelete);
    const deleteAllItems = () => store.commit('deleteAllItems');
    const duplicateItem = (itemToDuplicate) => store.commit('addItem', {id: countId.value++, value: itemToDuplicate.value})

    return {
      addItem,
      inputText,
      tasks,
      deleteItem,
      deleteAllItems,
      duplicateItem
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: black solid 2px;
    padding: 2rem;
  }
  &__addItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__input--text {
    height: 3rem;
    width: 20rem;
    margin-right: 1rem;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;
    max-height: 20rem;
    padding: 2rem;
  }
}
</style>
