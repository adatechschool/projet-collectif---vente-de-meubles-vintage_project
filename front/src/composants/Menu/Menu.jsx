import React from 'react';
import { useState } from 'react';
import menuIcon from "/src/assets/menu_icon.png"


const Menu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">

<nav>
        <section className="MOBILE-MENU flex lg:hidden">
        {/* <button><img src={menuIcon}></img></button> */}
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase"> Produits
                {/* <a href="/about">Produits</a> */}
              </li>
              <li className="border-b border-gray-400 my-8 uppercase"> Mon Compte
                {/* <a href="/portfolio">Mon Compte</a> */}
              </li>
              <li className="border-b border-gray-400 my-8 uppercase"> Contact
                {/* <a href="/contact">Contact</a> */}
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li> Produits
            {/* <a href="/about">Produits</a> */}
          </li>
          <li> Mon Compte
            {/* <a href="/portfolio">Mon Compte</a> */}
          </li>
          <li> Contact
            {/* <a href="/contact">Contact</a> */}
          </li>
        </ul>
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>

        </div>
    );
};

export default Menu;