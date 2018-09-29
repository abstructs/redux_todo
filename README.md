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

Reducers allow us to 