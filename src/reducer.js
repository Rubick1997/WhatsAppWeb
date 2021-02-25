export const initialState = {
	//how the data actually looks in the beginning
	user: null,
};

export const actionTypes = {
	SET_USER: "SET_USER",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
