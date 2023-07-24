/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'
import WelcomePage from './components/WelcomePage'

function App() {

	// const base_URL = 'https://users-crud.academlo.tech/'
	const base_URL = 'https://users-crud-fc.onrender.com/'
	const users_path = 'users/'

	const [users, getUser, createUser, deleteUser, updateUser] = useFetch(base_URL, users_path)
	const [updateInfoUser, setUpdateInfoUser] = useState()
	const [añadirUsuario, setAñadirUsuario] = useState(true)
	const [register, setRegister] = useState(false)

	useEffect(() => {
		getUser()
	}, [])



	return (
		<>
			{
				register !== true
					? // ¿ WELCOME PAGE
					<WelcomePage setRegister={setRegister} />
					:
					añadirUsuario
						? // ¿ FORM PAGE
						<div id='form-page'>
							<UserForm
								createUser={createUser}
								updateUser={updateUser}
								updateInfoUser={updateInfoUser}
								setUpdateInfoUser={setUpdateInfoUser}
								setAñadirUsuario={setAñadirUsuario} />

						</div>
						: // ¿ USERS PAGE
						<div id='users-page'>
							<div className='users-page_header'>
								<h1>Usuarios</h1>
								<button onClick={() => setAñadirUsuario(true)}>Crear usuario</button>
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
			}
		</>
	)
}

export default App
