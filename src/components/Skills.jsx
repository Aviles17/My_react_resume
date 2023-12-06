import React from 'react'
import databricks_logo from '../assets/Databricks_Logo.png'
import django_logo from '../assets/django.png'
import pandas_logo from '../assets/Pandas_logo.png'
import gcp_logo from '../assets/GCP.png'
import my_sql from '../assets/my_sql.png'
import react_logo from '../assets/React_png.png'
import tensor_flow_logo from '../assets/TensorFlow_logo.png'
import python_logo from '../assets/Python_logo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
        {/*Contenedor principal*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#66ff87]'>Habilidades</p>
                <p className='py-4'>Estas son algunas de las tecnologias en las cuales mas destaco debido a su tiempo de uso</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={databricks_logo} alt='Databricks Icon'/>
                    <p className='py-4'>Databricks</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={python_logo} alt='Python Icon'/>
                    <p className='py-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-19 h-[80px] mx-auto' src={pandas_logo} alt='Pandas Icon'/>
                    <p className='py-4'>Pandas</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-[135px] h-[80px] mx-auto' src={tensor_flow_logo} alt='TensorFlow Icon'/>
                    <p className='py-4'>Tensor Flow</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react_logo} alt='React Icon'/>
                    <p className='py-4'>React Framework</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={gcp_logo} alt='Python Icon'/>
                    <p className='py-4'>Google Cloud Services</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 h-[65px] mx-auto' src={django_logo} alt='Python Icon'/>
                    <p className='py-4'>Django Framework</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 h-[65px] mx-auto' src={my_sql} alt='Python Icon'/>
                    <p className='py-4'>MySQL Workbench</p>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default Skills