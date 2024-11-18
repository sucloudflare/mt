// layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';  // Exemplo de importação de uma fonte
import './globals.css';  // Importação de estilos globais

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans bg-gray-100 ${inter.className}`}>
        

        {/* Aqui renderizamos o conteúdo específico de cada página */}
        <main>{children}</main>

        <footer className="bg-[#3D113A] p-4 text-white text-center">
          <p>&copy; 2024 Mtrek. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
