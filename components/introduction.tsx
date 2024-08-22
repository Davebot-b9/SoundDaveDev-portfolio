"use client"
import Image from 'next/image'
// import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Model from './spline-model';
const Introduction = () =>{
    return(
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid items-center h-full p-8 py-28 md:py-0 md:grid-cols-2'>
            {/* <Image src="/home-4.png" priority width="450" height="450" alt="Avatar" className='pt-9 pl-12'/> */}
            <Model/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-lg leading-tight text-center md:text-left md:text-4xl md:mb-10">Desarrollando mundos virtuales, <br />
                        <TypeAnimation
                            sequence={[
                                'creando aventuras reales',
                                1000,
                                'creando diseños fantasticos',
                                1000,
                                'creando emociones inolvidables',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>
                    <p className='mx-auto mb-2 text-sm md:mx-0 md:mb-8'>
                            Como Python Developer y Unity Game Developer, me dedico a combinar diseño, funcionalidad e interactividad para crear experiencias digitales impactantes y accesibles.
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://wa.me/5575534212"
                            className="flex px-2 py-2 h-auto transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;