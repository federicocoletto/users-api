import { useState } from "react"
import '../styles/UserCard.css'

/* eslint-disable react/prop-types */
const UserCard = ({ user, deleteUser, setUpdateInfoUser, setAñadirUsuario }) => {

    const [deleteUserModule, setDeleteUserModule] = useState(false)

    const handleClickDelete = () => {

        setDeleteUserModule(!deleteUserModule)
    }

    const handleClickEdit = () => {
        setUpdateInfoUser(user)
        setAñadirUsuario(true)
    }

    return (
        <div className="user-card">
            <h1>{`${user.first_name} ${user.last_name}`}</h1>
            <div className="body-card">
                <h4>CORREO</h4>
                <h6>{user.email}</h6>
                <h4>CUMPLEAÑOS</h4>
                <h6>{user.birthday}</h6>
            </div>
            <div className="buttons">
                <button onClick={handleClickDelete}>Eliminar</button>
                <button onClick={handleClickEdit}>Editar</button>
            </div>
            <div className={`deleteUser-msg ${deleteUserModule ? 'show' : 'hide'}`}>
                <div className={deleteUser} >
                    <h2>Eliminar a {user.first_name} de forma permanente</h2>
                    <div className="ok-cancel_btns">
                        <button
                            onClick={() => {
                                setDeleteUserModule(false)
                                deleteUser(user.id);
                            }}>Aceptar</button>
                        <button
                            onClick={() => {
                                setDeleteUserModule(false)
                            }}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserCard