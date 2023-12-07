import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> {/*Parent Div*/}

                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#66ff87]'>Acerca de</p>
                </div>
                <div>
                    {/*Empty div for the format*/}
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Saludos, mi nombre es Santiago. Porfavor tomate el tiempo de mirar alrededor</p>
                    </div>
                    <div>
                        <p>Soy un entusiasta a la hora de implementar nuevas soluciones tecnologicas a problemas 
                            tanto empresariales como de la vida cotidiana. Me especializo principalmente en ofrecer soluciones
                            relacionadas con el analisis e interpretación de datos, al igual que la implementación de modelos predictivos
                            relacionados a tecnicas de Inteligencia Artificial o Regresiones. Adicionalmente, me gusta explorar y usar
                            diferentes tecnologias relacionadas al desarrollo de software.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About