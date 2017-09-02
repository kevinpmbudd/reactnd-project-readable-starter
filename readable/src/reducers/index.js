import { UP, DOWN } from '../actions'

const initialState = 0

function testReducer (state = initialState, action) {
	switch (action.type) {
		case UP :
			return state + action.increment
		case DOWN :
			return state - action.decrement
		default :
			return state
	}	
}

export default testReducer