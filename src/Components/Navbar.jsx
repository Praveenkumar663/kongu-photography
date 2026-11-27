import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


    const [isOpen, setIsopen] = useState(false)

    const handleClick = () => {
        setIsopen((isOpen) => !isOpen)
    }

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger status switch once window passes 50px vertical scroll depth
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 2. Attach global native event window listener
    window.addEventListener('scroll', handleScroll);

    // 3. Clean up the event listener when component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>

            
           <nav className={`custom-navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''}`}>


                <div className="container">

                    <Link className='navbar-brand' to='/' onClick={() => setIsopen(false)}>Photograpy</Link>

                    <button className="navbar-toggler" type="button" onClick={handleClick}
                        aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
                        {isOpen ? (
                            <i className="bi bi-x-lg "></i>
                        ) : (
                            <i className="bi bi-list "></i>
                        )}
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link" onClick={() => setIsopen(false)}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" onClick={() => setIsopen(false)}>About</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" className="nav-link" onClick={() => setIsopen(false)}>Portfolio</NavLink>

                            </li>

                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link" onClick={() => setIsopen(false)}>Services</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/testimonials" className="nav-link" onClick={() => setIsopen(false)}>Testimonials</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" onClick={() => setIsopen(false)}>Contact</NavLink>

                            </li>


                        </ul>
                    </div>
                    
                </div>
            </nav>
            

        </>
    )
}

export default Navbar