import { useState } from "react"
import { useReducer } from "react"
import Select from "./Select"

import dataReducer from "./dataReducer"
import timeToDecimal from "./timeToDecimal"

// type FormType = {
//     handleChange: (d:string) => void
// }

// type dataTemplate = {
//     name: string,
//     rdHours: string,
//     totalHours: string,
//     tasks: string,
// }



const Form = (props) => {
    // const [data, setData] = useState(props.formData)
    const [data, dispatch] = useReducer(dataReducer, props.formData)

    const changeWeek = (week) => {
        dispatch({
            field: 'week',
            week: week.target.value
        })
    }

    const changeName = (name) => {
        dispatch({
            field: 'name',
            name: name
        })
    }

    const changeRDHours = (hours) => {
        dispatch({
            field: 'rdHours',
            rdHours: hours
        })
    }

    const changeTotalHours = (hours) => {
        dispatch({
            field: 'totalHours',
            totalHours: hours
        })
    }

    const changeTasks = (task) => {
        dispatch({
            field: 'tasks',
            tasks: task
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = data
        newData.rdHours = timeToDecimal(data.rdHours)
        newData.totalHours = timeToDecimal(data.totalHours)
        props.handleChange(newData)
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <Select handleSelect={changeWeek} />
            <input type='text' placeholder="Name" onChange={e => {changeName(e.target.value)}} />
            <input type='text' placeholder="R&D Hours" onChange={e => {changeRDHours(e.target.value)}} />
            <input type='text' placeholder="Total Hours" onChange={e => {changeTotalHours(e.target.value)}} />
            <input type='text' placeholder="Tasks" onChange={e => {changeTasks(e.target.value)}} />
            <button>Submit</button>
        </form>
    )
}

export default Form