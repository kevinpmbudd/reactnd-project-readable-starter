export const UP = 'UP'
export const DOWN = 'DOWN'

export function increment (value) {
	return {
		type: UP,
		increment: value
	}
}

export function decrement (value) {
	return {
		type: DOWN,
		decrement: value
	}
}