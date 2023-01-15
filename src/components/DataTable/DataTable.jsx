const DataTable = ({ week, name, rdHours, totalHours, tasks} = props) => {
    const rdPercentage = (rdHours/totalHours) * 100
    return (
       <>
        <table>
            <thead>
                <tr>
                    <th>Week</th>    
                    <th>Name</th>    
                    <th>R&D Hours</th>    
                    <th>Total Hours</th>    
                    <th>R&D Percentage</th>    
                    <th>Tasks</th>    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{week}</td>
                    <td>{name}</td>
                    <td>{rdHours}</td>
                    <td>{totalHours}</td>
                    <td>{rdPercentage.toFixed(2)}%</td>
                    <td>{tasks}</td>
                </tr>
            </tbody>
        </table>
       </>
    )
    
}

export default DataTable