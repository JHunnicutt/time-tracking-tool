import React, { useState } from 'react'
import Form from './components/Form/Form'
import DataTable from './components/DataTable/DataTable'
import './App.css'

import defaultFormData from './components/Form/dataModel'

function App() {

  const [formData, setFormData] = useState(defaultFormData)
  const [tableDisplay, setTableDisplay] = useState(false)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    setTableDisplay(true)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      name: event.target.value
    })
  }


  return (
    <main>
      <h1>React Time Tracking Tool</h1>
      <Form
        formData={formData}
        handleSubmit={(event) => submitHandler(event)}
        handleChange={(event) => changeHandler(event)}
      />
      {
        tableDisplay ?
        <DataTable 
          tableData={formData}
        /> :
        null
      }
    </main>
  )
}

export default App