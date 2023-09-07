import { HYDRATE } from 'next-redux-wrapper';

export const actionTypes = {
  INCREMENT: 'COUNT/INCREMENT',
  DECREMENT: 'COUNT/DECREMENT',
  RESET: 'COUNT/RESET',
}

const initialState = {
  count: 0,
}

function reducer(state: any = initialState, action: any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    default:
      return state
  }
}

export default reducer
