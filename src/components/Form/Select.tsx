type SelectProps = {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (props: SelectProps) => {

    const weeks = []
    for (let i = 1; i <= 52; i++) {
        weeks.push(i)
    }

    return (
        <>
            <label htmlFor="weekNum">Week:</label>
            <select id='weekNum' onChange={(e) => props.handleChange(e)}>
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