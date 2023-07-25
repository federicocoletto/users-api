import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersSlice = createSlice({
	name: "users",
	initialState: [],
	reducers: {
		setUsersG: (state, action) => action.payload,
		createUserG: (state, action) => [...state, action.payload],
		deleteUserG: (state, action) => {
			return state.filter((userInfo) => userInfo.id !== action.payload);
		},
		updateUserG: (state, action) => {
			return state.map((userInfo) => {
				if (userInfo.id === action.payload.id) {
					return action.payload;
				} else {
					return userInfo;
				}
			});
		},
	},
});

export const { setUsersG, createUserG, deleteUserG, updateUserG } =
	usersSlice.actions;

export default usersSlice.reducer;

// ? thunks
const baseURL = "https://users-crud-fc.onrender.com/api/v1/users";

export const getAllUsersThunk = () => (dispatch) => {
	const url = baseURL;
	axios
		.get(url)
		.then((res) => dispatch(setUsersG(res.data)))
		.catch((err) => console.log(err));
};

export const createUserThunk = (newUserData) => (dispatch) => {
	const url = baseURL;
	axios
		.post(url, newUserData)
		.then((res) => dispatch(createUserG(res.data)))
		.catch((err) => console.log(err));
};

export const deleteUserThunk = (userId) => (dispatch) => {
	const url = `${baseURL}/${userId}`;
	axios
		.delete(url, userId)
		.then(() => dispatch(deleteUserG(userId)))
		.catch((err) => console.log(err));
};

export const updateUserThunk = (userId, userInfo) => (dispatch) => {
	const url = `${baseURL}/${userId}`;
	axios
		.put(url, userInfo)
		.then(() => dispatch(updateUserG(userInfo)))
		.catch((err) => console.log(err));
};
