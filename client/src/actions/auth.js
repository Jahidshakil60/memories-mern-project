import * as api from "../api/index.js";

export const signIn = (formData, navigate) => async (dispatch) => {
	try {
		// log in the user
		const { data } = await api.signIn(formData);

		dispatch({ type: "AUTH", data });

		navigate("/");
	} catch (error) {
		console.log(error);
	}
};

export const signUp = (formData, navigate) => async (dispatch) => {
	try {
		// sign Up the user
		const { data } = await api.signUp(formData);

		dispatch({ type: "AUTH", data });

		navigate("/");
	} catch (error) {
		console.log(error);
	}
};
