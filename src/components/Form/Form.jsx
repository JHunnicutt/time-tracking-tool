import { useState } from "react"
import { useReducer } from "react"
import Select from "./Select"

// type FormType = {
//     handleChange: (d:string) => void
// }

// type dataTemplate = {
//     name: string,
//     rdHours: string,
//     totalHours: string,
//     tasks: string,
// }

function dataReducer(state, action) {
    switch (action.field) {
        case 'week' : {
            return {
                ...state,
                week: action.week
            }
        }
        case 'name' : {
            return {
                ...state,
                name: action.name
            }
        }
        case 'rdHours' : {
            return {
                ...state,
                rdHours: action.rdHours
            }
        }
        case 'totalHours' : {
            return {
                ...state,
                totalHours: action.totalHours
            }
        }
        case 'tasks' : {
            return {
                ...state,
                tasks: action.tasks
            }
        }
    }
}

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
        console.log(`data is: ${data}`)
        props.handleChange(data)
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