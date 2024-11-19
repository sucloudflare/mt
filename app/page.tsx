'use client'; // Marca o arquivo como cliente

import React, { useEffect } from 'react';
import { FaShoppingCart, FaSearch, FaRegHandshake, FaStore, FaPhoneAlt, FaBlog, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    const heading = document.querySelector('.heading');
    if (heading) {
      setTimeout(() => {
        heading.classList.add('visible');
      }, 500);
    }
  }, []);

  const menuItems = [
    {
      text: 'Quero ser Membro',
      icon: <img src="/pessoa.svg" alt="Ícone" className="w-7 h-7" />,
      bgColor: 'bg-[#5D1B52]',
      textColor: 'text-white',
      link: '/membro',
    },
    {
      text: 'Loja Online',
      icon: <img src="/Lojas.svg" alt="Ícone" className="w-7 h-7" />,
      bgColor: 'bg-transparent',
      textColor: 'text-gray-800 border-gray-300 border',
      link: '/loja',
    },
    {
      text: 'Mercado Livre de Energia',
      icon:  <img src="./mercado.svg" alt="Ícone" className="w-7 h-7" />,
      bgColor: 'bg-transparent',
      textColor: 'text-gray-800 border-gray-300 border',
      link: '/energia',
    },
    {
      text: 'Mercado Local',
      icon: <img src="./energia.svg" alt="Ícone" className="w-7 h-7" />,
      bgColor: 'bg-transparent',
      textColor: 'text-gray-800 border-gray-300 border',
      link: '/mercado-local',
    },
    {
      text: 'Blog Mtrek',
      icon: <img src="./global.svg" alt="Ícone" className="w-6 h-6" />,
      bgColor: 'bg-transparent',
      textColor: 'text-gray-800 border-gray-300 border',
      link: '/blog',
    },
    {
      text: 'Central de Ajuda',
      icon: <img src="./ajuda.svg" alt="Ícone" className="w-7 h-7" />,
      bgColor: 'bg-transparent',
      textColor: 'text-gray-800 border-gray-300 border',
      link: '/ajuda',
    },
    {
      text: 'WhatsApp',
      icon: <FaWhatsapp className="text-sm w-6 h-6" />,
      bgColor: 'bg-transparent',
      textColor: 'text-gray-800 border-gray-300 border',
      link: '/whatsapp',
    },
  ];

  return (
    <div className="w-full h-screen md:h-auto flex flex-col md:flex-row overflow-hidden md:overflow-visible">
      {/* Lado esquerdo (texto roxo) */}
      <div className="flex flex-col justify-center p-8 bg-[#3D113A] text-white w-full md:w-1/2 h-full md:h-screen relative order-last md:order-first">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[138px] h-auto mt-0.5 ml-0 mb-0 md:w-[127px] md:mt-7 md:ml-4 md:mb-4 md:absolute md:top-1 md:left-0"
        />
        <div className="text-left">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-[20.5px] md:text-[29px] font-bold leading-[22px] bg-[#FFBEFB] p-2 inline-block text-[#3D113A] my-0 mb-0">
                Mtrek: Economize,
              </h2>
              <h2 className="text-[20.5px] md:text-[29px] font-bold leading-[22px] bg-[#FFBEFB] p-2 inline-block text-[#3D113A] mt-0 my-2">
                Ganhe e Realize.
              </h2>
            </div>
          </div>

          <p className="text-[16.5px] font-light leading-[18px] text-white max-w-[80%] mt-6">
            <strong> Tudo em um só lugar!</strong> Conheça a maior Plataforma Brasileira que transforma suas<br/> Compras Online, Conta de
            Energia<br/>  e Mercado Local em ganhos. Torne-se<br/>  membro e comece a fazer a diferença no<br/> seu bolso agora mesmo!
          </p>
        </div>
      </div>

      {/* Lado direito (menu) */}
      <div className="flex justify-center items-center bg-[#FFDDFD] w-full md:w-1/2 h-full md:h-screen order-first md:order-last">
        <div className="flex flex-col justify-center items-center bg-white shadow-lg p-6 w-full max-w-md md:max-w-[376px] h-auto md:h-[510px] rounded-lg box-border">
          <div className="text-left mb-4 w-full">
            <h1 className="text-[26.5px] font-semibold leading-[23px] text-gray- mt-0 mb-4">
              Economize Mais <br />
              com a Mtrek.
            </h1>
            <p className="mt-2 text-[16.5px] font-light leading-[16px] text-gray-700 mb-7">
              Todos os caminhos para <span className="font-semibold">Economizar</span>
              <br /> e realizar estão aqui! Explore e
               <br />descubra como começar agora!
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-[264px] mb-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`flex items-center text-[16.5px] justify-start gap-2 py-1 px-3 ${item.bgColor} ${item.textColor} rounded-[8px] text-[14px] font-medium transition duration-300 ease-in-out hover:bg-[#5D1B52] hover:text-white`}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
