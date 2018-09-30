import assert from 'assert'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'
import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Some badly formatted tests, just for sanity and getting a feel for redux testing

store.dispatch(addTodo('Learn about actions'))
assert(store.getState().todos.length == 1, "Add todo should add a todo")

store.dispatch(addTodo('Learn about reducers'))
assert(store.getState().todos.length == 2, "Add todo should add a todo")

store.dispatch(addTodo('Learn about store'))
assert(store.getState().todos.length == 3, "Add todo should add a todo")

store.dispatch(toggleTodo(0))
assert(store.getState().todos[0].completed == true, "Toggle todo should toggle completed");

store.dispatch(toggleTodo(1))

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
assert.equal(store.getState().visibilityFilter, VisibilityFilters.SHOW_COMPLETED, "Setting visibility filter should set visibility filter");

unsubscribe()
