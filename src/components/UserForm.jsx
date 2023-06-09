/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const UserForm = ({createUser, updateUser, updateInfoUser, setUpdateInfoUser, setAñadirUsuario}) => {

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
        <form onSubmit={handleSubmit(submit)}>
            <h1>{updateInfoUser ? `¿${updateInfoUser?.first_name.split(' ')[0]}, segure quieres modificar tus datos?` : 'Bienvenido'}</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    {...register('email')}
                    id="email"
                    type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    {...register('password')}
                    id="password"
                    type="password" />
            </div>
            <div>
                <label htmlFor="first_name">First name</label>
                <input
                    {...register('first_name')}
                    id="first_name"
                    type="text" />
            </div>
            <div>
                <label htmlFor="last_name">Last name</label>
                <input
                    {...register('last_name')}
                    id="last_name"
                    type="text" />
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input
                    {...register('birthday')}
                    id="birthday"
                    type="date" />
            </div>
            <button>{updateInfoUser ? 'Guardar cambios' : 'Registrarse'}</button>
        </form>
    )
}

export default UserForm