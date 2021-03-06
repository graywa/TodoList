import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../Context"


const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #999',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    margin: '0.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({todo, index, onChange}) {

  const {removeTodo} = useContext(Context)

  const classes = []

  if (todo.completed) {
    classes.push('done')
  }

  return (
      <li style={styles.li}>
        <span className={classes.join('')}>
          <input
              checked={todo.completed}
              type="checkbox"
              style={styles.input}
              onChange={() => onChange(todo.id)}/>
          <strong>{++index}</strong>
          {' '}
          {todo.title}
        </span>
        <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
      </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem