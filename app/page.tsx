'use client'; // Adiciona essa linha para marcar o arquivo como cliente

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

  return (
    <div className="w-full h-screen md:h-auto flex flex-col md:flex-row overflow-hidden md:overflow-visible">
      {/* Lado esquerdo - fundo roxo escuro, alinhado à esquerda */}
      <div className="flex flex-col justify-center p-8 bg-[#3D113A] text-white w-full md:w-1/2 h-full md:h-screen relative">
        <img
          src="/logo.png"
          alt="Logo"
          className="
          w-[138px] h-auto mt-0.5 ml-0 mb-0 
          md:w-[127px] md:mt-7 md:ml-4 md:mb-4 
          md:absolute md:top-1 md:left-0
        "
        />
        <div className="text-left " >
          {/* Título em uma linha acima */}
          <h2 className="text-[25px] font-semibold leading-[28px] text-white bg-[#5D1B52] rounded-md p-2 inline-block mt-10 mb-4">
            Mtrek: Economize, <br />
            Ganhe e Realize.
          </h2>

          {/* Texto descritivo logo abaixo */}
          <p className="text-[15px] font-light leading-[18px] text-white max-w-[80%]">
            Tudo em um só lugar! Conheça a maior Plataforma Brasileira que transforma suas Compras Online, Conta de Energia e Mercado Local em ganhos. Torne-se membro e comece a fazer a diferença no seu bolso agora mesmo!
          </p>
        </div>
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-lg cursor-pointer">
          <span>&gt;</span>
        </div>
      </div>

      {/* Lado direito - fundo cinza claro cobrindo o lado direito */}
      <div className="flex justify-center items-center bg-[#F7F7F7] w-full md:w-1/2 h-full md:h-screen">
        {/* Contêiner branco centralizado com borda suave e sombra */}
        <div
          className="flex flex-col justify-center items-center bg-white shadow-lg p-6 w-full max-w-md md:max-w-[350px] h-auto md:h-[500px] rounded-lg box-border"
        >
          {/* Título e subtítulo acima do menu */}
          <div className="text-left mb-4 w-full ">
            <h1 className="text-[24px] font-semibold leading-[23px] text-gray-900 ">
              Economize Mais <br />
              com a Mtrek.
            </h1>
            <p className="mt-2 text-[15px] font-light leading-[16px] text-gray-700">
              Todos os caminhos para <span className="font-semibold">Economizar</span><br /> e realizar estão aqui! Explore e descubra como começar agora!
            </p>
          </div>

          {/* Menu e botões com ícones centralizados */}
          <div className="flex flex-col gap-2 w-full max-w-[250px] mb-2">
            {[
              {
                text: 'Quero ser Membro',
                icon: <FaStore className="text-sm" />,
                bgColor: 'bg-[#5D1B52]',
                textColor: 'text-white',
                link: '/membro'
              },
              {
                text: 'Loja Online',
                icon: <FaShoppingCart className="text-sm" />,
                bgColor: 'bg-transparent',
                textColor: 'text-gray-800 border-gray-300 border',
                link: '/loja'
              },
              {
                text: 'Mercado Livre de Energia',
                icon: <FaSearch className="text-sm" />,
                bgColor: 'bg-transparent',
                textColor: 'text-gray-800 border-gray-300 border',
                link: '/energia'
              },
              {
                text: 'Mercado Local',
                icon: <FaRegHandshake className="text-sm" />,
                bgColor: 'bg-transparent',
                textColor: 'text-gray-800 border-gray-300 border',
                link: '/mercado-local'
              },
              {
                text: 'Blog Mtrek',
                icon: <FaBlog className="text-sm" />,
                bgColor: 'bg-transparent',
                textColor: 'text-gray-800 border-gray-300 border',
                link: '/blog'
              },
              {
                text: 'Central de Ajuda',
                icon: <FaPhoneAlt className="text-sm" />,
                bgColor: 'bg-transparent',
                textColor: 'text-gray-800 border-gray-300 border',
                link: '/ajuda'
              },
              {
                text: 'WhatsApp',
                icon: <FaWhatsapp className="text-sm" />,
                bgColor: 'bg-transparent',
                textColor: 'text-gray-800 border-gray-300 border',
                link: '/whatsapp'
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`flex items-center justify-start gap-2 py-1 px-3 ${item.bgColor} ${item.textColor} rounded-[8px] text-[14px] font-medium transition duration-300 ease-in-out hover:bg-[#5D1B52] hover:text-white`} // Efeito hover roxo
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
