import './DataTable.css'

type DataTableProps = {
    tableData: { week: string, name: string, rdHours: string, totalHours: string, tasks: string }
}

const DataTable = (props: DataTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Heading</th>
                    <th>R&D Hours</th>
                    <th>Total Hours</th>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.tableData.week}</td>
                    <td>{props.tableData.name}</td>
                    <td>{props.tableData.rdHours}</td>
                    <td>{props.tableData.totalHours}</td>
                    <td>{props.tableData.tasks}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default DataTable