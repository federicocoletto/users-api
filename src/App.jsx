/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserForm from './components/UserForm'
import UserCard from './components/UserCard'

function App() {

	const base_URL = 'https://users-crud.academlo.tech/'
	const users_path = 'users/'

	const [users, getUser, createUser, deleteUser, updateUser] = useFetch(base_URL, users_path)
	const [updateInfoUser, setUpdateInfoUser] = useState()
	const [añadirUsuario, setAñadirUsuario] = useState(true)
	const [register, setRegister] = useState(false)

	useEffect(() => {
		getUser()
	}, [])

	const handleClickFirstReg = () => {
		setRegister(true)
	}

	return (
		<>
			{
				register !== true
					?
					<div className='welcomePage'>
						<h1 className='firstTitle'>Bienvenido</h1>
						<button onClick={handleClickFirstReg}>Registrarse</button>
					</div>
					: (
						añadirUsuario
							?
							<>
								<UserForm
									createUser={createUser}
									updateUser={updateUser}
									updateInfoUser={updateInfoUser}
									setUpdateInfoUser={setUpdateInfoUser}
									setAñadirUsuario={setAñadirUsuario}
								/>
								<button
									onClick={() => {
										setAñadirUsuario(!añadirUsuario)
										setUpdateInfoUser(null)
									}}>{updateInfoUser ? 'Cancelar' : 'Ver usuarios'}</button>
							</>
							:
							<>

								<div className='header-users'>
									<h1>Usuarios</h1>
									<button onClick={() => setAñadirUsuario(!añadirUsuario)}>Crear usuario</button>
								</div>
								<div className='users-container'>
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

							</>
					)
			}
		</>
	)
}

export default App
