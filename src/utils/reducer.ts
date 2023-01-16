import defaultFormData from "../components/Form/defaultFormData"

type ACTIONTYPE = 
  | {type: 'week'; payload: string}
  | {type: 'name'; payload: string}
  | {type: 'rdHours'; payload: string}
  | {type: 'totalHours'; payload: string}
  | {type: 'tasks'; payload: string}

export default function reducer(state: typeof defaultFormData, action: ACTIONTYPE) {
  switch (action.type) {
    case 'week': {
      return {...state, week: action.payload}
    }
    case 'name' : {
      return {...state, name: action.payload}
    }
    case 'rdHours' : {
      return {...state, rdHours: action.payload}
    }
    case 'totalHours' : {
      return {...state, totalHours: action.payload}
    }
    case 'tasks' : {
      return {...state, tasks: action.payload}
    }
  }
}