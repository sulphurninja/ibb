import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav class="bg-[#FFD8B9] shadow-2xl  ">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div class="flex items-center justify-between h-16">

          <div class="flex-shrink-0">
            <a href="/" class="text-black font-bold text-lg">
              <img src='/logo.png' alt='logo for imr care mobile and repair care' className='h-10' />
            </a>
          </div>

          {/* <div class="flex md:hidden">

          </div> */}

          {/* Hamburger menu for mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-black hover:text-green-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div
            className={`${isMobileMenuOpen ? 'flex' : 'hidden'
              } md:flex justify-center md:items-center gap-0 md:gap-2 xl:gap-10 absolute md:relative right-0 bg-tranparent md:bg-transparent top-16 md:top-0 pb-4 w-full font-extralight font-serif  pt-2 md:w-auto md:flex-row md:space-x-4 transition-all duration-300`}
          >
            <a
              href="#"
              className="text-black -300 hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-xl font-medium lg:ml-[0%] "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black gray-300 hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
            >
              Accessories
            </a>
            <a
              href="#order"
              className="text-black gray-300 hover:bg-[#7A2E14] -200 hover:text-white  px-3 py-2 rounded-md text-xl font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-black gray-300 hover:bg-green-200 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header