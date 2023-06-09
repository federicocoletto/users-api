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
	const [añadirUsuario, setAñadirUsuario] = useState(false)

	useEffect(() => {
		getUser()
	}, [])



	return (
		<>
			{
				añadirUsuario
					? (
						<>
							{
								<UserForm
									createUser={createUser}
									updateUser={updateUser}
									updateInfoUser={updateInfoUser}
									setUpdateInfoUser={setUpdateInfoUser}
									setAñadirUsuario={setAñadirUsuario}
								/>
							}
							<button onClick={() => setAñadirUsuario(!añadirUsuario)}>{updateInfoUser ? 'Cancelar' : 'Ver usuarios'}</button>
						</>
					)
					: (
						<>
							<h1>Usuarios</h1>
							<button onClick={() => setAñadirUsuario(!añadirUsuario)}>Crear usuario</button>
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
						</>
					)
			}
		</>
	)
}

export default App
