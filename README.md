## Redux tutorial
I'll also write some notes and update them as I understand redux a bit better.

## Actions
Actions are an object that have a type and some user defined data that get dispatched to the store. 

They tell us **what happened**, but don't exactly tell us how to change the state, that's the job of reducers which are covered next. 

Example: we can create an "ADD_TODO" type, associate some text with it and dispatch it.

```
// Action Types are defined

export const ADD_TODO = 'ADD_TODO';


// Actions are created

{
  type: ADD_TODO,
  text: 'Some text that represents the todo'
}

// We can use functions to create actions

export function addTodo(text) {
  { type: ADD_TODO, text }
}
```

## Reducers
Actions told us what actions happened in our application but didn't tell us how we should change the state.

Reducers are pure functions that take in a state and return a new state.

Using reducers we can create the functionality in our app that reacts to dispatched actions.

```
// Some initial state
const initialState = {
  VisibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

// A reducer that updates the visibility filter
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      }
    default:
      return state
  }
}
```

### Reducer Composition

It's a common design pattern to write reducers that handle each part of the state.

```
// initial state

const initialState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  todos: []
}
```

Given this initial state we write a reducer that handles **todos** and a reducer that handles **VisibilityFilters**. 

```
function todos(state = [], action) { ... }
function visibilityFilter(state = SHOW_ALL, action) { ... }
```

These functions take in **todos** and **visiblityFilter** respectively. The cases where the state passed in is undefined is handled by the default parameter.

We can create a file to handle these reducers and create an object using **combineReducers** to package together our reducers.

```
// reducers.js

const todoApp = combineReducers({
  todos, 
  visiblityFilter
})
```

## Store
The store brings our actions and reducers together.

It holds the state, gives access to the state, allows the state to be updated, and adds and removes listeners.

In a redux app you'll only have one store.

To create a store we import the result of our ```combineReducers()``` call from the previous section and pass it to ```createStore()```.

```

import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp)

store.getState() // outputs: { todos: [], visibiltyFilter: SHOW_ALL }

store.dispatch(addTodo("Start a project")); // dispatches "ADD_TODO" with data

store.getState() // outsput: { todos: [{ text: "Start a project", completed: false }], visibiltyFilter: SHOW_ALL }
```

You can also add a listener to the store that gets called when the store is updated.

``` 
const unsubscribe = store.listener(() => {
  console.log(store.getState()) // logs the state everytime the store is updated
})
```

The ```store.listener()``` function returns a method to unregister a listener when called.

To stop listening to changes that occur to the store just call the unsubscribe method.

```unsubscribe()```