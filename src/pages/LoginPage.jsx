/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserThunk } from "../store/slices/users.slice";
import '../styles/LoginPage.css'

const LoginPage = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { handleSubmit, register, reset } = useForm()

	const submit = (data) => {
		dispatch(createUserThunk(data))
		reset({
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			birthday: "",
		})
	}

	return (
		<div className="login page">
			<form className="form login__form" onSubmit={handleSubmit(submit)}>
				<div className="form__entry login">
					<label htmlFor="first-name" className="form__label">First name</label>
					<input type="text" className="form__input" {...register("first_name")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="last-name" className="form__label">Last name</label>
					<input type="text" className="form__input" {...register("last_name")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="email" className="form__label">Email</label>
					<input type="email" className="form__input" {...register("email")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="password" className="form__label">Password</label>
					<input type="password" className="form__input" {...register("password")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="birthday" className="form__label">Birthday</label>
					<input type="date" className="form__input" {...register("birthday")} />
				</div>
				<div className="form__buttons login">
					<button>Register</button>
					<button onClick={() => {navigate("/users")}}>Users</button>
				</div>
			</form>
		</div>
	)
};

export default LoginPage;
