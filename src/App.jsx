import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import DataTable from './components/DataTable/DataTable'

function App() {

  const [dataObj, setDataObj] = useState({
    week: '',
    name: '',
    rdHours: '',
    totalHours: '',
    tasks: ''
})

const [tableDisplay, setTableDisplay] = useState(false)

const changeHandler = (data) => {
  setTableDisplay(true)
  setDataObj(data)
}


  return (
    <div className="App">

      <h1>React Time Tracking Tool</h1>
      <Form
        formData={dataObj}
        handleChange={changeHandler}
      />
      {
        tableDisplay ? 
        <DataTable
          week={dataObj.week}
          name={dataObj.name}
          rdHours={dataObj.rdHours}
          totalHours={dataObj.totalHours}
          tasks={dataObj.tasks}
        /> : 
        null
      }
    </div>
  )
}

export default App
