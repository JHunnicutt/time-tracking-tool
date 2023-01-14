import { useState } from "react"
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


const Form = (props) => {
    const [data, setData] = useState(props.formData)

    const changeWeek = (week) => {
        setData(prevData => {
            return {
                ...prevData,
                week: week.target.value
            }
        })
    }

    const changeName = (name) => {
        setData(prevData => {
            return {
                ...prevData,
                name: name
            }
        })
    }

    const changeRDHours = (hours) => {
        setData(prevData => {
            return {
                ...prevData,
                rdHours: hours
            }
        })
    }

    const changeTotalHours = (hours) => {
        setData(prevData => {
            return {
                ...prevData,
                totalHours: hours
            }
        })
    }

    const changeTasks = (task) => {
        setData(prevData => {
            return {
                ...prevData,
                tasks: task
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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