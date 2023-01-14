import Select from "./Select"

const Form = () => {
    return (
        <form>
            <Select />
            <input type='text' placeholder="Name"></input>
            <input type='text' placeholder="R&D Hours"></input>
            <input type='text' placeholder="Total Hours"></input>
            <input type='text' placeholder="Tasks"></input>
            <button>Submit</button>
        </form>
    )
}

export default Form