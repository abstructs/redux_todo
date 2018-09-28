## Redux tutorial
I'll also write some notes and update them as I understand redux a bit better.

## Actions
Actions are an object that have a type and some user defined data that get dispatched to the store. 

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

