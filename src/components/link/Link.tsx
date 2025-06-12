import { Link } from 'react-router-dom'
import '../../index.css'

interface NavLinkProps {
  name: string;
  path: string;
  onClick?: () => void;
}

function NavLink({name, path, onClick}: NavLinkProps) {
  return (
    <Link to={path} onClick={onClick}>
        <p className='text-white font-light text-2xl'>{name}</p>
    </Link>
  )
}

export default NavLink
