import React, { useState, useReducer } from 'react'
import Form from './components/Form/Form'
import DataTable from './components/DataTable/DataTable'
import './App.css'

import defaultFormData from './components/Form/defaultFormData'

type ACTIONTYPE = 
  | {type: 'name'; payload: string}
  | {type: 'rdHours'; payload: string}
  | {type: 'totalHours'; payload: string}
  | {type: 'tasks'; payload: string}

function reducer(state: typeof defaultFormData, action: ACTIONTYPE) {
  switch (action.type) {
    case 'name' : {
      return { ...state, name: action.payload }
    }
    case 'rdHours' : {
      return {...state, rdHours: action.payload}
    }
    case 'totalHours' : {
      return {...state, totalHours: action.payload}
    }
    case 'tasks' : {
      return {...state, tasks: action.payload}
    }
  }
}


function App() {

  // const [formData, setFormData] = useState(defaultFormData)
  const [state, dispatch] = useReducer(reducer, defaultFormData)
  const [tableDisplay, setTableDisplay] = useState(false)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    setTableDisplay(true)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <main>
      <h1>React Time Tracking Tool</h1>
      <Form
        formData={state}
        handleSubmit={(event) => submitHandler(event)}
        handleChange={(event) => changeHandler(event)}
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