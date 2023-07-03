import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tasks: []
        }
    },
    getters: {
        tasksLength: (state) => {
            return state.tasks.length;
        },
        percentageOfCheckedTask: (state) => {
            const taskCompleted = state.tasks.filter(task => task.checked).length;
            return state.tasks.length ? (taskCompleted / state.tasks.length)*100 : '0';
        }
    },
    mutations: {
        addItem: (state, task) => {
            state.tasks.push(task);
        },
        deleteItem: (state, idItemToDelete) => {
            state.tasks = state.tasks.filter((task) => task.id !== idItemToDelete)
        },
        deleteAllItems: (state) => {
            state.tasks = [];
        }
    },
    actions: {
        removeCompleted: (context) => {
            context.state.tasks.forEach(task => {
                if (task.checked) {
                    context.commit('deleteItem', task.id);
                }
            })
        },
        removeDuplicated: (context) => {
            context.state.tasks.reduce((accumulator, currentTask) => {
                const accumulatorContainsCurrentTask = accumulator.filter(task => task.value === currentTask.value).length;
                if (accumulatorContainsCurrentTask) {
                    context.commit('deleteItem', currentTask.id)
                }
                return [...accumulator, currentTask];
            }, [])
        },
        doBoth: (context) => {
            context.dispatch('removeCompleted').then(() => context.dispatch('removeDuplicated'));
        }
    }
})

const app = createApp(App)

app.use(store);
app.mount('#app');
