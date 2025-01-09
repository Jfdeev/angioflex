import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";


export default function Navbar({ navOpen }) {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
      console.log(lastActiveLink.current);
      console.log(activeBox.current);
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';

      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';

      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';

      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(initActiveBox, []);

    const activeCurrentLink = (event) => {
      lastActiveLink.current?.classList.remove('active');
      event.target.classList.add('active');
      lastActiveLink.current = event.target;

      activeBox.current.style.top = event.target.
      offsetTop + 'px';
      activeBox.current.style.left = event.target.
      offsetLeft + 'px';
      activeBox.current.style.width = event.target.
      offsetWidth + 'px';
      activeBox.current.style.height = event.target.
      offsetHeight + 'px';
    }

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
                    onClick={activeCurrentLink}
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