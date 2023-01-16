import React, { SetStateAction } from "react"

type FormProps = {
    formData: { name: string }
    handleSubmit: (event: React.FormEvent) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Form = (props: FormProps) => {



    return (
        <form onSubmit={(e) => { props.handleSubmit(e) }}>
            <input type='text' placeholder="Name" onChange={(e) => props.handleChange(e)} />
            <button>Submit</button>
        </form>
    )
}

export default Form