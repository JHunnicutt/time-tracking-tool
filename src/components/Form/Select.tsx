type SelectProps = {
    weekNum: string;
}

const Select = () => {
    const weeks = []
    for (let i = 1; i <= 52; i++) {
        weeks.push(i)
    }
    console.log(Date())
    return (
        <>
            <label htmlFor="weekNum"></label>
            <select id='weekNum'>
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