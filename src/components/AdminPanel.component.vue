<template>
  <div class="admin-panel">
    Admin panel
    <div class="admin-panel__button admin-panel__button--completed" @click="removeCompleted">Remove completed</div>
    <div class="admin-panel__button admin-panel__button--duplicated" @click="removeDuplicated">Remove duplicated</div>
    <div class="admin-panel__button admin-panel__button--both" @click="doBoth">Do both</div>
    <div class="list__footer">
      <span>% of tasks completed = {{ percentageOfCheckedTask }} %</span>
    </div>
  </div>
</template>

<script lang="ts">
 import { useStore } from "vuex";
 import {computed} from "vue";

 export default {
   name: 'AdminPanel',
   setup() {
     const store = useStore();

     return {
       removeCompleted:  () => store.dispatch('removeCompleted'),
       removeDuplicated:  () => store.dispatch('removeDuplicated'),
       doBoth:  () => store.dispatch('doBoth'),
       percentageOfCheckedTask: computed(() => store.getters.percentageOfCheckedTask)
     }
   }
 }
</script>

<style lang="scss" scoped>
.admin-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 15rem;
  height: 100%;
  padding: 2rem;
  background-color: white;
  border-left: 1px solid black;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  &__button {
    display: flex;
    padding: 0.4rem 1rem;
    margin: 1rem 0;
    border-radius: 1rem;
    cursor: pointer;
    &--completed {
      background-color: #fdcb5b;
    }
    &--duplicated {
      background-color: #e67962;
    }
    &--both {
      background-color: #53b9c9;
    }
  }
}
</style>