import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";


const styles = {
  ul: {
    listStyle: 'none',
    margin: '25px auto',
    padding: 0,
    width: '400px'
  }
}

function TodoList(props) {

  return (
      <ul style={styles.ul}>
        {props.todos.map((todo, index) => {
          return <TodoItem
              todo={todo}
              index={index}
              key={todo.id}
              onChange={props.toggleChange}
          />
        })}
        {}
      </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleChange: PropTypes.func.isRequired,
}

export default TodoList