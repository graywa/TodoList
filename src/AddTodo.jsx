import React, {useState} from 'react'
import PropTypes from 'prop-types'


function useInputValue (defaultValue='') {

  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value

  }
}

function AddTodo({onCreate}) {

  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()
    if(input.value().trim()) {
      onCreate(input.value())
    }
    input.clear()
  }

  return (
    <form onSubmit={submitHandler} >
      <input
          style={{width: '250px', padding: '0.2rem', margin: '0.3rem'}}
          {...input.bind}
          />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo