import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Instagram, MessageCircle, Github, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Davebot-b9",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/oscar-morelos-reyes-696460205/",
    },
    {
        id: 3,
        logo: <MessageCircle size={30} strokeWidth={1} />,
        src: "https://wa.me/5575534212",
    },
    {
        id: 4,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/_davesound_dev?igsh=cGp1Zm9ndHljY2du",
    },
    {
        id: 5,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/channel/UClVumPqV_lRptOOfUeByE5g",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Unreal Survival Game",
        subtitle: "Epic Game Survival",
        description: "Juego de supervivencia en tercera persona para Unreal Engine 4 hecho completamente en C++. Demo reel de un juego de supervivencia en 3D, class bonding con blueprints, sistema de inventario, control de tiempo, IA en enemigos, etc.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "Sound Fresh, IXXE Asistente de voz",
        description: "SoundFresh es un emocionante proyecto que demuestra y amplía mis habilidades en el desarrollo de aplicaciones en Python utilizando la potente biblioteca PyQt6. Creando con Python este asistente virtual fue creado con librerías externas para el reconocimiento de voz, busqueda de información en la web, el reconocimiento del tiempo, etc.",
        date: "May 2023",
    },
    {
        id: 3,
        title: "Unity Game Developer Jr",
        subtitle: "AfterLife Game Studios",
        description: "Como Unity Game Developer, mis principales funciones fue sincronizar animaciones con el comportamiento de enemigos usando maquina de estado finitas, mejorando e innovando el diseño de niveles, activos graficos y la organización del proyecto asi como la documentacion.",
        date: "Ago 2022",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "UTEL Universidad.",
        description: "Platformer 2D El fin del proyecto es practicar lo aprendido, lo visto en las materias de desarrollo de videojuegos 2D, diseño de niveles, game Engines, este juego sirve como referencia a mostrar las habilidades, corregir errores en los Scripts, usando el lenguaje de programación C#",
        date: "Abr 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 4,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
        text: "Certificaciones",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Desarrollo de Aplicaciones Móviles Multiplataforma",
        description: "Ofrezco servicios de desarrollo de aplicaciones móviles multiplataforma que funcionan en dispositivos iOS y Android. Desde aplicaciones empresariales hasta juegos móviles.",
    },
    {
        icon: <Pencil />,
        title: "Diseño de Interfaces de Usuario Modernas",
        description: "Utilizando Flutter, puedo diseñar interfaces de usuario modernas y responsivas que brinden una experiencia de usuario excepcional en dispositivos móviles y de escritorio. ",
    },
    {
        icon: <Computer />,
        title: "Diseño y Programación de Gameplay",
        description: "Creación de mecánicas de juego originales, sistemas de control intuitivos y la implementación de funciones interactivas que brinden una experiencia de juego envolvente y emocionante para los jugadores",
    },
    {
        icon: <Book />,
        title: "Animación y Arte Gráfico de Alta Calidad",
        description: "Con mi experiencia en el uso de herramientas como Aseprite y Unity para la animación y el diseño de arte gráfico, ofrezco servicios de animación y creación de arte visualmente impresionante para videojuegos.",
    },
    {
        icon: <Rocket />,
        title: "Desarrollo de UI Intuitivas y Responsivas",
        description: "Diseño interfaces de usuario que sean fáciles de navegar y que mejoren la experiencia del jugador, asegurando una interacción fluida y sin problemas con el juego.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "SoundFresh Repr",
        image: "/image-1.jpg",
        description: "Reproductor de musica creado con PyQT6, MySQL y CSS, aplicacion de escritorio, interfaz interactiva, accesible y personalizable.",
        urlGithub: "https://github.com/Davebot-b9/SoundFresh-Reproductor",
    },
    {
        id: 2,
        title: "Asistente de voz virtual",
        image: "/image-2.jpg",
        description: "Fue creado con librerías externas para el reconocimiento de voz, busqueda de información en la web, el reconocimiento del tiempo, etc.",
        urlGithub: "https://github.com/Davebot-b9/Asistente-virtual",
    },
    {
        id: 3,
        title: "Fox Adventure",
        image: "/image-3.jpg",
        description: "Sumergete en una aventura en 2D, este juego de plataformas desarrollado en Unity desafia tu habilidad y creatividad para pasar cada nivel.",
        urlGithub: "https://github.com/Davebot-b9/FoxAdventure",
    },
    {
        id: 4,
        title: "Epic Survival Game",
        image: "/image-4.png",
        description: "Este juego de supervivencia desarrollado en Unreal Engine 4 funciona como una Demo para que otro desarrolladores plasmen sus ideas.",
        urlGithub: "https://github.com/Davebot-b9/EpicSurvivalGame",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Oscar David Morelos Reyes",
        email: "odmr345@gmail.com",
        description:
            "¡Estoy emocionado de recibir tu mensaje y colaborar juntos para convertir tu proyecto en realidad! ¡Espero con ansias poder trabajar contigo!",
        imageUrl: "/profile1.jpg",
    },
];