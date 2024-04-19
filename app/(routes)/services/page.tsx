"use client"
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            {/* <AvatarServices /> */}
            <div className="grid items-center justify-center h-screen max-w-4xl mx-auto md:grid-cols-2">
                <div className="max-w-[380px] mt-10">
                    <h1 className="mt-10 text-2xl leading-tight text-center md:text-left md:text-2xl md:m-2">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="m-4 text-sm text-justify text-gray-300">Me especializo en la creación de aplicaciones web, aplicaciones de escritorio y el desarrollo de videojuegos. Utilizo una amplia gama de tecnologías, que incluyen Flet, Flutter, PyQT6, Unity Analytics, Unity Muse, Aseprite y TopDown Engine, para crear mundos virtuales, entornos e interfaces de usuario intuitivas y receptivas. Mi enfoque se centra en reflejar la identidad de marca o producto de mis clientes y mejorar su presencia en el mercado a través de soluciones innovadoras y de alta calidad.</p>
                    <a href="/testimonials"
                            className="px-2 py-2 m-3 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                    </a>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;