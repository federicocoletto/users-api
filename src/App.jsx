/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
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


	// const [updateInfoUser, setUpdateInfoUser] = useState()
	// const [añadirUsuario, setAñadirUsuario] = useState(true)

	



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

{/* {
				register !== true
					? // ¿ WELCOME PAGE
					<WelcomePage setRegister={setRegister} getUserById={getUserById} />
					:
					añadirUsuario
						? // ¿ FORM PAGE
						<UserForm
							createUser={createUser}
							updateUser={updateUser}
							updateInfoUser={updateInfoUser}
							setUpdateInfoUser={setUpdateInfoUser}
							setAñadirUsuario={setAñadirUsuario} />
						: // ¿ USERS PAGE
						<div className="page users">
							<div className='users-page_header'>
								<h1>USERS</h1>
								<button onClick={() => setAñadirUsuario(true)}>Register new user</button>
							</div>
							<div className='users-page_container'>
								{
									users?.map(user => (
										<UserCard
											key={user.id}
											user={user}
											deleteUser={deleteUser}
											setUpdateInfoUser={setUpdateInfoUser}
											setAñadirUsuario={setAñadirUsuario}
										/>
									))
								}
							</div>
						</div>
			} */}