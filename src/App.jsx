/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UsersPage from './pages/UsersPage'
import { useDispatch } from 'react-redux'
import { getAllUsersThunk } from './store/slices/users.slice'

function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllUsersThunk())
	}, []);

	return (
		<div className="app">
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/users' element={<UsersPage />} />
			</Routes>
		</div>
	)
}

export default App
