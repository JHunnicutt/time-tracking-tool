export default function dataReducer(state, action) {
    switch (action.field) {
        case 'week' : {
            return {
                ...state,
                week: action.week
            }
        }
        case 'name' : {
            return {
                ...state,
                name: action.name
            }
        }
        case 'rdHours' : {
            return {
                ...state,
                rdHours: action.rdHours
            }
        }
        case 'totalHours' : {
            return {
                ...state,
                totalHours: action.totalHours
            }
        }
        case 'tasks' : {
            return {
                ...state,
                tasks: action.tasks
            }
        }
    }
}