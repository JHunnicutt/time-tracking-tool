import React from "react"
import Select from "./Select"


type FormProps = {
    formData: { name: string }
    handleSubmit: (event: React.FormEvent) => void
    handleTextInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSelectInput: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Form = (props: FormProps) => {

    return (
        <form onSubmit={(e) => { props.handleSubmit(e) }}>
            <Select handleChange={props.handleSelectInput}/>
            <input type='text' placeholder="Name" onChange={(e) => props.handleTextInput(e)} />
            <input type='text' placeholder="R&D Hours" onChange={(e) => props.handleTextInput(e)} />
            <input type='text' placeholder="Total Hours" onChange={(e) => props.handleTextInput(e)} />
            <input type='text' placeholder="Tasks" onChange={(e) => props.handleTextInput(e)} />
            <button>Submit</button>
        </form>
    )
}

export default Form