import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'

function App() {

  const [dataObj, setDataObj] = useState({
    name: '',
    rdHours: '',
    totalHours: '',
    tasks: ''
})

const changeHandler = (data) => {
  setDataObj(data)
}

console.log(dataObj)

  return (
    <div className="App">
      <h1>React Time Tracking Tool</h1>
      <Form
        formData={dataObj}
        handleChange={changeHandler}
      />
      <div>Name: {dataObj.name}</div>
    </div>
  )
}

export default App
