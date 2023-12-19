import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type MenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const NavbarMenu = ({ isMenuOpen, toggleMenu }: MenuProps) => {
  useEffect(() => {
    // If the menu is being opened, prevent scrolling. Otherwise, allow it.
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);
  return (
    <motion.div
      style={{ zIndex: 5, backgroundColor: '#171F29', paddingTop: '64px' }}
      className={`${
        isMenuOpen ? 'block' : 'hidden'
      } fixed text-white w-full flex justify-center text-center md:hidden`}
      initial={{ y: '-100vh' }}
      animate={{ y: isMenuOpen ? '0' : '-100vh' }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-xl flex flex-col items-center justify-center">
        <Link legacyBehavior href="/about">
          <button
            type="button"
            className="block py-2 px-4 hover:bg-gray-700 duration-200 hover:text-blue-500"
            onClick={toggleMenu}
          >
            About Me
          </button>
        </Link>
        <Link legacyBehavior href="/resume">
          <button
            type="button"
            className="block py-2 px-4 hover:bg-gray-700 duration-200 hover:text-blue-500"
            onClick={toggleMenu}
          >
            My Résumé
          </button>
        </Link>
        <Link legacyBehavior href="/skills">
          <button
            type="button"
            className="block py-2 px-4 hover:bg-gray-700 duration-200 hover:text-blue-500"
            onClick={toggleMenu}
          >
            My Skills
          </button>
        </Link>
        <Link legacyBehavior href="/experience">
          <button
            type="button"
            className="block py-2 px-4 hover:bg-gray-700 duration-200 hover:text-blue-500"
            onClick={toggleMenu}
          >
            Work Experience
          </button>
        </Link>
        <Link legacyBehavior href="/projects">
          <button
            type="button"
            className="block py-2 px-4 hover:bg-gray-700 duration-200 hover:text-blue-500"
            onClick={toggleMenu}
          >
            My Projects
          </button>
        </Link>
        <Link legacyBehavior href="/contact">
          <div className="pb-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200">
              Contact Me
            </button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NavbarMenu;
