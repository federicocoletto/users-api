/* eslint-disable react/prop-types */
const UserCard = ({ user, deleteUser, setUpdateInfoUser, setAñadirUsuario }) => {
    
    const handleClickDelete = () => {
        deleteUser(user.id)
    }

    const handleClickEdit = () => {
        setUpdateInfoUser(user)
        setAñadirUsuario(true)
    }
    
    return (
        <div className="user-card">
            <h1>{`#${user.id} ${user.first_name} ${user.last_name}`}</h1>
            <ul>
                <li><span>CORREO</span>{user.email}</li>
                <li><span>CUMPLEAÑOS</span>{user.birthday}</li>
            </ul>
            <div className="buttons">
                <button onClick={handleClickDelete}>Eliminar</button>
                <button onClick={handleClickEdit}>Editar</button>
            </div>
        </div>
    )
}

export default UserCard