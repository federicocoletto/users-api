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
		<div className="form__container">
			<form className={`form__box ${updateInfoUser ? 'update' : 'login'}`} onSubmit={handleSubmit(submit)} >
				<h1 className={`update__msg ${updateInfoUser ? '' : 'hide'}`} >
					{`¿${updateInfoUser?.first_name.split(' ')[0]}, segure quieres modificar tus datos?`}
				</h1>
				<div className='form__item'>
					<label htmlFor="first_name" className="form__item-label">First name</label>
					<input
						{...register('first_name')}
						id="first_name"
						type="text"
						className="form__item-input"
					/>
				</div>
				<div className='form__item'>
					<label htmlFor="last_name" className="form__item-label">Last name</label>
					<input
						{...register('last_name')}
						id="last_name"
						type="text"
						className="form__item-input"
					/>
				</div>
				<div className='form__item'>
					<label htmlFor="email" className="form__item-label">Email</label>
					<input
						{...register('email')}
						id="email"
						type="text"
						className="form__item-input"
					/>
				</div>
				<div className='form__item'>
					<label htmlFor="password" className="form__item-label">Password</label>
					<input
						{...register('password')}
						id="password"
						type="password"
						className="form__item-input"
					/>
				</div>
				<div className='form__item'>
					<label htmlFor="birthday" className="form__item-label">Birthday</label>
					<input
						{...register('birthday')}
						id="birthday"
						type="date"
						className="form__item-input"
					/>
				</div>
				<div className="form__buttons">
					<button
						className="login-update__button"
					>{updateInfoUser ? 'Guardar cambios' : 'Log In'}</button>
					<button
						className="login-cancel__button"
						onClick={() => {
							setAñadirUsuario(false)
							setUpdateInfoUser(null)
						}}
					>{updateInfoUser ? 'Cancelar' : 'Ver usuarios'}</button>
				</div>
			</form>
		</div>
	)
}

export default UserForm