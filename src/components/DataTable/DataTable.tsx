import timeToDecimal from '../../utils/timeToDecimal'
import './DataTable.css'

type DataTableProps = {
    tableData: { week: string, name: string, rdHours: string, totalHours: string, tasks: string }
}

const DataTable = (props: DataTableProps) => {

    const processedRD = timeToDecimal(props.tableData.rdHours)
    const processedTotal = timeToDecimal(props.tableData.totalHours)
    const rdPercentage = (processedRD/processedTotal) * 100

    return (
        <table>
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Heading</th>
                    <th>R&D Hours</th>
                    <th>Total Hours</th>
                    <th>R&D Percentage</th>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.tableData.week}</td>
                    <td>{props.tableData.name}</td>
                    <td>{processedRD}</td>
                    <td>{processedTotal}</td>
                    <td>{rdPercentage.toFixed(2)}%</td>
                    <td>{props.tableData.tasks}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default DataTable