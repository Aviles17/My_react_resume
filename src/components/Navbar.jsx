import React, {useState} from 'react'
/*import Logo form '../assets/logo_temp.png' */
import Logo from '../assets/Protected/My_Logo_C.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) /*Inverso de el estado en el que esta (Cerrar o abrir) */
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

        {/* Logo as Image */}
        <div>
            <img src={Logo} alt="Logo" style={{width: '55px'}}/>
        </div>

        {/* Menu of options */}
        <ul className='hidden md:flex'>
          <li>
            <Link to="main" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
            Habilidades
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} offset={-80}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>} {/* Icono de Hamburguesa para menu desplegable con If dependiendo del tamaño*/}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>            
            <Link onClick={handleClick} to="main" smooth={true} duration={500} >
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>            
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              Acerca de
            </Link>
          </li>
          <li className='py-6 text-4xl'>            
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Habilidades
            </Link>
          </li>
          <li className='py-6 text-4xl'>            
            <Link onClick={handleClick} to="work" smooth={true} duration={500} offset={-80}>
              Proyectos
            </Link>
          </li>
          <li className='py-6 text-4xl'>            
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} offset={-80}>
              Contacto
            </Link>
          </li>
        </ul>


        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-200' href='https://www.linkedin.com/in/santiago-avilés'>
                Linkedin <FaLinkedin size={20}/>
              </a>
            </li>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-200' href='https://github.com/Aviles17'>
                Github <FaGithub size={20}/>
              </a>
            </li>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff3333]'>
              <Link to="contact" smooth={true} duration={500} offset={-80} className='flex justify-between items-center w-full text-gray-200'>
                Mail <HiOutlineMail size={20}/>
              </Link>
            </li>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
              <a className='flex justify-between items-center w-full text-gray-200' href='src/assets/Protected/CSV SANTIAGO AVILÉS.pdf' download>
                Resume <BsFillPersonLinesFill size={20}/>
              </a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Navbar