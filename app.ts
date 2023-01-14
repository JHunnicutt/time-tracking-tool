const week = <HTMLInputElement>document.getElementById('week-select');
const personName = <HTMLInputElement>document.getElementById('name');
const researchHours = <HTMLInputElement>document.getElementById('researchHours');
const totalHours = <HTMLInputElement>document.getElementById('totalHours');
const tasks = <HTMLInputElement>document.getElementById('tasks');
const form = <HTMLInputElement>document.getElementById('main-form')
const formSubmit = <HTMLInputElement>document.getElementById('formSubmit');
const tableList = <HTMLInputElement>document.getElementById('table-list');

form?.addEventListener('submit', (e) => {
    e.preventDefault()
    let enteredWeek = week.value
    let enteredName = personName.value
    let enteredResearchHours = researchHours.value
    let enteredTotalHours = totalHours.value
    let enteredTasks = tasks.value
    
    let item = document.createElement('li')
    let table = document.createElement('table')
    let headingRow = document.createElement('tr')
    let tableRow = document.createElement('tr')
    let weekCell = document.createElement('td')
    let nameCell = document.createElement('td')
    let researchHoursCell = document.createElement('td')
    let totalHoursCell = document.createElement('td')
    let tasksCell = document.createElement('td')

    let weekHeading = document.createElement('th')
    let nameHeading = document.createElement('th')
    let researchHoursHeading = document.createElement('th')
    let totalHoursHeading = document.createElement('th')
    let tasksHeading = document.createElement('th')

    weekHeading.textContent = 'Week'
    nameHeading.textContent = 'Name'
    researchHoursHeading.textContent = 'Research Hours'
    totalHoursHeading.textContent = 'Total Hours'
    tasksHeading.textContent = 'Tasks'

    weekCell.textContent = enteredWeek
    nameCell.textContent = enteredName
    researchHoursCell.textContent = enteredResearchHours
    totalHoursCell.textContent = enteredTotalHours
    tasksCell.textContent = enteredTasks

    headingRow.appendChild(weekHeading)
    headingRow.appendChild(nameHeading)
    headingRow.appendChild(researchHoursHeading)
    headingRow.appendChild(totalHoursHeading)
    headingRow.appendChild(tasksHeading)

    tableRow.appendChild(weekCell)
    tableRow.appendChild(nameCell)
    tableRow.appendChild(researchHoursCell)
    tableRow.appendChild(totalHoursCell)
    tableRow.appendChild(tasksCell)

    table.appendChild(headingRow)
    table.appendChild(tableRow)

    item.appendChild(table)

    tableList.appendChild(item)

    week.value = ''
    personName.value = ''
    researchHours.value = ''
    totalHours.value = ''
    tasks.value = ''
})
