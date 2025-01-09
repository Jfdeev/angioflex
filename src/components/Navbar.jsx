import React, { useRef } from "react";
import PropTypes from "prop-types";


export default function Navbar({ navOpen }) {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'Sobre',
          link: '#sobre',
          className: 'nav-link'
        },
        {
          label: 'Serviços',
          link: '#servicos',
          className: 'nav-link'
        },
        {
          label: 'Contato',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            
            {
                navItems.map(({label, link, className, ref}, key) => (
                    <a 
                    href={link}
                    key={key}
                    className={className}
                    ref={ref}
                    >
                        {label}
                    </a>
                ))
            }
            <div 
            className="active-box"
            ref={activeBox}
            >
                
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};