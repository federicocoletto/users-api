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
			className={updateInfoUser ? 'update-form' : 'form__login'}
			onSubmit={handleSubmit(submit)}>
			<h1 className={updateInfoUser ? 'warning-msg_form' : 'form__header-h1'}>{`¿${updateInfoUser?.first_name.split(' ')[0]}, segure quieres modificar tus datos?`}</h1>
			<div className='form__input'>
				<label htmlFor="first_name" className="input__label">First name</label>
				<input
					{...register('first_name')}
					id="first_name"
					type="text"
					className="input__input"
					/>
			</div>
			<div className='form__input'>
				<label htmlFor="last_name" className="input__label">Last name</label>
				<input
					{...register('last_name')}
					id="last_name"
					type="text"
					className="input__input"
					/>
			</div>
			<div className='form__input'>
				<label htmlFor="email" className="input__label">Email</label>
				<input
					{...register('email')}
					id="email"
					type="text"
					className="input__input"
					/>
			</div>
			<div className='form__input'>
				<label htmlFor="password" className="input__label">Password</label>
				<input
					{...register('password')}
					id="password"
					type="password"
					className="input__input"
					/>
			</div>
			<div className='form__input'>
				<label htmlFor="birthday" className="input__label">Birthday</label>
				<input
					{...register('birthday')}
					id="birthday"
					type="date"
					className="input__input"
					/>
			</div>
			<div className="form__buttons">
				<button
					className="login__button"
					onClick={() => {
						setAñadirUsuario(false)
						setUpdateInfoUser(null)
					}}
				>{updateInfoUser ? 'Cancelar' : 'Ver usuarios'}</button>
				<button
					className="login__button"
				>{updateInfoUser ? 'Guardar cambios' : 'Registrarse'}</button>
			</div>
		</form>
	)
}

export default UserForm