import './DataTable.css'

type DataTableProps = {
    tableData: { name: string}
}

const DataTable = (props: DataTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Heading</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.tableData.name}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default DataTable