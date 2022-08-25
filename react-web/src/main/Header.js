import { useNavigate } from 'react-router-dom'
import logo from './Logo.png'

const Header = (props) => {
    const nav = useNavigate();
    return (
        <header className='row mb-4 mt-4'>
            <div className='col-5'>
                <img src={logo} className='logo' alt='logo' onClick={()=>nav('/')}/>
            </div>
            <div className='col-7 mt-5 subtitle'>{props.subtitle}</div>
        </header>
    )
}

export default Header