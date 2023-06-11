/* eslint-disable react/prop-types */
import '../styles/WelcomePage.css'

const WelcomePage = ({setRegister}) => {
    
    const handleClickFirstReg = () => {
        setRegister(true)
    }
    
    return (
        <div className='welcome-page'>
            <h1 className='welcome-msg'>Bienvenido</h1>
            <button
                className='welcome-btn'
                onClick={handleClickFirstReg}
            >Registrarse</button>
        </div>
    )
}

export default WelcomePage