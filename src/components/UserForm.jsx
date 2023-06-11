/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import '../styles/UserForm.css'

const UserForm = ({
	createUser,
	updateUser,
	updateInfoUser,
	setUpdateInfoUser,
	añadirUsuario,
	setAñadirUsuario }) => {

	const { handleSubmit, register, reset } = useForm()

	useEffect(() => {
		reset(updateInfoUser)
	}, [updateInfoUser])


	const submit = (data) => {
		if (updateInfoUser) {
			updateUser(data.id, data)
			setUpdateInfoUser(null)
			setAñadirUsuario(false)
		} else {
			createUser(data)
		}

		reset({
			email: '',
			password: '',
			first_name: '',
			last_name: '',
			birthday: '',
		})
	}

	return (
		<form
			className={updateInfoUser ? 'update-form' : 'welcome-form'}
			id="user-form"
			onSubmit={handleSubmit(submit)}>
			<div className="form-header">
				<h1 className={updateInfoUser ? 'warning-msg_form' : 'welcome-msg_form'}>{updateInfoUser ? `¿${updateInfoUser?.first_name.split(' ')[0]}, segure quieres modificar tus datos?` : 'Bienvenido'}</h1>
			</div>
			<div className='form-input'>
				<label htmlFor="email">Email</label>
				<input
					{...register('email')}
					id="email"
					type="text"
					placeholder="email" />
			</div>
			<div className='form-input'>
				<label htmlFor="password">Password</label>
				<input
					{...register('password')}
					id="password"
					type="password"
					placeholder="password" />
			</div>
			<div className='form-input'>
				<label htmlFor="first_name">First name</label>
				<input
					{...register('first_name')}
					id="first_name"
					type="text"
					placeholder="firstname" />
			</div>
			<div className='form-input'>
				<label htmlFor="last_name">Last name</label>
				<input
					{...register('last_name')}
					id="last_name"
					type="text"
					placeholder="last name" />
			</div>
			<div className='form-input'>
				<label htmlFor="birthday">Birthday</label>
				<input
					{...register('birthday')}
					id="birthday"
					type="date"
					placeholder="birthday" />
			</div>
			<div className="form-btns">
				<button
					className="cancel-see_btn"
					onClick={() => {
						setAñadirUsuario(false)
						setUpdateInfoUser(null)
					}}
				>{updateInfoUser ? 'Cancelar' : 'Ver usuarios'}</button>
				<button
					className="update-register_btn"
				>{updateInfoUser ? 'Guardar cambios' : 'Registrarse'}</button>
			</div>
		</form>
	)
}

export default UserForm