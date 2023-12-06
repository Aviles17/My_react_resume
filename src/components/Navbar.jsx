import React, {useState} from 'react'
import Logo from '../assets/logo_temp.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav) /*Inverso de el estado en el que esta (Cerrar o abrir) */
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

        {/* Logo as Image */}
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}}/>
        </div>

        {/* Menu of options */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>Acerca de</li>
          <li>Habilidades</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>} {/* Icono de Hamburguesa para menu desplegable con If dependiendo del tamaño*/}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>


        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-200' href='/'>
                Linkedin <FaLinkedin size={20}/>
              </a>
            </li>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-200' href='/'>
                Github <FaGithub size={20}/>
              </a>
            </li>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff3333]'>
              <a className='flex justify-between items-center w-full text-gray-200' href='/'>
                Mail <HiOutlineMail size={20}/>
              </a>
            </li>
            <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
              <a className='flex justify-between items-center w-full text-gray-200' href='/'>
                Resume <BsFillPersonLinesFill size={20}/>
              </a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Navbar