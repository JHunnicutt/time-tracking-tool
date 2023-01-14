import { useState } from "react"

// type SelectProps = {
//     weekNum: string;
// }

const Select = (props) => {
    const [selectedWeek, setSelectedWeek] = useState()

    const weeks = []
    for (let i = 1; i <= 52; i++) {
        weeks.push(i)
    }

    return (
        <>
            <label htmlFor="weekNum">Week:</label>
            <select id='weekNum' onChange={props.handleSelect}>
                {weeks.map((week) => {
                    return (
                        <option key={week} value={week}>{week}</option>
                        )
                    })}
            </select>
        </>
    )
}

export default Select