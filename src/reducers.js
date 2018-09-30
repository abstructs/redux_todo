import { SET_VISIBILITY_FILTER, VisibilityFilters, TOGGLE_TODO, SHOW_ALL } from './actions'
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if(index == action.index) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }
    default:
      return state
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;