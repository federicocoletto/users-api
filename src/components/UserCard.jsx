import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { deleteUserThunk, updateUserThunk } from '../store/slices/users.slice';
import { useState } from 'react';

const UserCard = ({ userInfo }) => {
    const { handleSubmit, register, reset } = useForm()
    const [updateUserState, setUpdateUserState] = useState(false);
    const [deleteUserState, setDeleteUserState] = useState(false);

    const dispatch = useDispatch()

    const handleClickUpdate = () => {
        console.log(userInfo)
        setUpdateUserState(true)
        reset({
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
            email: userInfo.email,
            password: userInfo.password,
            birthday: userInfo.birthday,
        })
    }

    const submitUpdate = (formData) => {
        dispatch(updateUserThunk(userInfo.id, formData))
    }

    return (
        <div className="user__card">
            <div className="card__header">
                <h1 className="card__title">{userInfo.first_name} {userInfo.last_name}</h1>
            </div>
            <main className="card__body">
                <div className="card__email">
                    <h2 className="card__body-h2">Email</h2>
                    <span className="card__body-span">{userInfo.email}</span>
                </div>
                <div className="card__birthday">
                    <h2 className="card__body-h2">Birthday</h2>
                    <span className="card__body-span">{userInfo.birthday}</span>
                </div>
            </main>
            <footer className="card__buttons">
                <button className="card__button delete" onClick={() => setDeleteUserState(true)}>Delete</button>
                <button className="card__button update" onClick={handleClickUpdate}>Update</button>
            </footer>
            {
                deleteUserState === true
                    ? (
                        <div className="delete__module">
                            <p className="delete__module-p">{`Delete '${userInfo.first_name} ${userInfo.last_name}' register?`}</p>
                            <div className="delete__module-buttons">
                                <button className="delete__module-button" onClick={() => {
                                    dispatch(deleteUserThunk(userInfo.id))
                                    setDeleteUserState(false)
                                }}>
                                    Accept
                                </button>
                                <button className="delete__module-button" onClick={() => setDeleteUserState(false)}>Cancel</button>
                            </div>
                        </div>
                    )
                    : ''
            }
            {
                updateUserState === true
                    ?
                    (
                        <form className="form update__form" onSubmit={handleSubmit(submitUpdate)}>
                            <div className="form__entry update">
                                <label htmlFor="first-name" className="form__label">First name</label>
                                <input type="text" className="form__input" {...register("first_name")} />
                            </div>
                            <div className="form__entry update">
                                <label htmlFor="last-name" className="form__label">Last name</label>
                                <input type="text" className="form__input" {...register("last_name")} />
                            </div>
                            <div className="form__entry update">
                                <label htmlFor="email" className="form__label">Email</label>
                                <input type="email" className="form__input" {...register("email")} />
                            </div>
                            <div className="form__entry update">
                                <label htmlFor="password" className="form__label">Password</label>
                                <input type="password" className="form__input" {...register("password")} />
                            </div>
                            <div className="form__entry update">
                                <label htmlFor="birthday" className="form__label">Birthday</label>
                                <input type="date" className="form__input" {...register("birthday")} />
                            </div>
                            <div className="form__buttons update">
                                <button>Accept</button>
                                <button onClick={() => setUpdateUserState(false)}>Cancel</button>
                            </div>
                        </form>
                    )
                    : ""
            }
        </div>
    )
};

UserCard.propTypes = {
    userInfo: PropTypes.array.isRequired,
};

export default UserCard;



// import { useState } from "react"
// import '../styles/UserCard.css'

// /* eslint-disable react/prop-types */
// const UserCard = ({ user, deleteUser, setUpdateInfoUser, setAñadirUsuario }) => {

//     const [deleteUserModule, setDeleteUserModule] = useState(false)

//     const handleClickDelete = () => {
//         setDeleteUserModule(!deleteUserModule)
//     }

//     const handleClickEdit = () => {
//         setUpdateInfoUser(user)
//         setAñadirUsuario(true)
//     }

//     return (
//         <div className={`user-card ${deleteUserModule && 'dark-bg'}`} >
//             <header className="card-header">
//                 <button title="Eliminar usuario" onClick={handleClickDelete}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z"/></svg></button>
//                 <h2 className="card-title">{`${user.first_name} ${user.last_name}`}</h2>
//                 <button title="Modificar usuario" onClick={handleClickEdit}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg></button>
//             </header>
//             <div className="body-card">
//                 <h5>CORREO</h5>
//                 <h6>{user.email}</h6>
//                 <h5>CUMPLEAÑOS</h5>
//                 <h6>{user.birthday}</h6>
//             </div>

//             <div className={`deleteUser-bg ${deleteUserModule && 'show'}`}>
//                 <div className={`deleteUser-container ${deleteUserModule && 'show'}`}>
//                     <h2 className="deleteUser-msg">Eliminar a {user.first_name} de forma permanente</h2>
//                     <div className="deleteUser-btns">
//                         <button
//                             title="Eliminar usuario"
//                             onClick={() => {
//                                 setDeleteUserModule(false)
//                                 deleteUser(user.id);
//                             }}>Aceptar</button>
//                         <button
//                             title="Cancelar"
//                             onClick={() => {
//                                 setDeleteUserModule(false)
//                             }}>Cancelar</button>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default UserCard