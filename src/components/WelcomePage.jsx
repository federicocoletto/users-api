/* eslint-disable react/prop-types */
import '../styles/WelcomePage.css'

const WelcomePage = ({ setRegister }) => {

    const handleClickFirstReg = () => {
        setRegister(true)
    }

    return (
        <>
            <h1 className='welcome__h1'>Welcome to my API Users CRUD</h1>
            <button
                className='welcome__button'
                onClick={handleClickFirstReg}
            >Log In</button>
        </>
    )
}

export default WelcomePage