import { useState } from 'react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-[#F4D3DC] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <a className="logo flex items-center gap-2" href="#">
            <img src={logo} alt="Logo" className="h-8" />
            <h3 className="font-bold text-2xl">Alquimia</h3>
          </a>
          <span
            className={`
                menu flex flex-col items-center justify-center
                w-[73%] h-screen fixed top-0
                z-50 bg-black text-white
                transition-all duration-500 ease-in-out uppercase text-2xl
                md:flex md:flex-row md:static md:w-auto md:h-auto md:bg-transparent md:text-inherit
                md:transition-none md:uppercase-none md:text-lg
                ${isMenuOpen ? 'right-0' : 'right-full'}
                md:right-auto md:space-x-8
                [&>li]:w-full [&>li]:text-center
                [&>li>a]:block [&>li>a]:py-2 [&>li>a]:px-3
              `}
          >
            <li>
              <a href="#" onClick={toggleMenu}>
                Pagina Inicial
              </a>{' '}
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Contato
              </a>
            </li>
            <label
              onClick={toggleMenu}
              className="absolute top-5 right-5 cursor-pointer md:hidden text-4xl" // Aumentei o tamanho para ser mais visível
            >
              X
            </label>
          </span>
          <label
            onClick={toggleMenu}
            className="md:hidden absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-xl"
          >
            Menu
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
