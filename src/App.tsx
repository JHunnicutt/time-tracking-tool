import React, { useState, useReducer } from 'react'
import Form from './components/Form/Form'
import DataTable from './components/DataTable/DataTable'
import './App.css'

import defaultFormData from './components/Form/dataModel'

type ACTIONTYPE = 
  | {type: 'name'; payload: string}

function reducer(state: typeof defaultFormData, action: ACTIONTYPE) {
  switch (action.type) {
    case 'name' : 
      return { name: action.payload }
  }
}


function App() {

  // const [formData, setFormData] = useState(defaultFormData)
  const [state, dispatch] = useReducer(reducer, defaultFormData)
  const [tableDisplay, setTableDisplay] = useState(false)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(state)
    setTableDisplay(true)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData({
    //   name: event.target.value
    // })
    dispatch({type: 'name', payload: event.target.value})
  }

  console.log(state)
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