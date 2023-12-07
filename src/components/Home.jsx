import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='main'className='w-full h-screen bg-[#0a192f]'>

        {/*Contenedor de texto introductorio*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#80ff9b]'>Hola, mi nombre es</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Santiago Avilés</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy Ingeniero de Sistemas</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Especializado en Ciencia de Datos y desarrollo de modelos de ML y Aprendizaje Profundo. 
                Hoy en día estoy enfocado en desarrollar mis habilidades en otros campos relacionados, como lo son la construcción de 
                aplicaciones web enfocado a crecer como desarrollador Full-Stack.</p>
            <div>
                <ul>
                    <li className='text-white group border-2 px-6 py-3 my-2 flex items-center border-[#66ff87] w-[183px]'>
                        <Link to="work" smooth={true} duration={500} offset={-80} className='flex justify-center items-center'>
                            Mis Proyectos
                            <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300 text-[#66ff87]'/> 
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Home