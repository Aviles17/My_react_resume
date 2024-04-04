import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import Pacman from '../assets/Pacman-P4.jpg'
import Hypo from '../assets/Hypo-P5.png'
import NB from '../assets/Email-Class.png'
import PST from '../assets/Supertrend-P3.png'
import Dashboard_P from '../assets/Dash-P2.png'

const Proyectos = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#66ff87]'>Proyectos Destacados</p>
                <p className='py-6'>Aqui algunos de mis trabajos mas recientes</p>
            </div>
            
            {/*Contenedor General de la tabla de proyectos */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*Card Item for projects 1*/}
                <div style={{ backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'>
                    {/*Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider '>
                            Enterprise React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                {/*Card Item for projects 2 */}
                <div style={{ backgroundImage: `url(${PST})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/*Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Python Trading Bot
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Aviles17/Bot_Supertrend.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Card Item for projects 3 */}
                <div style={{ backgroundImage: `url(${Dashboard_P})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/*Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Dash/Plotly Realtime Dashboard
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Aviles17/DashBoard_Prototype.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Card Item for projects 4 */}
                <div style={{ backgroundImage: `url(${NB})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/*Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Clasificador de Emails Medicos
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Aviles17/Clasificador-Emails-IA.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Card Item for projects 5 */}
                <div style={{ backgroundImage: `url(${Pacman})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/*Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Pacman IA
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Aviles17/PACMAN.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Card Item for projects 6 */}
                <div style={{ backgroundImage: `url(${Hypo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    {/*Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Hypo Aplicación Movil
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/ICM2310/Hypo.git'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Proyectos