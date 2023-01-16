import React, { useState, useReducer } from 'react'
import Form from './components/Form/Form'
import DataTable from './components/DataTable/DataTable'
import './App.css'

import defaultFormData from './components/Form/defaultFormData'

import reducer from './utils/reducer'

function App() {

  const [state, dispatch] = useReducer(reducer, defaultFormData)
  const [tableDisplay, setTableDisplay] = useState(false)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    setTableDisplay(true)
  }

  const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'text') {
      switch (event.target.placeholder) {
        case 'Name' : {
          dispatch({type: 'name', payload: event.target.value})
          break;
        }
        case 'R&D Hours' : {
          dispatch({type: 'rdHours', payload: event.target.value})
          break;
        }
        case 'Total Hours' : {
          dispatch({type: 'totalHours', payload: event.target.value})
          break;
        }
        case 'Tasks' : {
          dispatch({type: 'tasks', payload: event.target.value})
        }
      }
    }
  }

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(typeof event.target.value)
    if (event.target.type === 'select-one') {
      dispatch({type: 'week', payload: event.target.value})
    }
  }

  return (
    <main>
      <h1>Time Tracking Tool</h1>
      <Form
        handleSubmit={(event) => submitHandler(event)}
        handleTextInput={(event) => textHandler(event)}
        handleSelectInput={(event) => selectHandler(event)}
      />
      {
        tableDisplay ?
        <DataTable 
          tableData={state}
        /> :
        null
      }
    </main>
  )
}

export default App